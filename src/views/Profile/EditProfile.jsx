import React, { useEffect, useState } from 'react';
import ProfileForm from '../../components/Profile/ProfileForm';
import { useUser } from '../../context/UserContext';
import {
  createProfile,
  getProfile,
  updateProfile,
} from '../../services/profiles';

export default function EditProfile() {
  const [name, setName] = useState([]);
  const [bio, setBio] = useState([]);
  const [birthday, setBirthday] = useState([]);
  const { user } = useUser();
  const [alert, setAlert] = useState([]);

  const onChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        return setName(target.value);
      case 'birthday':
        return setBirthday(target.value);
      case 'bio':
        return setBio(target.value);
      default:
        return false;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await updateProfile({
        name,
        email: user.email,
        bio,
        birthday,
      });
      history.pushState('/profile');
    } catch (error) {
      setAlert(error.message);
    }
  };

  return (
    <div>
      <h1>Create your Profile</h1>
      <p>{alert}</p>
      <ProfileForm
        {...name}
        {...birthday}
        {...bio}
        onSubmit={onSubmit}
        onChange={onChange}
      />
    </div>
  );
}
