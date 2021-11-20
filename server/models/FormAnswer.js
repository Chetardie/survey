const { model, Types, Schema } = require('mongoose')

const formAnswerSchema = new Schema({
  date: { type: Date, default: Date.now },
  fields: [{
    type: Object,
    name: {
      type: Number,
      required: true
    },
    values: [{
      type: String
    }]
  }]
}, { timestamps: true })

const FormAnswer = model('FormAnswer', formAnswerSchema)

module.exports = FormAnswer