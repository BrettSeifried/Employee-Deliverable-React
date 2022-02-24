import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';

export default function EditProfile() {
  return (
    <div>
      <div>
        <h1>Create your Profile!</h1>
      </div>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" placeholder="name" />
        </div>
        <div>
          {/* Use from Sign up */}
          <label>Email:</label>
          <input type="text" placeholder="name" />
        </div>
        <div>
          <label>Birthday:</label>
          <input type="text" placeholder="name" />
        </div>
        <div>
          <label>About Me:</label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
}
