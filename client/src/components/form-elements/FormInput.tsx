import React, {FC} from "react"

interface FormInputProps {
  value: string,
  label: string,
  name: string,
  className: string,
  onValueChange: () => void
}

export const FormInput: FC<FormInputProps> = ({ value, label, name, onValueChange, className }) => {
  return (
    <label className={`${className} form-label`}>
      <span className="form-label-text">{label}</span>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onValueChange}
        className="form-input" 
      />  
    </label>
  )
}