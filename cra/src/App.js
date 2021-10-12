import {
  BrowserRouter as Router,
  Switch,
  Route,
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
      </div>
    </Router>
  );
}

export default App;
