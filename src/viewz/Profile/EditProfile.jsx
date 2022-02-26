import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ProfileForm from '../../componentz/Profile/ProfileForm';
import { useUser } from '../../context/UserContext';
import { createProfile, updateProfile } from '../../services/profiles';

export default function EditProfile({ isCreating = false }) {
  const [name, setName] = useState([]);
  const [bio, setBio] = useState([]);
  const [birthday, setBirthday] = useState([]);
  const { user } = useUser();
  const [alert, setAlert] = useState();
  const [email, setEmail] = useState(user.email);
  const history = useHistory();

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
      if (isCreating) {
        await createProfile({ name, email, bio, birthday });
        history.push('/profile');
      } else {
        const resp = await updateProfile({ name, email, bio, birthday });
        history.replace('/profile');
      }
    } catch (error) {
      // throw error;
      setAlert(error.message);
      // console.log('error', error)
    }
  };

  return (
    <div>
      <h1>{isCreating ? 'Create your Profile' : 'Edit Profile'}</h1>
      <p>{alert}</p>
      <ProfileForm
        {...name}
        {...birthday}
        {...bio}
        {...email}
        onSubmit={onSubmit}
        onChange={onChange}
      />
    </div>
  );
}
