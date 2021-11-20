export const FormInput = ({ value, label, name, onValueChange, className }) => {
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