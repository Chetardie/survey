import axios from "axios"
import { useHistory } from "react-router"
import { useCallback, useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"

export const useHttp = () => {
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { token, logout, isAuthenticated } = useContext(AuthContext)

  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    setLoading(true)
    if (body) {
      headers['Content-Type'] = 'application/json'
    }
    if (isAuthenticated) {
      headers['Authorization'] = `Bearer ${token}`
    }
    return new Promise((resolve, reject) => {
      axios({ method, url, data: body, headers })
        .then(response => {
          resolve(response.data)
        }).catch(e => {
          if (e.response.status === 401) {
            logout()
            history.push('/auth')
          }
          setError(e?.response?.data?.message || e.message)
          reject(e?.response?.data?.message || e.message)
        }).finally(() => {
          setLoading(false)
        })
    })
  }, [logout, history, token, isAuthenticated])

  const clearError = useCallback(() => setError(null), [])

  return { loading, request, error, clearError }
}