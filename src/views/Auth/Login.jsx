import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AuthLogin from '../../components/Auth/AuthLogin';
import { useUser } from '../../context/UserContext';

import { signInUser, signUpUser } from '../../services/users';

export default function Login({ isSigningUp = false }) {
  const { setUser } = useUser();
  const history = useHistory();

  const handleAuth = async (email, password) => {
    try {
      if (isSigningUp) {
        await signUpUser(email, password);
        history.push('/confirm');
      } else {
        const resp = await signInUser(email, password);
        setUser({ id: resp.id, email: resp.email });
        history.replace('/profile');
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <h2>{isSigningUp ? 'Welcome' : 'Sign in'}</h2>
      <AuthLogin
        onSubmit={handleAuth}
        label={isSigningUp ? 'Sign Up' : 'Sign in'}
      />
      {isSigningUp ? (
        <p>
          Already have an Account? <Link to="/login">SignIn</Link>
        </p>
      ) : (
        <p>
          Sign Up <Link to="/register">Sign Up</Link>
        </p>
      )}
    </div>
  );
}
