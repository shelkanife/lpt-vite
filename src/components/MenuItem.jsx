import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";

const MenuItem = ({ uri, children, text }) => {
  const location = useLocation();
  console.log(uri.split("/"));
  const theme = useTheme();

  // setCurrentPage(iconType);
  return (
    <Box
      sx={{
        height: "56px",
        textDecoration: "none",
        color: location.pathname.includes(uri.split("/")[1])
          ? "#1976d2"
          : "inherit",
        [theme.breakpoints.down("md")]: {
          flexGrow: 1,
        },
      }}
      component={Link}
      to={uri}
    >
      <Stack
        direction="row"
        sx={{
          [theme.breakpoints.down("md")]: {
            alignItems: "center",
            flexDirection: "column",
            fontSize: "10px",
          },
        }}
      >
        {children}
        <Typography
          sx={{
            fontSize: "inherit",
            fontWeight: 700,
            letterSpacing: ".8px",
            textTransform: "uppercase",
            lineHeight: "36px",
          }}
        >
          {text}
        </Typography>
      </Stack>
    </Box>
  );
};
export default MenuItem;
