import { Container, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const IFrame = () => {
  const theme = useTheme();

  return (
    <Container
      sx={{
        margin: 0,
        // border: 1,
        height: "100vh",
      }}
    >
      <Typography variant="h3">Memorama</Typography>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "calc(100% - 70px)",
          [theme.breakpoints.down("lg")]: {
            height: "calc(100% - 130px)",
          },
        }}
      >
        <iframe
          src="https://davidcortes84.github.io/card-matching-game/"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
        ></iframe>
      </Box>
    </Container>
  );
};

export default IFrame;
