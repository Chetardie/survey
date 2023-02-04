import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLoginMutation, useRegisterMutation } from '../store/api/authApi'
import { selectIsAuthenticated, logout as logoutAction } from '../store/slices/authSlice'

export const useAuth = () => {
  const [login] = useLoginMutation()
  const [register] = useRegisterMutation()
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const dispatch = useDispatch()
  const logout = useCallback(() => {
    dispatch(logoutAction())
  }, [dispatch])

  return { login, logout, register, isAuthenticated }
}