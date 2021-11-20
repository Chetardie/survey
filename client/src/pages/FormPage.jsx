import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHttp } from "../hooks/httpHook";
import { FormSelect } from "../components/form-elements/FormSelect";
import { FormInput } from "../components/form-elements/FormInput";

export const FormPage = (props) => {
  const { formId } = useParams()
  const { request } = useHttp()
  const [form, setForm] = useState(null)
  const formElements = {
    input: FormInput,
    select: FormSelect
  }
  useEffect(() => {
    const fetchForm = async () => {
      const formData = await request(`/api/forms/all/${formId}`)
      setForm(formData)
    }
    fetchForm()
  }, [request, formId])
  const onFormValueChange = (e) => {
    const newForm = {...form}
    const fieldToUpdpate = newForm.fields.find(el => el.name === +e.target.name)
    fieldToUpdpate.values[0] = e.target.value
    setForm(newForm)
  }
  const sendForm = (e) => {
    e.preventDefault()
    const data = {
      formId: form._id,
      fields: form.fields
    }
    request('/api/forms/submit', 'POST', data)
  }

  if (form?.fields) {
    return (      
      <div>
        <form onSubmit={sendForm}>
          {form.fields.map(field => {
            const FormEl = formElements[field.fieldType]
            return (
              <FormEl
                key={field.name}
                name={field.name}
                value={field.values[0]}
                label={field.label} 
                options={field.options}
                onValueChange={onFormValueChange} 
              />
            )
          })}
          <button type="submit" className="btn colors.amber">Submit</button>
        </form>
      </div>
    )
  }
  return (
    <div>FormPage
    </div>
  )
}