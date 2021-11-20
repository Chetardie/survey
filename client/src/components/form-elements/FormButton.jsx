export const FormButton = ({ children, type = 'submit', variant = 'btn btn--primary', classString = '', label, onButtonClick }) => {
  return (
    <button
      type={type}
      onClick={onButtonClick}
      className={`${variant} ${classString}`}
    >{children || label}
    </button>
  )
}