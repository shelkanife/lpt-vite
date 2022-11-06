import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../contexts/user";

const RequireAuth = () => {
  // a custom hook to keep track of user's auth status
  const { loggedIn, checkingStatus } = useUserContext();

  return (
    <>
      {
        // display a spinner while auth status being checked
        checkingStatus ? (
          <div>Cargando ...</div>
        ) : loggedIn ? (
          // if user is logged in, grant the access to the route
          // note: in this example component is Bar
          <Outlet />
        ) : (
          // else render an unauthorised component
          // stating the reason why it cannot access the route
          <Navigate to="/" />
        )
      }
    </>
  );
};

export default RequireAuth;
