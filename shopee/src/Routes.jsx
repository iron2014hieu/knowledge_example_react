import React from 'react'
import { Route, Switch } from 'react-router-dom'
import RegisterLayout from 'src/layouts/RegisterLayout/RegisterLayout'
import { path } from './constants/path'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'

export default function Routes() {
  return (
    <Switch>
      <Route path={path.home} exact>
        <Home />
      </Route>
      <Route path={path.login}>
        <RegisterLayout title="Đăng nhập">
          <Login />
        </RegisterLayout>
      </Route>
      <Route path={path.register}>
        <RegisterLayout title="Đăng ký">
          <Register />
        </RegisterLayout>
      </Route>
      <Route path={path.notFound}>
        <NotFound />
      </Route>
    </Switch>
  )
}
