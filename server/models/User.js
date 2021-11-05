const { model, Types, Schema } = require('mongoose')

const userSchema = new Schema({
  email: {
    type: String, 
    required: true, 
    unique: true
  },
  password: {
    type: String, 
    required: true
  },
  name: {
    type:String,
    required: true
  },
  forms: [
    {
      type: Types.ObjectId,
      ref: 'Form'
    }
  ]
}, { timestamps: true })

const User = model('User', userSchema)

module.exports = User