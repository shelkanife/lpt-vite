import {
  Box,
  Typography,
  IconButton,
  TextField,
  Stack,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Test from "../Test";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MegaElementCard from "../MegeElementCard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Logic from "./Logic";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const CorrectSymbol = ({ func, description, group }) => {
  const theme = useTheme();
  const {
    elements,
    words,
    value,
    elementName,
    inputDisabled,
    btnDisabled,
    error,
    nextElement,
    prevElement,
    handleChange,
    checkAnswer,
  } = Logic(group, func);

  return (
    <Box
      sx={{
        padding: 2,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        // border: 1,
      }}
    >
      <Typography>
        <strong>Instrucciones:</strong> {description}
      </Typography>
      <Box
        sx={{
          padding: 1,
          // border: 1,
          flex: 1,
          // alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          display: "flex",
          position: "relative",
          flexDirection: "column",
        }}
      >
        <Stack
          direction="row"
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <Box>
            <IconButton color="inherit" component="label" onClick={prevElement}>
              <ArrowBackIosIcon />
            </IconButton>
          </Box>
          {Object.values(elements).map((element, index) => (
            <Test index={index} value={value} style={{ flex: 1 }} key={index}>
              <MegaElementCard
                name={words[index + 1]}
                symbol={element.symbol}
                style={{
                  width: "200px",
                  height: "200px",
                  fontSize: "2rem",
                  margin: "auto",
                }}
              />
            </Test>
          ))}
          <Box>
            <IconButton color="inherit" component="label" onClick={nextElement}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </Stack>
        <CheckCircleIcon
          color="success"
          sx={{
            fontSize: 100,
            margin: "auto",
            visibility: inputDisabled ? "visible" : "hidden",
            [theme.breakpoints.down("sm")]: {
              fontSize: 50,
            },
          }}
        />
        <TextField
          id="outlined-basic"
          label="Nombre del elemento"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          onChange={handleChange}
          value={elementName}
          error={error}
          focused
          sx={{ width: "100%", marginTop: "10px" }}
          disabled={inputDisabled}
        />
      </Box>
      <Button variant="outlined" disabled={btnDisabled} onClick={checkAnswer}>
        Comprobar
      </Button>
    </Box>
  );
};

export default CorrectSymbol;
