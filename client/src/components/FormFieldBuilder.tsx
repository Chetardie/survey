import { useState, ChangeEvent } from "react"
import { FormInput } from "./form-elements/FormInput"
import { FormSelect } from "./form-elements/FormSelect"
import { FormToggle } from "./form-elements/FormToggle"
import { FormTextarea } from "./form-elements/FormTextarea"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FormFieldTypes, FieldTypes, FieldType } from "../types"

const fieldTypes: FieldTypes = {
  input: {
    title: 'Input',
    value: 'input'
  },
  textarea: {
    title: 'Textarea',
    value: 'textarea'
  },
  select: {
    title: 'Select',
    value: 'select'
  }
}
const options: Array<FieldType> = Object.values(fieldTypes)

type fieldOption = {
  id: number
  value: string
}

const defaultFieldOptions = [{id: 0, value: ''}]

export const FormFieldBuilder = () => {
  const [title, setTitle] = useState<string>('')
  const [type, setType] = useState<FormFieldTypes>('input')
  const [requiredField, setRequiredField] = useState(false)
  const [fieldOptions, setFieldOptions] = useState<fieldOption[]>(defaultFieldOptions)
  const [error, setError] = useState<string>('')

  const addFieldOption = (value: string) => {
    if (!value) return
    
    // const isDuplicate = fieldOptions.some(el => el.toLowerCase() === value.toLowerCase())
    // if (isDuplicate) {
    //   setError('Option aready exists')
    //   return
    // }
    // setFieldOptions([...fieldOptions, value])
  }

  const updateFieldOptions = (value: string, id: number) => {
    const updatedOptions = [...fieldOptions]
    const selectedOption = updatedOptions.find(el => el.id === id)
    if (selectedOption) selectedOption.value = value
    setFieldOptions(updatedOptions)
  }

  const addNewLine = () => {
    const lastOption = fieldOptions[fieldOptions.length - 1]
    if (lastOption.value) {
      setFieldOptions([...fieldOptions, {
        id: Date.now(),
        value: ''
      }])
    }
  }
  const removeLine = (id: number) => {
    if (fieldOptions.length > 1) setFieldOptions(fieldOptions.filter(el => el.id !== id))
  }

  return (
    <div className="bg-white rounded p-3">
      <div className="flex">
        <FormInput 
          value={title}
          name="title"
          label={'Title'}
          onValueChange={setTitle}
          className="flex-1 pr-2"
        />
        <FormSelect 
          value={type}
          name="field-type"
          objectOptions={options}
          label={'Field type'}
          onValueChange={(key: FormFieldTypes) => setType(key)}
          className="flex-1 pl-2"
        />
      </div>
      <div>
        {
          type === 'input' || type === 'textarea'
          ? (
            <div>
              <FormInput 
                onValueChange={() => {}}
                value=""
                name="input-example"
                placeholder="Example answer"
                disabled={true}
                className="flex-1 pr-2"
              />
            </div>
          ) : ''
        }
        {
          type === 'select'
          ? (
            <ul>
              {
                fieldOptions.map((el, idx, arr) => (
                  <li key={el.id}>
                    <FormInput
                      value={el.value}
                      onValueChange={(value) => updateFieldOptions(value, el.id)}
                      name="input-example"
                      className="flex-1 pr-2"
                      variant="underlined"
                      placeholder="Type option"
                    />
                    {
                      arr.length - 1 === idx && <button onClick={() => addNewLine()}>+</button>
                    }
                    
                    <button onClick={() => removeLine(el.id)}>-</button>
                  </li>
                ))
              }
              <li>
                <FormInput
                  value={'Add new option'}
                  onValueChange={(value) => null}
                  onClick={() => addNewLine()}
                  name="input-example"
                  className="flex-1 pr-2"
                  variant="underlined"
                  placeholder="Type option"
                />
              </li>
            </ul>
          ) : ''
        }
      </div>
      <div className="flex justify-end mt-5">
        <button className="mr-4">
        <FontAwesomeIcon icon="trash-alt" />
        </button>
        <FormToggle name={'required'}  value={requiredField} label={'Required'} onValueChange={(e) => setRequiredField(!requiredField)} />
      </div>
    </div>
  )
}