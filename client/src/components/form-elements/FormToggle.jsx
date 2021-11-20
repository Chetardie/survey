export const FormToggle = ({ value, label, name, onValueChange }) => {
  return (
    <div className="form-toggle">
      <label className="switch">
        <input
          name={name}
          onChange={onValueChange}
          checked={value}
          type="checkbox"
        />
        <span className="slider round"></span>
      </label>
      <span className="form-toggle__title">{label}</span>
    </div>
  )
}