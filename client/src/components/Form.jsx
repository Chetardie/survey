import axios from "axios"
import { useEffect } from "react"

const Form = () => {
  useEffect(() => {
    axios.get('/api/forms/1')
    .then(res => {
      console.log('res', res)
    })
  }, [])
  return (
    <div className="container mx-auto">
      <div className="col-span-6 sm:col-span-3 my-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="given-name"
          className="mt-1 py-2 px-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
        />
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input type="text" name="email" id="email" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input type="text" name="password" id="password" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
      </div>
    </div>
  )
}

export default Form