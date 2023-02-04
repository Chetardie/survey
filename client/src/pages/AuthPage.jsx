import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"

import { useAuth } from "../hooks/authHook"
import { useQuery } from "../hooks/queryHook"
import { FormButton } from "../components/form-elements/FormButton"
import { FormInput } from "../components/form-elements/FormInput"

export const AuthPage = () => {
  const { login, register, isAuthenticated } = useAuth()
  const history = useHistory()
  const query = useQuery()
  const [actionType, setActionType] = useState('login')
  const [loginForm, setLoginForm] = useState({
    email: {
      value: 'asd@asd.com',
      label: 'Email',
      name: 'email',
      error: ''
    },
    password: {
      value: '123123123',
      label: 'Password',
      name: 'password',
      error: ''
    },
  })
  const [registerForm, setRegisterForm] = useState({
    name: {
      value: '',
      label: 'Name',
      name: 'name',
      error: ''
    },
    email: {
      value: '',
      label: 'Email',
      name: 'email',
      error: ''
    },
    password: {
      value: '',
      label: 'Password',
      name: 'password',
      error: ''
    },
  })

  useEffect(() => {
    setActionType(query.get('action') === 'signup' ? 'signup' : 'login')
  }, [query])

  const onLoginFormValueChange = event => {
    const newForm = { ...loginForm }
    newForm[event.target.name].value = event.target.value
    setLoginForm(newForm)
  }
  const onRegisterFormValueChange = (value, name) => {
    const newForm = { ...registerForm }
    newForm[name].value = value
    setRegisterForm(newForm)
  }
  const submitLoginForm = async (e) => {
    e.preventDefault()
    const data = { ...loginForm }
    Object.values(data).forEach(el => {
      data[el.name] = el.value
    })
    await login(data)
    if (isAuthenticated) history.push('/dashboard')
  }
  const submitRegisterForm = async (e) => {
    e.preventDefault()
    const data = { ...registerForm }
    Object.values(data).forEach(el => {
      data[el.name] = el.value
    })
    
    await register(data)
    if (isAuthenticated) history.push('/dashboard')
  }

  return (
    <div className="container mx-auto mt-10 px-5 sm:px-0">
      {actionType === 'login' && 
        <div className="w-full sm:w-1/2 lg:w-1/4 mx-auto p-5 border-2 border-gray-200 bg-white">
          <span className="block text-center mb-4 text-lg font-semibold">Login</span>
          <form>
            { Object.values(loginForm).map(field => {
              return (
                <FormInput key={field.name} value={field.value} label={field.label} name={field.name} onValueChange={onLoginFormValueChange} />
              )
            }) }
            <FormButton classString="mt-2 w-full" label="Login" onButtonClick={submitLoginForm} />
          </form>
          <p className="mt-6 text-center text-base font-medium text-gray-500">
            <span>Don't have an account?</span>
            <Link to="/auth?action=signup" className="ml-1 text-green-600 hover:text-green-500">
              Sign up
            </Link>
          </p>
        </div>
      }
      {actionType === 'signup' && 
        <div className="w-full sm:w-1/2 lg:w-1/4 mx-auto p-5 border-2 border-gray-200 bg-white">
          <span className="block text-center mb-4 text-lg font-semibold">Sign Up</span>
          <form>
            { Object.values(registerForm).map(field => {
              return (
                <FormInput
                  key={field.name}
                  value={field.value}
                  label={field.label}
                  name={field.name}
                  onValueChange={(value) => onRegisterFormValueChange(value, field.name)} 
                />
              )
            }) }
            <FormButton classString="mt-2 w-full" label="Sign up" onButtonClick={submitRegisterForm} />
          </form>
          <p className="mt-6 text-center text-base font-medium text-gray-500">       
            <span>Existing customer?</span>
            <Link to="/auth?action=login" className="ml-1 text-green-600 hover:text-green-500">
              Login
            </Link>
          </p>
          
        </div>
      }
    </div>
  )
}