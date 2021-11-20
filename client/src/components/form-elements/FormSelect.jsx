export const FormSelect = ({ value, options, label, name, onValueChange, className }) => {
  return (
    <label className={`${className} form-label`} >
      <span className="form-label-text">{label}</span>
      <select
        value={value}
        onChange={onValueChange}
        name={name}
        className="form-select"
      >
        { options.map((option, idx) => (
          <option
            key={option + idx}
            value={option}
          >{option}</option>
        )) }
      </select>
    </label>
  )
}