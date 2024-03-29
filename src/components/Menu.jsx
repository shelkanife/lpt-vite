import { Container, Paper, Stack,Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import PsychologyIcon from "@mui/icons-material/Psychology";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import { useTheme } from "@mui/material/styles";
import { sideIcon } from "./globalStyles";
import MenuItem from "./MenuItem";
import { getCurretUser } from "../services/auth";

const Menu = () => {
  const theme = useTheme();
  return (
    <Container sx={{marginTop:"70px"}}>
      <Stack direction="row" spacing={0}>
        <Box sx={{ 
            height: "256px",
            [theme.breakpoints.up("md")]: {
              position:"relative",
            },
            
            [theme.breakpoints.down("md")]: {
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              height: "auto",
              zIndex:999,}}}>
        <Paper
          sx={{
            boxShadow:"none"
          }}
          // elevation={3}
          
        >
          <Stack
            sx={{
              width: "224px",
              gap: "8px",
              [theme.breakpoints.down("md")]: {
                width: "100%",
                flexDirection: "row",
                gap: 0,
              },
            }}
          >
            <MenuItem uri="/learn" text="Aprende">
              <PsychologyIcon sx={sideIcon} />
            </MenuItem>
            <MenuItem uri="/quizz" text="Evalua">
              <FactCheckIcon sx={sideIcon} />
            </MenuItem>
            <MenuItem uri="/social" text="Social">
              <ConnectWithoutContactIcon sx={sideIcon} />
            </MenuItem>
            <MenuItem
              uri={`/profile/${getCurretUser().displayName}`}
              text="Perfil"
            >
              <AccountCircleIcon sx={sideIcon} />
            </MenuItem>
          </Stack>
        </Paper>
        </Box>
        <Outlet />
      </Stack>
    </Container>
    // <Container>
    //   <Stack direction="row">
    //     <Stack
    //       sx={{
    //         width: "224px",
    //         gap: "8px",
    //         heigth: "100%",
    //         display: { xs: "none", sm: "none", md: "flex" },
    //       }}
    //     >
    //       <SideItem uri="/learn" text="Aprende">
    //         <PsychologyIcon sx={sideIcon} />
    //       </SideItem>
    //       <SideItem uri="/quizz" text="Evalua">
    //         <FactCheckIcon sx={sideIcon} />
    //       </SideItem>
    //       <SideItem uri="/social" text="Social">
    //         <ConnectWithoutContactIcon sx={sideIcon} />
    //       </SideItem>
    //       <SideItem uri={`/profile/myProfile`} text="Perfil">
    //         <AccountCircleIcon sx={sideIcon} />
    //       </SideItem>
    //     </Stack>

    //     <Outlet />
    //   </Stack>
    // </Container>
  );
};

export default Menu;
