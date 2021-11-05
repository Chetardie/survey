require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes')
const app = express()
const port = process.env.PORT

app.use(express.json({ extended: true }))

app.use('/api', router)

const start = async () => {
  try {
		await mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
		app.listen(port, () => console.log(`Server started on port: ${port}`))
	} catch (e) {
		console.error('Something went wrong', e)
	}
}

start()