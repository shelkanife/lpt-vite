import {
  Stack,
  Box,
  Card,
  CardHeader,
  Typography,
  CardContent,
  Button,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import SettingsIcon from "@mui/icons-material/Settings";
import IconButton from "@mui/material/IconButton";
import { useUserContext } from "../contexts/user";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const MyProfile = () => {
  const theme = useTheme();

  const {
    currentUser: { displayName, email, photoURL },
  } = useUserContext();

  return (
    <Card sx={{ marginBottom: "16px" }}>
      <CardHeader
        title="Perfil"
        sx={{
          display: {
            xs: "flex",
            sm: "flex",
            md: "none",
          },
          textAlign: "center",
          borderBottom: 1,
        }}
        action={
          <IconButton component={Link} to="/profile/settings">
            <SettingsIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Stack
          direction="row"
          sx={{
            [theme.breakpoints.up("md")]: {
              flexDirection: "row-reverse",
            },
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              // border: 1,
              [theme.breakpoints.up("md")]: {
                margin: 2,
                padding: 2,
                position: "relative",
              },
            }}
          >
            <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
              {displayName}
            </Typography>
            <Typography sx={{ fontSize: "17px", fontWeight: 500 }}>
              {email}
            </Typography>
            {/* <Typography sx={{ fontSize: "15px", fontWeight: 500 }}>
                Amigos: {}
              </Typography> */}
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "flex",
                },
                position: "absolute",
                top: "25%",
                right: 0,
                marginRight: "16px",
              }}
            >
              <Link
                to="/profile/settings"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button variant="contained">Editar perfil</Button>
              </Link>
            </Box>
          </Box>
          <Box sx={{ position: "relative" }}>
            <Avatar
              sx={{
                height: "180px",
                width: "180px",
                [theme.breakpoints.down("md")]: {
                  height: "77px",
                  width: "77px",
                },
              }}
              src={photoURL}
            />
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default MyProfile;
