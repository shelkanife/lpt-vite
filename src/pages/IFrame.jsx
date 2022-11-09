import { Container, Box, Typography,Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import './styles.css';

const IFrame = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/learn");
  };
  return (
    <Container className="container">
      <div className="unscroll">
      <Box sx={{  }}>
          <Box sx={{display:"flex"  }}>
            <Button color="inherit" onClick={handleClose}>
              <CloseIcon sx={{ float: "left" }} />
            </Button>
            <Typography variant="h3">Memorama</Typography>
            </Box>
          </Box>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            height:"100%"
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
      </div>
    </Container>
  );
};

export default IFrame;
