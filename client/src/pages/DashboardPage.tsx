
import { Link } from "react-router-dom"
import { useGetAllUserFormsQuery } from "../store/api/formsApi"

export const DashboardPage = () => {
  const { data: forms, isLoading, error } = useGetAllUserFormsQuery()

  if (isLoading) return 'Loading...'
  if (error) return 'Error'

  return (
    <div className="container mx-auto py-10">
      <h2 className="mb-5 text-3xl">My forms</h2>
      <ul className="flex items-center mb-10">
        { forms && forms.map(form => (
          <li key={form.id} className="mr-5 cursor-pointer">
            <Link
              to={`/my-forms/${form.id}`}
            >
              <span className="block w-28 h-24 border-2 border-gray-300 hover:border-green-500 bg-white rounded"></span>
              <span className="block text-lg font-semibold">{form.title}</span>
              <span className="block text-sm ">{form.description}</span>
            </Link>
          </li>
        ))}
      </ul>
      <h2 className="mb-5 text-3xl">Create new form</h2>
      <Link to="/create-form" className="w-28 h-24 border-2 border-gray-300 hover:border-green-500 bg-white flex justify-center items-center rounded cursor-pointer">
        <img src="https://ssl.gstatic.com/docs/templates/thumbnails/forms-blank-googlecolors.png" alt="" />
      </Link>
    </div>
  )
}