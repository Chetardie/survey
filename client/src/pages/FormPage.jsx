import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHttp } from "../hooks/httpHook";

export const FormPage = (props) => {
  const { formId } = useParams()
  const { request } = useHttp()
  const [form, setForm] = useState(null)

  useEffect(() => {
    console.log('formId', formId);
    request(`/api/forms/${formId}`)
    .then((formData) => {
      setForm(formData)
    })
  }, [request, formId])
  if (form?.fields) {
    return (      
      <div>
        {form.fields.map(field => field.type)}
      </div>
    )
  }
  return (
    <div>FormPage: 6180e9f0c7d0a6cf4ea3d371
    </div>
  )
}