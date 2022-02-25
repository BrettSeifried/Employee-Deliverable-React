import { createContext } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getProfile } from '../services/profiles';
import { useUser } from './UserContext';

export const ProfileContext = createContext();

function ProfileProvider({ children }) {
  //   const { user } = useUser();
  //   const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    bio: '',
    birthday: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const resp = await getProfile();
      setProfile(resp);
    };
    fetchProfile();
  }, []);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('put it within a ProfileProvider, dummy');
  }
  return context;
};

export { ProfileProvider, useProfile };
