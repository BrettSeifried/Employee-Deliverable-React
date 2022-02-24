import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Acme Inc. Employee Directory</h1>
      <h2>Your social are of Acme Inc.!</h2>
      <p>
        Before you can get networking on the Intranet here, Please &nbsp;
        <Link to="/register">Create an account</Link> or &nbsp;
        <Link to="/login">Sign in!</Link>
      </p>
    </div>
  );
}
