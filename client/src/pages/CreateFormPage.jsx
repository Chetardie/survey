import { useCallback, useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthContext"
import { useHttp } from "../hooks/httpHook"

export const CreateFormPage = () => {
  const { request } = useHttp()
  const { token } = useContext(AuthContext)

  const createForm = useCallback(() => {
    request('/api/forms/create', 'POST', null, {
      Authorization: `Bearer ${token}`
    })
  }, [request, token])

  useEffect(() => {
    // if (false) createForm()
    if (true) createForm()
  }, [createForm])
  return (
    <div>CreateFormPage</div>
  )
}