import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Profile from './Views/Profile/Profile';
import Home from './Views/Home/Home';
import React from 'react';
import EditProfile from './views/Profile/EditProfile';
// import Register from './views/Auth/Register';
import Login from './views/Auth/Login';
import Confirm from './views/Auth/Confirm';
import { UserProvider } from './context/UserContext';
import { ProvideAuth } from './context/AuthContext';

function App() {
  return (
    <ProvideAuth>
      <UserProvider>
        <Router>
          <Header />
          <main>
            <Switch>
              <PrivateRoute path="/profile/edit">
                <EditProfile />
              </PrivateRoute>
              <PrivateRoute path="/profile">
                <Profile />
              </PrivateRoute>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/register">
                <Login isSigningUp />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route>
                <Confirm />
              </Route>
            </Switch>
          </main>
        </Router>
      </UserProvider>
    </ProvideAuth>
  );
}

export default App;
