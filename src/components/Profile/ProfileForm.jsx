import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useUser } from '../../context/UserContext';

export default function ProfileForm({
  name,
  email,
  birthday,
  bio,
  onSubmit,
  onChange,
}) {
  const { user } = useUser();

  return (
    <div>
      <div>
        <h1>Create your Profile!</h1>
      </div>
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
          <p>{user?.email}</p>
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
        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
}
