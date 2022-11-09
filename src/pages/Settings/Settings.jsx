import {
  Container,
  Typography,
  Box,
  Stack,
  Button,
  TextField,
} from "@mui/material";
import "./Settings.css";
import { signout } from "../../services/auth";
import useSettings from "./SettingsLogic";
import { useTheme } from "@mui/material/styles";
import { useToggleColorMode } from "../../contexts/theme";

const Settings = () => {
  const theme = useTheme();
  const { toggleColorMode } = useToggleColorMode();

  const {
    isDisable,
    fileName,
    currentUser,
    handleState,
    handleFileUpload,
    updateInfoProfile,
    saveState,
  } = useSettings();
  return (
    <Container sx={{ paddingY: 3 }}>
      <Box component="form" onSubmit={updateInfoProfile}>
        <Stack direction="row" sx={{ alignItems: "flex-start" }}>
          <Typography sx={{ fontSize: "20px", fontWeight: 700 }}>
            Cuenta
          </Typography>
          <Button
            variant="contained"
            sx={{ marginLeft: "auto" }}
            disabled={isDisable}
            type="submit"
          >
            {saveState}
          </Button>
        </Stack>
        <Box>
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td>Imagen de perfil</td>
                <td>
                  <Button component="label" variant="outlined" sx={{textAlign:"center"}}>
                    Elegir archivo
                    <input
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={handleFileUpload}
                      id="fileToUpload"
                    />
                  </Button>
                  <Typography sx={{ paddingLeft: "16.5px", paddingTop: "5px" }}>
                    {fileName}
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>Correo electr&oacute;nico</td>
                <td>
                  <Box
                    sx={{
                      padding: "16.5px 14px",
                      // height: "1.4375em",
                      borderRadius: "4px",
                      backgroundColor: "#F7F7F7",
                      color: "rgba(0, 0, 0, 0.87)",
                    }}
                    name="email"
                    onChange={handleState}
                    disabled
                  >
                    {currentUser.email}
                  </Box>
                </td>
              </tr>
              <tr>
                <td>Nombre de usuario</td>
                <td>
                  <Box
                    sx={{
                      padding: "16.5px 14px",
                      // height: "1.4375em",
                      borderRadius: "4px",
                      backgroundColor: "#F7F7F7",
                      color: "rgba(0, 0, 0, 0.87)",
                    }}
                    name="email"
                    onChange={handleState}
                    disabled
                  >
                    {currentUser.displayName}
                  </Box>
                </td>
              </tr>
              <tr>
                <td>Correo verifiacado</td>
                <td>
                <Typography sx={{ paddingLeft: "16.5px", paddingTop: "5px" }}>
                    {currentUser.emailVerified ? "Yes" : "No"}
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>Tema</td>
                <td>
                  <Stack
                    direction="row"
                    sx={{
                      width: "100%",
                      display: "flex",
                      // justifyContent: "space-around",
                      // justifyContent: "center",
                      [theme.breakpoints.down("sm")]:{
                        flexDirection:"column"
                      }
                    }}
                  >
                    <Button
                      disableElevation
                      variant={
                        theme.palette.mode === "light" &&
                        !theme.palette.systemMode
                          ? "contained"
                          : "outlined"
                      }
                      sx={{
                        borderRadius: 0,
                        borderTopLeftRadius: 6,
                        borderBottomLeftRadius: 6,
                        [theme.breakpoints.down("sm")]:{
                          borderRadius:0
                        }
                      }}
                      onClick={() => toggleColorMode("light")}
                    >
                      Light
                    </Button>
                    <Button
                      disableElevation
                      sx={{
                        borderRadius: 0,
                      }}
                      variant={
                        theme.palette.systemMode ? "contained" : "outlined"
                      }
                      onClick={() => toggleColorMode("system")}
                    >
                      System
                    </Button>
                    <Button
                      disableElevation
                      sx={{
                        borderRadius: 0,
                        borderTopRightRadius: 6,
                        borderBottomRightRadius: 6,
                        [theme.breakpoints.down("sm")]:{
                          borderRadius:0
                        }
                      }}
                      variant={
                        theme.palette.mode === "dark" &&
                        !theme.palette.systemMode
                          ? "contained"
                          : "outlined"
                      }
                      onClick={() => toggleColorMode("dark")}
                    >
                      Dark
                    </Button>
                  </Stack>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <Button variant="contained" onClick={signout} fullWidth>
                    Cerrar sesi&oacute;n
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Box>
    </Container>
  );
};
export default Settings;
