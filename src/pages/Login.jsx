import {
  Button,
  Container,
  Box,
  Typography,
  TextField,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const handleIsLogin = () => setIsLogin(!isLogin);
  return (
    <Container maxWidth={false} disableGutters>
      <Box
        minHeight="70px"
        sx={{
          paddingY: 4,
        }}
      >
        <Button
          variant="outlined"
          sx={{ float: "right", marginRight: 4 }}
          onClick={handleIsLogin}
        >
          {isLogin ? "Sign Up" : "Login"}
        </Button>
      </Box>
      <Box
        maxWidth={375}
        sx={{
          margin: "auto",
        }}
      >
        <Stack spacing={2}>
          <Typography variant="h4" textAlign="center">
            {isLogin ? "Log In" : "Create your account"}
          </Typography>
          {!isLogin ? (
            <>
              <TextField placeholder="Career" />
              <TextField placeholder="Username" />
            </>
          ) : null}

          <TextField placeholder="Email" />
          <TextField fullWidth placeholder="Password" type="password" />
          <Button variant="contained">
            {isLogin ? "Log In" : "Create account"}
          </Button>
          <Link to="/forget">
            {isLogin ? (
              <Typography sx={{ textAlign: "center" }}>
                Forget password?
              </Typography>
            ) : null}
          </Link>
        </Stack>
      </Box>
    </Container>
  );
};

export default Login;
