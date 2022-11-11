import { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import MegaElementCard from "./MegeElementCard";

const FourOptsQuizz = ({
  symbol,
  name,
  description,
  options,
  score,
  func,
  index,
  children,
}) => {
  // success : #2e7d32
  // error: #d32f2f
  // primary: ##1976d2

  const [prevElement, setPrevElement] = useState(null);
  const [currentElement, setCurrentElement] = useState(null);
  const [currentName, setCurrentName] = useState(null);
  const [disabled, setDisabled] = useState(false);
  useEffect(() => console.log(currentName));

  const hangeColor = (e, name) => {
    if (prevElement) {
      prevElement.style.backgroundColor = "#fff";
      prevElement.style.color = "#1976d2";
    }
    e.target.style.backgroundColor = "#1976d2";
    e.target.style.color = "#fff";
    setPrevElement(e.target);
    setCurrentName(name);
  };

  const checkAnswer = () => {
    prevElement.style.backgroundColor =
      currentName === name ? "#2e7d32" : "#d32f2f";
    setDisabled(true);
    func();
    score((prev) => {
      console.log(prev);
      const copy = prev.slice();
      copy[index] = currentName === name;
      return [...copy];
    });
  };

  return (
    <Box
      sx={{
        padding: 2,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography>
        <strong>Instrucciones:</strong> {description}
      </Typography>
      <Box
        sx={{
          flex: 1,
          alignContent: "center",
          justifyContent: "center",
          display: "flex",
          position: "relative",
          flexDirection: "column",
        }}
      >
        <MegaElementCard
          // name={name}
          symbol={symbol}
          style={{
            width: "200px",
            height: "200px",
            fontSize: "2rem",
            margin: "auto",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          rowGap: "10px",
          columnGap: "10px",
          marginBottom: "10px",
        }}
      >
        {options.map((option) => (
          <Button
            variant="outlined"
            onClick={(e) => hangeColor(e, option)}
            disabled={disabled}
          >
            {option}
          </Button>
        ))}
      </Box>
      <Button variant="contained" onClick={checkAnswer} disabled={disabled}>
        Comprobar
      </Button>
      {children}
    </Box>
  );
};
export default FourOptsQuizz;
