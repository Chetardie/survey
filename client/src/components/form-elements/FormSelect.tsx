import React, {ChangeEvent, FC} from "react"

export type OptionObject = {
  title: string,
  value: string
}

type Props = {
  value: string,
  label: string | undefined,
  name: string | undefined,
  stringOptions?: string[],
  objectOptions?: OptionObject[],
  className?: string | undefined,
  disabled?: boolean,
  onValueChange: (e: any) => void,
  required?: boolean
}

export const FormSelect: FC<Props> = ({
  value,
  stringOptions,
  objectOptions,
  label, 
  name,
  onValueChange,
  className,
  disabled,
  required = false 
}) => {
  const isStringOptions = !!stringOptions
  return (
    <label className={`${className} form-label`} >
      <span className="form-label-text">{label}</span>
      <select
        value={value}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => onValueChange(e.target.value)}
        name={name}
        className="form-select"
        disabled={disabled}
        required={required}
      >
        {
          isStringOptions && stringOptions ? stringOptions.map((option) => (
            <option
              key={option}
              value={option}
            >{option}</option>
          ))  
          : null     
        }
        {
          !isStringOptions && objectOptions ? objectOptions.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >{option.title}</option>
          ))
          : null
        }
      </select>
    </label>
  )
}