import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { toolbar } from "../components/globalStyles";
import { Outlet } from "react-router-dom";
import { useUserContext } from "../contexts/user";

const NavBarLoggedIn = ({ handleOpen }) => {
  const [show, setShow] = useState(null);
  
  useEffect(() => {
    if (window.scrollY > 500) setShow(true);
    else setShow(false);
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  return (
    <>
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed" sx={{ maxHeight:"70px",backgroundColor:  "#2E7D32"}}>
        <Toolbar sx={toolbar}>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            Tabla peri&oacute;dica
          </Typography>
          {show && !loggedIn ? (
            <Box sx={{ display: { xs: "none", md: "flex", gap: 5 } }}>
              <Button
                variant="contained"
                sx={{ color: "#fff" }}
                onClick={() => handleOpen(true)}
              >
                Iniciar sesi&oacute;n
              </Button>
              <Button
                variant="contained"
                color="success"
                sx={{ color: "#fff", marginRight: 4 }}
                onClick={() => handleOpen(false)}
              >
                Registrarse
              </Button>
            </Box>
          ) : null}
        </Toolbar>
      </AppBar>
    </Box>
    <Outlet/>
    </>
  );
};

export default NavBarLoggedIn;
