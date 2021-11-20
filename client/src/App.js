
import {BrowserRouter as Router} from 'react-router-dom'
import { useRoutes } from './routes'
import { useAuth } from './hooks/authHook'
import { AuthContext } from './context/AuthContext'
import Header from './components/Header'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"

library.add(faTrashAlt)

const App = () => {
  const {token, login, logout, userId, ready} = useAuth()

  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)

  if (!ready) {
    // return <Loader />
    return <div>Loader</div>
  }

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <div className="App">
        <Router>
          <Header />
          {routes}
        </Router>
      </div>
    </AuthContext.Provider>
  )
}

export default App
