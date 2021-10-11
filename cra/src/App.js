import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import { Home } from './pages/Home';
import { OtherPage } from './pages/OtherPage';
import './styles/main.scss';
//import { ButtonRegular, ButtonRegularOutline } from './buttons/';


function App(props) {
  return (
    <Router>
      <Switch>
        <Route path="/next-page">
          <OtherPage />
        </Route>
        <Route path="/">
          <Home text='hello react' monParam="test" />
        </Route>
      </Switch>
      <div className="container">
        <NavLink to="/next-page" className='btn btn-primary'>Go to next Page</NavLink>
        &nbsp;<NavLink exact={true} to="/" className='btn btn-primary'>home</NavLink>
      </div>
    </Router>
  );
}

export default App;
