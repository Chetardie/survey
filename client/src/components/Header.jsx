import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext)

  return (<div className="relative bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
      <div className="flex justify-start lg:w-0 lg:flex-1">
        <NavLink to="/" className="text-lg font-semibold">
          <span>Survey</span>
        </NavLink>
      </div>
      <div className="mr-2 my-2 md:hidden">
        <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
          <span className="sr-only">Open menu</span>
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {
        isAuthenticated &&
          <nav className="hidden md:flex space-x-10">
            <NavLink to="/dashboard" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Dashboard
            </NavLink>
            <NavLink to="/my-forms" className="text-base font-medium text-gray-500 hover:text-gray-900">
              My forms
            </NavLink>
          </nav>
      }
      <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        {
          isAuthenticated
            ? <button
                onClick={logout}
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >Logout</button>
            :  <div>
                  <NavLink to="/auth?action=login" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                    Sign in
                  </NavLink>
                  <NavLink to="/auth?action=signup" className="btn btn--primary ml-3">
                    Sign up
                  </NavLink>
              </div>
        }
      </div>
    </div>
  </div>

  <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
      <div className="pt-5 pb-6 px-5">
        <div className="flex items-center justify-between">
          <div>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"/>
          </div>
          <div className="-mr-2">
            <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-6">
          <nav className="grid gap-y-8">
            <NavLink to="/dashboard" className="m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
              Dashboard
            </NavLink>
            <NavLink to="/my-forms" className="m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
              My forms
            </NavLink>
          </nav>
        </div>
      </div>
      <div className="py-6 px-5 space-y-6">
        <div>
        <NavLink to="/auth?o=signin" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
          Sign up
        </NavLink>
          <p className="mt-6 text-center text-base font-medium text-gray-500">
            Existing customer?
            <a href="/" className="text-indigo-600 hover:text-indigo-500">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>)
}

export default Header