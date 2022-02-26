import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './componentz/Header/Header';
import PrivateRoute from './componentz/PrivateRoute/PrivateRoute';
import Profile from './viewz/Profile/Profile';
import Home from './viewz/Home/Home';
import React from 'react';
import EditProfile from './viewz/Profile/EditProfile';
// import Register from './views/Auth/Register';
import Login from './viewz/Auth/Login';
import Confirm from './viewz/Auth/Confirm';
import { UserProvider } from './context/UserContext';
import { ProvideAuth } from './context/AuthContext';
import { ProfileProvider } from './context/ProfileContext';

function App() {
  return (
    <ProvideAuth>
      <UserProvider>
        <ProfileProvider>
          <Router>
            <Header />
            <main>
              <Switch>
                <PrivateRoute path="/profile/edit">
                  <EditProfile />
                </PrivateRoute>
                <PrivateRoute path="/profile/create">
                  <EditProfile isCreating />
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
                <Route path="/confirm/">
                  <Confirm />
                </Route>
              </Switch>
            </main>
          </Router>
        </ProfileProvider>
      </UserProvider>
    </ProvideAuth>
  );
}

export default App;
