import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { Link, Route } from 'react-router-dom';

export default function Profile() {
  return (
    <div>
      <div>
        <h1>Create your Profile!</h1>
      </div>
      <form>
        <div>
          <label>Name:</label>
        </div>
        <div>
          {/* Use from Sign up */}
          <label>Email:</label>
        </div>
        <div>
          <label>Birthday:</label>
        </div>
        <div>
          <label>About Me:</label>
        </div>
        <button type="button">
          <Link to="/profile/edit">Edit Profile</Link>
        </button>
      </form>
    </div>
  );
}
