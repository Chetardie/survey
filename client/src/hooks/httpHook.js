import axios from "axios"
import { useCallback, useState } from "react"
import { useAuth } from "./authHook"

export const useHttp = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { logout } = useAuth()

  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    setLoading(true)
    if (body) {
      headers['Content-Type'] = 'application/json'
    }
    return new Promise((resolve, reject) => {
      axios({ method, url, data: body, headers })
        .then(response => {
          resolve(response.data)
        }).catch(e => {
          if (e.response.status === 401) logout()
          setError(e?.response?.data?.message || e.message)
          reject(e?.response?.data?.message || e.message)
        }).finally(() => {
          setLoading(false)
        })
    })
  }, [logout])

  const clearError = useCallback(() => setError(null), [])

  return { loading, request, error, clearError }
}