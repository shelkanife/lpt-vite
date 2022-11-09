import { Container, Button, Typography, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import Test from "../components/Test";
import { useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { groups } from "./data"
import MatchTest from "../components/MatchTest";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import WritePharase from "../components/WritePharase";
import CorrectSymbol from "../components/CorrectSymbol/CorrectSymbol";
import { useParams } from "react-router-dom";
import { Stack } from "@mui/system";
import './styles.css'
const CollectionTest = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const { group } = useParams();

  useEffect(() => {
    setData({ ...groups[group] });
    setLoading(false);
  }, []);
  useEffect(
    () => (value === 0 ? setDisabled(false) : setDisabled(true)),
    [value]
  );
  const handleChange = () => {
    setValue((prev) => (prev >= 4 ? 0 : ++prev));
  };

  const handleClose = () => {
    navigate("/learn/mnemonics");
  };
  const theme = useTheme();

  return (
    <Container className="container">
      {loading ? null : (
        <div className="unscroll">
          <Box sx={{  }}>
          <Box sx={{display:"flex"  }}>
            <Button color="inherit" onClick={handleClose}>
              <CloseIcon sx={{ float: "left" }} />
            </Button>
            <Typography variant="h4" sx={{ display: "inline" }}>
              Grupo: {data.group}
            </Typography>
            </Box>
          <LinearProgress variant="determinate" value={(value * 100) / 4} />
          </Box>
          <Test index={0} value={value}>
            <h3>Símbolos: {data.elementsSymbols.join(", ")}</h3>
            <h3>Nombres: {data.elementsNames.join(", ")}</h3>
            <h4>Frase: {data.pharase}</h4>
            <div>
              <p>{data.description}</p>
            </div>
          </Test>
          <Test index={1} value={value}>
            <MatchTest
              description="Relaciona los elementos con la palabra nmotica "
              func={setDisabled}
              group={group}
            />
          </Test>
          <Test index={2} value={value}>
            <WritePharase
              description="Escribe la frase nemotecnica."
              func={setDisabled}
              group={group}
            />
          </Test>
          <Test index={3} value={value}>
            <CorrectSymbol
              func={setDisabled}
              group={group}
              description="Escribe el nombre del elemento con base en la palabra nmotica"
            />
          </Test>
          <Test index={4} value={value} func={handleChange}>
            <h3>Símbolos: {data.elementsSymbols.join(", ")}</h3>
            <h3>Nombres: {data.elementsNames.join(", ")}</h3>
            <h4>Frase: {data.pharase}</h4>
            <div>
              <Typography>Ejercicio terminado elige alguna de las siguientes opciones y sigue prácticando</Typography>
            </div>
          </Test>
          <Box
            sx={{
              flex: 0.5,
              // position: "absolute",
              width: "100%",
              // bottom: 0,
              // border: 1,
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
  );
};

export default CollectionTest;
