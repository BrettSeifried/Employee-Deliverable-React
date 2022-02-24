import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <div>
        <Link to="/">
          <h1>Acme Inc.</h1>
        </Link>
      </div>
      <div>
        <p>Signedin/Not signed in</p>
      </div>
    </div>
  );
}
