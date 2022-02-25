import React from 'react';
import ProfileForm from '../../components/Profile/ProfileForm';
import { useUser } from '../../context/UserContext';
import { createProfile } from '../../services/profiles';

export default function CreateProfile() {
  const [name, setName] = useState([]);
  const [bio, setBio] = useState([]);
  const [birthday, setBirthday] = [];
  const { user } = useUser();
  const [alert, setAlert] = [];

  console.log('user', user);

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
      const resp = await createProfile({
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
      <p>{alert}</p>
      <ProfileForm
        {...name}
        {...email}
        {...birthday}
        {...bio}
        onSubmit={onSubmit}
        onChange={onChange}
      />
    </div>
  );
}
