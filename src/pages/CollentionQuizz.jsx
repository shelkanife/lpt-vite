import { useNavigate } from "react-router-dom";
import { groups } from "./data"
import FourOptsQuizz from "../components/FourOptQuizz";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container,Box,Button,Typography,LinearProgress } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Test from "../components/Test";
const CollectionQuizz = () => {
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState(0);
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();
    const { group } = useParams();

  useEffect(() => {
    // setData({ ...groups[group] });
    // setLoading(false);
  }, []);
  
  const handleChange = () => {
    setValue((prev) => (prev >= 4 ? 0 : ++prev));
  };

  const handleClose = () => {
    navigate("/quizz");
  };

  return(
    <Container className="container">
      {loading ? null : (
        <div className="unscroll">
          <Box >
          <Box sx={{display:"flex"  }}>
            <Button color="inherit" onClick={handleClose}>
              <CloseIcon sx={{ float: "left" }} />
            </Button>
            <Typography variant="h4" sx={{ display: "inline" }}>
              Quizz
            </Typography>
            </Box>
            <LinearProgress variant="determinate" value={(value * 100) / 4} />
          </Box>
          
          <Test index={0} value={value}>
            <FourOptsQuizz symbol="C" description="Selecciona el nombre del elemento con base en el símbolo mostrado"/>
          </Test>
         
          <Box
            sx={{
              flex: 0.5,
              width: "100%",
              marginBottom: value === 4 ? 1 : 0,
            }}
          >
            {value !== 4 ? (
              <Button
                variant="contained"
                color="success"
                onClick={handleChange}
                sx={{
                  width: "100%",
                  // margin: "auto",
                }}
                disabled={disabled}
              >
                Siguiente
              </Button>
            ) : (
              <Stack
                // spacing={2}
                direction="row"
                sx={{
                  width: "100%",
                  gap: 2,
                  [theme.breakpoints.down("sm")]: {
                    flexDirection: "column",
                    gap: 1,
                    // marginLeft: 0,
                  },
                }}
              >
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleChange}
                  sx={{
                    width: "100%",
                    margin: "auto",
                  }}
                >
                  Repetir
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleClose}
                  sx={{
                    width: "100%",
                    margin: "auto",
                  }}
                >
                  Salir
                </Button>
              </Stack>
            )}
          </Box>
        </div>
      )}
    </Container>
    )
}

export default CollectionQuizz