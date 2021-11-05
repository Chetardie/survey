import { Redirect, Route, Switch } from "react-router"
import { AuthPage } from './pages/AuthPage' 
import { DashboardPage } from "./pages/DashboardPage"
import { FormPage } from './pages/FormPage' 
import { HomePage } from './pages/HomePage' 
import { MyFormsPage } from "./pages/MyFormsPage"

export const useRoutes = isAuth => {
  if (isAuth) {
    return (
      <Switch>
        <Route path="/forms/:formId">
          <FormPage />
        </Route>
        <Route path="/dashboard" exact>
          <DashboardPage />
        </Route>
        <Route path="/my-forms" exact>
          <MyFormsPage />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Redirect to="/" />
      </Switch>
    )
  } else {
    return (
      <Switch>
        <Route path="/forms/:formId">
          <FormPage />
        </Route>
        <Route path="/auth" exact>
          <AuthPage />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Redirect to="/" />
      </Switch>
    )
  }
}