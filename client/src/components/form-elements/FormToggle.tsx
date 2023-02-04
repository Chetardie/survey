import {FC} from "react"
interface FormToggleProps {
  value: boolean,
  label: string,
  name: string,
  required?: boolean,
  onValueChange: (e: any) => void
}

export const FormToggle: FC<FormToggleProps> = ({ value, label, name, onValueChange, required = false }) => {

  return (
    <div className="form-toggle">
      <label className="switch">
        <input
          name={name}
          onChange={onValueChange}
          checked={value}
          type="checkbox"
          required={required}
        />
        <span className="slider round"></span>
      </label>
      <span className="form-toggle__title">{label}</span>
    </div>
  )
}