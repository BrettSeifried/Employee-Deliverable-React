import { Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Profile from './Views/Profile/Profile';
import Home from './Views/Home/Home';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <PrivateRoute>
          <Profile />
        </PrivateRoute>
        <Route>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
