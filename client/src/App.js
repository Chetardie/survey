
import {BrowserRouter as Router} from 'react-router-dom'
import { useRoutes } from './routes'
import { useAuth } from './hooks/authHook'
import Header from './components/Header'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"

library.add(faTrashAlt)

const App = () => {
  const { isAuthenticated } = useAuth()
  const routes = useRoutes(isAuthenticated)

  return (
    <div className="App">
      <Router>
        <Header />
        {routes}
      </Router>
    </div>
  )
}

export default App
