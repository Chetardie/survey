export interface IFormField {
  fieldType: FormFieldTypes,
  label: string,
  name: string | undefined,
  options: string[],
  required: boolean,
  values: string[]
}

export interface IFormAnswerField {
  name: string | undefined,
  values: string[]
  id: string
}

export interface IFormAnswer {
  createdAt: string,
  date: string,
  fields: Array<IFormAnswerField>,
  updatedAt: string,
  id: string
}

export interface IForm {
  id: string,
  title: string,
  description: string,
  createdAt: string,
  fields: Array<IFormField>,
  answers: Array<IFormAnswer>
}

export type FormFieldTypes = 'input' | 'select' | 'textarea'
export type FormFieldNames = 'Input' | 'Select' | 'Textarea'

export type FieldType = {
  title: FormFieldNames,
  value: FormFieldTypes
}

export type FieldTypes = {
  input: FieldType,
  textarea: FieldType,
  select: FieldType
}