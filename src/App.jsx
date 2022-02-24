import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Profile from './Views/Profile/Profile';
import Home from './Views/Home/Home';
import React from 'react';
import EditProfile from './views/Profile/EditProfile';
import Register from './views/Auth/Register';
import Login from './views/Auth/Login';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>
          <PrivateRoute path="/profile/edit">
            <EditProfile />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
