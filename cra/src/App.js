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
  Localisation
} from './pages/';

const App = () => {
  return (
    <Router>
      <div className="container py-3">
        <Switch>
          <Route path='/components'>
            <Components />
          </Route>
          <Route path='/classvsfunctions'>
            <ClassVsFunctions />
          </Route>
          <Route path='/i18n'>
            <Localisation />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <div>
          <NavLink to="/">Home</NavLink>
        </div>

      </div>
    </Router>
  );
}

export default App;
