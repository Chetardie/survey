import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHttp } from "../hooks/httpHook";
import { FormSelect } from "../components/form-elements/FormSelect";
import { FormInput } from "../components/form-elements/FormInput";
import { FormFieldType, IForm } from "../types"
import { FormButton } from "../components/form-elements/FormButton";

export const FormPage = () => {
  const { formId } = useParams<{formId?: string}>()
  const { request } = useHttp()
  const [form, setForm] = useState<IForm | null>(null)
  const getFormElement = (elType: FormFieldType) => {
    const formElements: any = {
      input: FormInput,
      select: FormSelect
    }
    return formElements[elType]
  }

  useEffect(() => {
    const fetchForm = async () => {
      const formData: IForm = await request(`/api/forms/all/${formId}`)
      setForm(formData)
    }
    fetchForm()
  }, [request, formId])
  const onFormValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (form) {
      const newForm = {...form}
      const fieldToUpdpate = newForm.fields.find(el => el.name === +e.target.name)
      if (fieldToUpdpate) fieldToUpdpate.values[0] = e.target.value
      setForm(newForm)
    }
  }
  const sendForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = {
      formId: form?.id,
      fields: form?.fields
    }
    request('/api/forms/submit', 'POST', data)
  }

  if (form?.fields) {
    return (      
      <div>
        <form onSubmit={sendForm}>
          {form.fields.map(field => {
            const FormEl = getFormElement(field.fieldType)
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
          <FormButton classString="btn colors.amber" label="Submit" />
        </form>
      </div>
    )
  }
  return (
    <div>FormPage
    </div>
  )
}