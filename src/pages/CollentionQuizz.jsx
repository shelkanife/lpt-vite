import { useNavigate } from "react-router-dom";
import { groups } from "./data";
import FourOptsQuizz from "../components/FourOptQuizz";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import {
  Container,
  Box,
  Button,
  Typography,
  LinearProgress,
  Stack,
  useRadioGroup,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Test from "../components/Test";
import { getOpts } from "../services/mixCards";
import { mix } from "../services/mixCards";
import AnsweresState from "../components/AnswersSatate";

const CollectionQuizz = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const { group } = useParams();

  const [symbols, setSymbols] = useState(groups[group].elementsSymbols);
  const [names, setNames] = useState(groups[group].elementsNames);
  const [order, setOrder] = useState([
    ...mix(Array.from({ length: 5 }, (e, i) => i)),
  ]);
  const [opts, setOpts] = useState([]);

  const [score, setScore] = useState(Array.from({ length: 5 }));

  useEffect(() => {
    setOpts([
      ...Array.from({ length: 5 }, (e, i) => getOpts(names[order[i]], names)),
    ]);
    setLoading(false);
  }, []);

  useEffect(
    () => (value >= 6 ? setDisabled(false) : setDisabled(true)),
    [value]
  );

  const handleChange = () => {
    setValue((prev) => (prev >= 5 ? 0 : ++prev));
    if (value >= 5) setScore(Array.from({ length: 5 }));
  };

  const handleDisabled = () => {
    setDisabled(!disabled);
  };
  const handleClose = () => {
    navigate("/quizz");
  };

  return (
    <Container className="container">
      {loading ? null : (
        <div className="unscroll">
          <Box>
            <Box sx={{ display: "flex" }}>
              <Button color="inherit" onClick={handleClose}>
                <CloseIcon sx={{ float: "left" }} />
              </Button>
              <Typography variant="h4" sx={{ display: "inline" }}>
                Quizz
              </Typography>
            </Box>
            <AnsweresState state={score} />
          </Box>
          {order.map((element, index) => (
            <Test index={index} value={value} key={index}>
              <FourOptsQuizz
                name={names[element]}
                symbol={symbols[element]}
                options={opts[index]}
                description="Selecciona el nombre del elemento con base en el símbolo mostrado"
                func={handleDisabled}
                score={setScore}
                index={value}
              ></FourOptsQuizz>
            </Test>
          ))}
          <Test index={symbols.length} value={value}>
            <Typography textAlign="center" variant="h2">
              Resultado:
            </Typography>
            <Typography textAlign="center" variant="h1">
              {" "}
              {score.filter((e) => e === true).length}/{score.length}
            </Typography>
          </Test>

          <Box
            sx={{
              flex: 0.5,
              width: "100%",
              marginBottom: value === 5 ? 1 : 0,
            }}
          >
            {value !== 5 ? (
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

export default CollectionQuizz;
