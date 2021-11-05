const Form = require("../models/form")
const User = require('../models/User')

class FormsController {
  async getForm (req, res, next) {
    try {
      const form = await Form.findById(req.params.formId)
      res.json(form)
    } catch {
      res.status(500).json({message: 'Something went wrong!'})
    }
  }

  async createForm (req, res, next) {
    try {
      const user = await User.findById(req.user.userId)
      const form = new Form({
        title: '1', description: '213', fields: [{ 
          type: 'input',
          values: [''],
          options: [''],
          label: 'label',
          required: true
        }], author: user
      })
  
      await form.save()  
      res.status(201).json({ form })
    } catch {
      res.status(500).json({message: 'Something went wrong!'})
    }
  }

  async submitForm (req, res, next) {

  }

  async deleteForm (req, res, next) {

  }
}

module.exports = new FormsController()