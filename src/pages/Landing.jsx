import { Container, Stack, Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import NavBar from "../components/NavBar";
import { useTheme } from "@mui/material/styles";
import LandingSection from "../components/LandingSection";
import LoginModal from "../components/LoginModal";
import { btn, logo, mainStack } from "../components/globalStyles";

const Landing = () => {
  const theme = useTheme();
  const [open, setOpen] = useState({ open: false, isLogin: false });
  const handleSetOpen = () => setOpen({ ...open, isLogin: !open.isLogin });
  const handleOpen = (isLogin) => setOpen({ ...open, open: true, isLogin });
  const handleClose = () => setOpen({ ...open, open: false });
  return (
    <Container maxWidth={false} disableGutters>
      <NavBar handleOpen={handleOpen} />
      <Box textAlign="center" paddingY={10} sx={{ backgroundColor: "#235390" }}>
        <Stack sx={mainStack(theme)}>
          <Box component="img" src="./logo512.png" sx={logo(theme)} />
          <Stack spacing={2}>
            <Typography variant="h5" fontWeight={700} color="#fff">
              ¡Aprende la tabla peri&oacute;dica de manera diferente!
            </Typography>
            <Box>
              <Button
                variant="contained"
                color="success"
                sx={btn}
                onClick={() => handleOpen(false)}
              >
                Registrarse
              </Button>
            </Box>

            <Box>
              <Button
                onClick={() => handleOpen(true)}
                variant="contained"
                sx={btn}
              >
                Iniciar sesi&oacute;n
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Box>
      <LandingSection
        title="¿Qué es mnemotecnia?"
        description="Es una técnica intelectual para facilitar la memorización. Se basa en crear una asociación o un vínculo entre la información que se desea retener y algún conocimiento previo para recordarlo con mayor facilidad."
      />
      <LandingSection direction={false} />
      <LandingSection />
      <LandingSection direction={false} />
      <LoginModal
        open={open}
        handleClose={handleClose}
        switchState={handleSetOpen}
      />
    </Container>
  );
};

export default Landing;
