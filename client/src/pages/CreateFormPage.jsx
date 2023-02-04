import { useCallback, useEffect } from "react"
import { useHttp } from "../hooks/httpHook"

export const CreateFormPage = () => {
  const { request } = useHttp()

  const createForm = useCallback(() => {
    request('/api/forms/create', 'POST')
  }, [request])

  useEffect(() => {
    // if (false) createForm()
    if (true) createForm()
  }, [createForm])
  return (
    <div>CreateFormPage</div>
  )
}