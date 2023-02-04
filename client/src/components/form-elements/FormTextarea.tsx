import {FC} from "react"

type Props = {
  value: string,
  label?: string,
  name: string | undefined,
  className?: string,
  disabled?: boolean,
  placeholder?: string | undefined,
  required?: boolean,
  onValueChange: (e: any) => void
}

export const FormTextarea: FC<Props> = ({ value, label, name, onValueChange, disabled, className, placeholder, required = false }) => {
  return (
    <label className={`${className} form-label`}>
      <span className="form-label-text">{label}</span>
      <textarea
        name={name}
        value={value}
        onChange={onValueChange}
        className="form-textarea" 
        disabled={disabled}
        placeholder={placeholder}
        required={required}
      />  
    </label>
  )
}