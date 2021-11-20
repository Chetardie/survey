const { model, Types, Schema } = require('mongoose')

const formSchema = new Schema({
  date: { type: Date, default: Date.now },
  author: {
    type: Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  answers: [{
    type: Types.ObjectId,
    ref: 'FormAnswer'
  }],
  fields: [{ 
    type: Object,
    name: {
      type: Number,
      required: true
    },
    fieldType: {
      type: String,
      required: true
    },
    values: [{
      type: String
    }],
    options: [{
      type: String
    }],
    label: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      required: true
    }
  }]
}, { timestamps: true })

const Form = model('Form', formSchema)

module.exports = Form