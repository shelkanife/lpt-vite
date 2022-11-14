import {
  Modal,
  Container,
  Box,
  Typography,
  Button,
  Stack,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
// import { Link, useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { modal } from "../components/globalStyles";
import { login, signup } from "../services/auth";
import { useState } from "react";
import { updateProfile } from "firebase/auth";
import { useUserContext } from "../contexts/user";
import { createUserDocument, existsUsername } from "../services/documents";

import { NewUserSchema, UserSchema } from "../schemas/User";

const LoginModal = ({ open, handleClose, switchState }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();
  const { setCurrentUser } = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (open.isLogin) {
      const { error } = UserSchema.validate({ email, password });
      if (error === undefined) {
        login(email, password)
          .then(() => {
            navigate("/learn");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrors(`${errorCode} ${errorMessage}`);
          });
      } else {
        setErrors(error.details[0].message);
      }
    } else {
      const { error } = NewUserSchema.validate({ email, password, username });
      if (error === undefined) {
        const exists = await existsUsername(username);
        if (!exists) {
          const { user } = await signup(email, password);
          await updateProfile(user, { displayName: username });
          await createUserDocument(username, email);
          setCurrentUser(user);
          navigate("/learn");
        } else {
          setErrors("Email asociado a otra cuenta");
        }
      } else {
        setErrors(error.details[0].message);
      }
    }
  };
  return (
    <div>
      <Modal
        open={open.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container maxWidth={false} disableGutters sx={modal}>
          <Box minHeight="70px">
            <Button color="inherit" onClick={handleClose}>
              <CloseIcon sx={{ float: "left" }} />
            </Button>
            <Button
              variant="outlined"
              sx={{ float: "right" }}
              onClick={() => {
                setEmail("");
                setPassword("");
                setErrors("");
                switchState();
              }}
            >
              {open.isLogin ? "Registrarse" : "Iniciar sesión"}
            </Button>
          </Box>
          <Box
            maxWidth={375}
            sx={{
              margin: "auto",
              // height: "100%",
            }}
            component="form"
            onSubmit={handleSubmit}
          >
            <Stack spacing={2}>
              <p
                style={{
                  height: "3rem",
                  backgroundColor: "#d32f2f",
                  color: "#fff",
                  visibility: errors !== "" ? "inherit" : "hidden",
                  paddingY: "5px",
                  // paddingLeft: "5px",
                }}
              >
                {errors}
              </p>
              <Typography variant="h4" textAlign="center">
                {open.isLogin ? "Iniciar sesión" : "Crea tu cuenta"}
              </Typography>
              {!open.isLogin ? (
                <>
                  <TextField
                    placeholder="Nombre de usuario"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                  />
                </>
              ) : null}

              <TextField
                placeholder="Correo electrónico"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <TextField
                fullWidth
                placeholder="Contraseña"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <Button variant="contained" type="submit">
                {open.isLogin ? "Iniciar sesión" : "Crear cuenta"}
              </Button>
              {/* <Link to="/forget"> */}
              {open.isLogin ? (
                <Typography sx={{ textAlign: "center" }}>
                  ¿Olvido su contraseña?
                </Typography>
              ) : null}
              {/* </Link> */}
            </Stack>
          </Box>
        </Container>
      </Modal>
    </div>
  );
};

export default LoginModal;
