import { useParams } from "react-router";
import { useGetFormByIdQuery, useSubmitFormMutation } from "../store/api/formsApi";
import Form from "../components/Form";
import { IForm } from "../types";

export const FormPage = () => {
  const { formId } = useParams<{formId: string}>()
  const { data: form, isLoading, error } = useGetFormByIdQuery(formId)
  const [submitForm] = useSubmitFormMutation()

  if (isLoading) return <div>Loading</div>
  if (error) return <div>Error</div>
  if (form) return <Form form={form} submit={(submitedForm: IForm) => submitForm(submitedForm)} />
}