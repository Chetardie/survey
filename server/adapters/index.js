const adaptUser =  (entry) => ({
  name: entry.name,
  email: entry.email
})
const adaptForm = (entry) => ({
  id: entry._id,
  title: entry.title,
  description: entry.description,
  fields: entry.fields.map(adaptFormField)
})
const adaptFormField = (entry) => ({
  fieldType: entry.fieldType,
  name: `${entry.name}`,
  values: entry.values,
  options: entry.options,
  required: entry.required,
  label: entry.label
})
const adaptFormAnswer = (entry) => ({
  id: entry._id,
  date: entry.date,
  fields: entry.fields.map(el => ({
    id: el._id,
    name: `${el.name}`,
    values: el.values
  }))
})
const adaptUserForm = (entry) => ({
  id: entry._id,
  title: entry.title,
  description: entry.description,
  fields: entry.fields,
  answers: entry.answers.map(adaptFormAnswer),
  createdAt: entry.createdAt
})

module.exports = { adaptUser, adaptForm, adaptFormField, adaptFormAnswer, adaptUserForm }