import { Link } from "react-router-dom"
import { useGetAllUserFormsQuery } from "../store/api/formsApi"

export const MyFormsPage = () => {
  const { data: forms } = useGetAllUserFormsQuery()
  
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