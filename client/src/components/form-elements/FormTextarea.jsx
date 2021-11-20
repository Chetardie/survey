export const FormTextarea = ({ value, label, name, onValueChange }) => {
  return (
    <label className="form-label">
      <span className="form-label-text">{label}</span>
      <textarea
        type="text"
        name={name}
        value={value}
        onChange={onValueChange}
        className="form-textarea" 
      />  
    </label>
  )
}