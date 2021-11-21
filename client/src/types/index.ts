export interface IFormField {
  fieldType: FormFieldType,
  label: string,
  name: number,
  options: string[],
  required: boolean,
  values: string[]
}

export interface IFormAnswerField {
  name: number,
  values: string[]
  _id: string
}

export interface IFormAnswer {
  createdAt: string,
  date: string,
  fields: Array<IFormAnswerField>,
  updatedAt: string,
  _id: string
}

export interface IForm {
  id: string,
  title: string,
  description: string,
  createdAt: string,
  fields: Array<IFormField>,
  answers: Array<IFormAnswer>
}

export type FormFieldType = 'input' | 'select' | 'textarea'