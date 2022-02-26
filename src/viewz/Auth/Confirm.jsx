import React from 'react';
import { Link } from 'react-router-dom';

export default function Confirm() {
  return (
    <div>
      <h1>
        Please check your E-mail and confirm your account before continuing
      </h1>
      <Link to="/login">Return to Sign In</Link>
    </div>
  );
}
