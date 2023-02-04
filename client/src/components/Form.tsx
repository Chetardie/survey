import { FormEvent } from "react";
import {ChangeEvent, FC, useEffect, useState} from "react"
import { IForm } from "../types"
import { CompositeFormElement } from "./CompositeFormElement"
import { FormButton } from "./form-elements/FormButton"

type Props = {
  form: IForm,
  submit: (e: any) => void
}

const Form: FC<Props> = ({ form, submit }) => {
  const [stateForm, setForm] = useState<IForm | null>(null)
  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (stateForm) {
      const newForm = {...stateForm}
      const fieldToUpdpate = newForm.fields.find(el => el.name === e.target.name)
      if (fieldToUpdpate) fieldToUpdpate.values[0] = e.target.value
      setForm(newForm)
    }
  }
  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    submit(stateForm)
  }
  useEffect(() => {
    setForm(JSON.parse(JSON.stringify(form)))
  }, [form])

  if (!stateForm) return <></>
  return (
    <div className="container mx-auto">
        <form onSubmit={onFormSubmit}>
          {
            stateForm.fields.map(field => <CompositeFormElement
              field={field}
              onValueChange={onValueChange}
            />)
          }
          <FormButton classString="btn colors.amber" label="Submit" />
        </form>
    </div>
  )
}

export default Form