import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import AuthButton from './AuthBtn';
import './Header.css';

export default function Header() {
  const { user } = useUser();

  return (
    <div className="header">
      <div>
        <Link to="/profile">
          <h1>Acme Inc.</h1>
        </Link>
      </div>
      <div>
        <p>
          {user?.email ? (
            <>
              <span>Signed in as </span>
              <span>{user?.email}</span>
            </>
          ) : (
            <span>Not Signed In</span>
          )}
          <AuthButton />
        </p>
      </div>
    </div>
  );
}
