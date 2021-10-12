import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import './styles/main.scss';
import {
  Home,
  Components,
  ClassVsFunctions,
  Localisation,
  HttpRequests
} from './pages/';

const routes = [
  {
    path: '/http-requests',
    exact: true,
    component: HttpRequests
  },
  {
    path: '/components',
    exact: true,
    component: Components
  },
  {
    path: '/classvsfunctions',
    exact: true,
    component: ClassVsFunctions
  },
  {
    path: '/i18n',
    exact: true,
    component: Localisation
  },
  {
    path: '/',
    exact: false,
    component: Home
  }
]

const Routes = () => <Switch>
  {
    routes.map(
      (route, index) => <Route path={route.path} exact={route.exact} key={index}>
        <route.component />
      </Route>
    )
  }
</Switch>;

const BackButton = routeProps => (routeProps.location.pathname !== "/")
  ? <div>
    <NavLink className='btn btn-outline-secondary' to="/">Home</NavLink>
  </div>
  : null;

const App = () => {
  return (
    <Router>
      <div className="container py-3">
        <Routes />
        <Route render={routeProps => <BackButton {...routeProps} />} />
      </div>
    </Router>
  );
}

export default App;
