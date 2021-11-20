import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { useHttp } from "../hooks/httpHook"
import { useParams } from "react-router"
import { FormInput } from "../components/form-elements/FormInput"
import { FormTextarea } from "../components/form-elements/FormTextarea"
import { FormFieldBuilder } from "../components/FormFieldBuilder"

export const FormDetailsPage = () => {
  const [tab, setTab] = useState('questions')
  const [form, setForm] = useState({
    title: '',
    description: '',
    fields: [1]
  })
  const { formId } = useParams()
  const { request } = useHttp()
  const { token } = useContext(AuthContext)
  useEffect(() => {
    request(`/api/forms/details/${formId}`, 'GET', null, {
      Authorization: `Bearer ${token}`
    })
  }, [request, token, formId])

  const onTitleChange = (e) => {
    const newForm = {...form}
    newForm.title = e.target.value
    setForm(form)
  }

  const onDescriptionChange = (e) => {
    const newForm = {...form}
    newForm.description = e.target.value
    setForm(form)
  }
  
  return (
      <div className="container mx-auto">
        <ul className="flex align-center">
          <li onClick={() => setTab('questions')}>Questions</li>
          <li onClick={() => setTab('answers')}>Answers</li>
        </ul>
        <div className="w-1/2 mx-auto">
          {
            tab === 'questions' && (
            <ul>
              <li className="mb-3">
                <FormInput 
                  key={'title'} 
                  name={'title'}  
                  value={form.title} 
                  label={'Form title'} 
                  onValueChange={onTitleChange} 
                />
              </li>
              <li className="mb-3">
                <FormTextarea 
                  key={'description'} 
                  name={'description'}
                  value={form.title} 
                  label={'Form description'} 
                  onValueChange={onTitleChange} 
                />
              </li>
              {
                form.fields.map(field => (
                  <li className="mb-3">
                    <FormFieldBuilder />
                  </li>
                )) 
              }
            </ul>
            )
          }
        </div>
      </div>
  )
  
}