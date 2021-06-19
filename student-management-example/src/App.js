import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import StudentManagement from './pages/StudentManagement';
import Register from './pages/Register'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Profile from './pages/profile/Profile';
import StoreContextProvider, { StoreContext } from './app/context';
import { useContext } from 'react';

export const paths = {
  home: '/',
  register: '/register',
  student: '/student',
  profile: '/profile',
  profile1: '/profile/1',
  profile2: '/profile/2',
  profile3: '/profile/3/:id',


}
function App() {
  const { state } = useContext(StoreContext)
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={paths.home} component={Home} />
          <Route path={paths.register} component={Register} />
          <Route
            path={paths.student}
            exact={false}
            component={() => <StudentManagement isLogged={state.isLogged} />}
          />
          <Route path={paths.profile} component={Profile} />

          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
