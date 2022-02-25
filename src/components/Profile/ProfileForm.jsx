import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useUser } from '../../context/UserContext';

export default function ProfileForm({
  name,
  birthday,
  bio,
  email,
  onSubmit,
  onChange,
}) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div>
          {/* Use from Sign up */}
          <label>Email:</label>
          <p>{email}</p>
        </div>
        <div>
          <label>Birthday:</label>
          <input
            type="date"
            name="birthday"
            value={birthday}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div>
          <label>About Me:</label>
          <textarea
            type="text"
            placeholder="bio"
            name="bio"
            value={bio}
            onChange={(e) => onChange(e)}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
