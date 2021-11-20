const { adaptForm, adaptUserForm } = require("../adapters")
const Form = require("../models/form")
const FormAnswer = require("../models/FormAnswer")
const User = require('../models/User')

class FormsController {
  async getForm (req, res) {
    try {
      const form = await Form.findById(req.params.formId)
      res.json(adaptForm(form))
    } catch {
      res.status(500).json({message: 'Something went wrong!'})
    }
  }
  async getAllForms (req, res) {
    try {
      const forms = await Form.find({ author: req.user.userId }).populate('answers')
      res.json(forms.map(adaptUserForm))
    } catch {
      res.status(500).json({message: 'Something went wrong!'})
    }
  }
  async getFormDetails (req, res) {
    try {
      const form = await Form.findById(req.params.formId).populate('answers')
      res.json(adaptUserForm(form))
    } catch {
      res.status(500).json({message: 'Something went wrong!'})
    }
  }
  async createForm (req, res) {
    try {
      const user = await User.findById(req.user.userId)
      const form = new Form({
        title: '1', description: '213', fields: [{ 
          name: 0,
          fieldType: 'input',
          values: [''],
          options: [''],
          label: 'label',
          required: true
        }], author: user
      })

      form.save()
      user.forms.push(form)
      user.save()
      res.status(201)
    } catch {
      res.status(500).json({message: 'Something went wrong!'})
    }
  }

  async submitForm (req, res) {
    try {
      const { formId, fields: answerFields } = req.body
      const form = await Form.findById(formId)
      const formFields = form.fields
      
      const errors = formFields.map(field => {
        const answerField = answerFields.find(el => el.name === field.name)
        const isFieldInvalid = !answerField || (field.required && !answerField.values[0])
        return isFieldInvalid
        ? {
          message: 'Invalid field',
          name: answerField ? answerField.name : field.name
        }
        : null
      }).filter(el => el)
      if (errors.length) {
        res.status(400).json(errors)
      }

      const answer = new FormAnswer({ fields: answerFields })
      answer.save()
      form.answers.push(answer)
      form.save()

      res.status(200).json({message: 'Form submited'})
    } catch {
      res.status(500).json({message: 'Something went wrong!'})
    }
  }

  async deleteForm (req, res, next) {

  }
}

module.exports = new FormsController()