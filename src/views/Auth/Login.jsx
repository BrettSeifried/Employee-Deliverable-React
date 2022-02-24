import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div>
      <h1>Sign in!</h1>
      <form>
        <div>
          <input type="email" placeholder="email" />
        </div>
        <div>
          <input type="password" placeholder="password" />
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        <p>Need an account?</p>
        <Link to="/register">Sign Up</Link>
      </div>
    </div>
  );
}
