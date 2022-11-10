import { useEffect, useState, createContext, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { getCurretUser } from "../services/auth";
import { getAuth } from "firebase/auth";

export const UserContext = createContext();

export const useUserContext = () => {
  const context = useContext(UserContext);
  return context;
};

export default function UserProvider({ children }) {
  // assume user to be logged out
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  // keep track to display a spinner while auth status is being checked
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    // auth listener to keep track of user signing in and out
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setLoggedIn(true);
        setCurrentUser({
          ...getCurretUser(),
        });
      } else {
        setCurrentUser(null)
        setLoggedIn(false);
      }

      setCheckingStatus(false);
    });
  }, []);

  return (
    <UserContext.Provider
      value={{
        loggedIn,
        checkingStatus,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
  // return { loggedIn, checkingStatus };
}
