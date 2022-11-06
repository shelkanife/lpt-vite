import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth'
import { getCurretUser } from '../services/auth';
export const useAuthListener = () => {
  // assume user to be logged out
  const [loggedIn, setLoggedIn] = useState(false);

  // keep track to display a spinner while auth status is being checked
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    // auth listener to keep track of user signing in and out
    onAuthStateChanged(getCurretUser(),(user) => {
      if (user) {
        setLoggedIn(true);
      }
      else setLoggedIn(false)

      setCheckingStatus(false);
    });
  }, []);

  return { loggedIn, checkingStatus };
};
