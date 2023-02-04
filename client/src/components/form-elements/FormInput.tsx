import {ChangeEvent, FC} from "react"

type Props = {
  value: string,
  label?: string | undefined,
  placeholder?: string | undefined,
  name: string | undefined,
  className?: string | undefined,
  disabled?: boolean,
  required?: boolean,
  variant?: string,
  onValueChange: (value: string) => void
  onClick?: () => void
}

export const FormInput: FC<Props> = ({ 
  value, 
  label, 
  name, 
  className, 
  placeholder, 
  disabled = false, 
  required = false,
  variant = 'regular',
  onValueChange,
  onClick
}) => {
  return (
    <label className={`${className} form-label`}>
      <span className="form-label-text">{label}</span>
      <input
        type="text"
        name={name}
        value={value}
        onClick={onClick}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onValueChange(e.target.value)}
        className={`form-input ${variant === 'underlined' ? 'form-input--underlined' : ''}`} 
        placeholder={placeholder}
        disabled={disabled}
        required={required}
      />  
    </label>
  )
}