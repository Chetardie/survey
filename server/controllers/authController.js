const { validationResult } = require("express-validator")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

class AuthController {
  async login (req, res) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Invalid fields'
        })
      }
      
      const { email, password } = req.body

      const user = await User.findOne({ email })
      if (!user) {
        return res.status(400).json({ message: 'Wrong email or password' })
      }
      
      const isMatch = await bcrypt.compare(password, user.password)
      
      if (!isMatch) {
        return res.status(400).json({ message: 'Wrong email or password' })
      }
      
      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      )
        
      res.status(200).json({ token, userId: user.id })

    } catch {
      res.status(500).json({message: 'Something went wrong!'})
    }
  }

  async register (req, res, next) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Invalid fields'
        })
      }

      const { name, email, password } = req.body
      
      const candidate = await User.findOne({ email })
      
      if (candidate) {
        return res.status(400).json({ message: 'User exists' })
      }

      const hashedPassword = await bcrypt.hash(password, 12)
      const user = new User({ name, email, password: hashedPassword })

      await user.save()

      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      )

      res.status(201).json({ token, userId: user.id })
    } catch {
      res.status(500).json({message: 'Something went wrong!'})
    }
  }
}

module.exports = new AuthController()