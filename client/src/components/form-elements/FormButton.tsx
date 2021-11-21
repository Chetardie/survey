
import {FC} from "react"

export enum ButtonTypes {
  button = 'button',
  submit = 'submit',
  reset = 'reset'
}

interface Props {
  type?: ButtonTypes,
  variant?: string,
  classString?: string,
  label?: string,
  onButtonClick?: () => void
}

export const FormButton: FC<Props> = ({
  children,
  type = ButtonTypes.submit,
  variant = 'btn btn--primary',
  classString = '',
  label,
  onButtonClick
}) => {
  return (
    <button
      type={type}
      onClick={onButtonClick}
      className={`${variant} ${classString}`}
    >
      {children || label}
    </button>
  )
}