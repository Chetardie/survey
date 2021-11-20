import { useState } from "react"
import { FormInput } from "./form-elements/FormInput"
import { FormSelect } from "./form-elements/FormSelect"
import { FormToggle } from "./form-elements/FormToggle"
import { FormTextarea } from "./form-elements/FormTextarea"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const fieldTypes = {
  input: {
    title: 'Input',
    value: 'Input',
    component: FormInput
  },
  textarea: {
    title: 'Textarea',
    value: 'textarea',
    component: FormTextarea
  },
  select: {
    title: 'Select',
    value: 'select',
    component: FormSelect
  }
}
export const FormFieldBuilder = () => {
  const [title, setTitle] = useState('')
  const [type, setType] = useState()
  return (
    <div className="bg-white rounded p-3">
      <div className="flex">
        <FormInput 
          value={title}
          label={'Title'}
          onValueChange={(e) => setTitle(e.target.value)}
          className="flex-1 pr-2"
        />
        <FormSelect 
          value={type}
          options={Object.values(fieldTypes).map(el => el.title)}
          label={'Field type'}
          onValueChange={(e) => setType(e.target.value)}
          className="flex-1 pl-2"
        />
      </div>
      <div className="flex justify-end mt-5">
        <button className="mr-4">
        <FontAwesomeIcon icon="trash-alt" />
        </button>
        <FormToggle key={'title'} name={'title'}  value={true} label={'Required'} />
      </div>
    </div>
  )
}