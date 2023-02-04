import {FC} from "react"
import { IFormField } from "../types"
import { FormSelect } from "./form-elements/FormSelect"
import { FormInput } from "./form-elements/FormInput"
import { FormTextarea } from "./form-elements/FormTextarea"

type Props = {
  field: IFormField
  className?: string | undefined,
  disabled?: boolean,
  onValueChange: (e: any) => void
}

export const CompositeFormElement: FC<Props> = ({ 
  field,
  onValueChange,
  className,
  disabled = false
}) => {
  return (
    <div>
      {
        field.fieldType === 'input'
        ? <FormInput 
            value={field.values[0]}
            label={field.label}
            name={field.name}
            required={field.required}
            disabled={disabled}
            className={className}
            onValueChange={onValueChange}
          />
        : field.fieldType === 'textarea'
          ? <FormTextarea
              value={field.values[0]}
              label={field.label}
              name={field.name}
              required={field.required}
              disabled={disabled}
              className={className}
              onValueChange={onValueChange}
            />
          : field.fieldType === 'select'
            ? <FormSelect
                value={field.values[0]}
                label={field.label}
                name={field.name}
                stringOptions={field.options}
                required={field.required}
                disabled={disabled}
                className={className}
                onValueChange={onValueChange}
              />
            : ''
      }
    </div>
  )
}