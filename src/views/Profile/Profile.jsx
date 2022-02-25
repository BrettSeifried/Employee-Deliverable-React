import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { Link, Route } from 'react-router-dom';
import { useProfile } from '../../context/ProfileContext';
import { getProfile } from '../../services/profiles';

export default function Profile() {
  const { profile } = useProfile();

  console.log('profile', profile);

  return (
    <div>
      {/* {loading && <p>loading...</p>} */}
      <div>
        <h1>Create your Profile!</h1>
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
