module.exports = {
  adaptUser: (entry) => ({
    name: entry.name,
    email: entry.email
  }),
  adaptForm: (entry) => ({
    id: entry._id,
    title: entry.title,
    description: entry.description,
    fields: entry.fields
  }),
  adaptUserForm: (entry) => ({
    id: entry._id,
    title: entry.title,
    description: entry.description,
    fields: entry.fields,
    answers: entry.answers,
    createdAt: entry.createdAt
  }) 
}