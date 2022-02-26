import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useHistory } from 'react-router-dom';
import { Link, Route } from 'react-router-dom';
import { useProfile } from '../../context/ProfileContext';

export default function Profile() {
  const { profile } = useProfile();

  const history = useHistory();
  return (
    <div>
      <p>
        {profile.name === ''
          ? history.push('/profile/create')
          : history.push('/profile')}
      </p>
      {/* {loading && <p>loading...</p>} */}
      <div>
        <h1>Your Profile!</h1>
      </div>
      <form>
        <div>
          <label>Name:</label>
          <span>{profile.name}</span>
        </div>
        <div>
          {/* Use from Sign up */}
          <label>Email:</label>
          <span>{profile.email}</span>
        </div>
        <div>
          <label>Birthday:</label>
          <span>{profile.birthday}</span>
        </div>
        <div>
          <label>About Me:</label>
          <span>{profile.bio}</span>
        </div>
        <button type="button">
          <Link to="/profile/edit">Edit Profile</Link>
        </button>
      </form>
    </div>
  );
}
