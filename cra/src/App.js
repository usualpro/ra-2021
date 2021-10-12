import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import './styles/main.scss';
import { Home } from './pages/Home';
import { Components } from './pages/Components';




const App = () => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path='/components'>
            <Components />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <NavLink
          exact={true}
          className="btn btn-primary" to="/">
          Home
        </NavLink>&nbsp;
        <NavLink
          className="btn btn-primary"
          to="/components">
          Components
        </NavLink>
      </div>
    </Router>
  );
}

export default App;
