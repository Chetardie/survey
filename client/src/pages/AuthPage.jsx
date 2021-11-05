import { useContext, useState } from "react"
import { useHistory } from "react-router"
import { FormInput } from "../components/form-components/FormInput"
import { AuthContext } from "../context/AuthContext"
import { useHttp } from "../hooks/httpHook"

export const AuthPage = () => {
  const history = useHistory()
  const { request } = useHttp()
  const { login } = useContext(AuthContext)
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

  const onLoginFormValueChange = event => {
    const newForm = { ...loginForm }
    newForm[event.target.name].value = event.target.value
    setLoginForm(newForm)
  }
  const onRegisterFormValueChange = event => {
    const newForm = { ...registerForm }
    newForm[event.target.name].value = event.target.value
    setRegisterForm(newForm)
  }
  const submitLoginForm = async (e) => {
    e.preventDefault()
    const data = { ...loginForm }
    Object.values(data).forEach(el => {
      data[el.name] = el.value
    })
    const userData = await request('/api/auth/login', 'POST', data)
    login(userData.token, userData.userId)
    history.push('/dashboard')
  }
  const submitRegisterForm = async (e) => {
    e.preventDefault()
    const data = { ...registerForm }
    Object.values(data).forEach(el => {
      data[el.name] = el.value
    })
    const userData = await request('/api/auth/register', 'POST', data)
    login(userData.token, userData.userId)
    history.push('/dashboard')
  }

  return (
    <div>AuthPage
      <div className="mb-5">
        Login Form
        <form>
          { Object.values(loginForm).map(field => {
            return (
              <FormInput key={field.name} value={field.value} label={field.label} name={field.name} onValueChange={onLoginFormValueChange} />
            )
          }) }
          <button type="submit" onClick={submitLoginForm}>Sign up</button>
        </form>
      </div>
      <div>
        Register Form
        <form>
          { Object.values(registerForm).map(field => {
            return (
              <FormInput key={field.name} value={field.value} label={field.label} name={field.name} onValueChange={onRegisterFormValueChange} />
            )
          }) }
          <button type="submit" onClick={submitRegisterForm}>Sign up</button>
        </form>
      </div>
    </div>
  )
}