import { useCallback, useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { useHttp } from "../hooks/httpHook"

export const MyFormsPage = () => {
  const [forms, setForms] = useState([])
  const { request } = useHttp()
  const { token } = useContext(AuthContext)

  const getAllForms = useCallback(() => {
    const fetchForms = async () => {
      const forms = await request('/api/forms/getAllForms', 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      setForms(forms)
    }
    fetchForms()
  }, [request, token])

  useEffect(() => {
    // if (false) getAllForms()
    if (true) getAllForms()
  }, [getAllForms])
  
  return (
    <div>
      MyFormsPage
      {forms.map(form => (
        <li key={form.id}>
          <Link
            to={`/my-forms/${form.id}`}
          >{form.title}</Link>
        </li>
      ))}
    </div>

  )
}