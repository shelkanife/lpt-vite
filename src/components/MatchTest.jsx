import { Box, Stack, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ElementCard from "./ElementCard";
import { mix } from "../services/mixCards";
import { useRef } from "react";
import { useTheme } from "@mui/material/styles";
import { groups } from "../pages/data";
const MatchTest = ({ func, description, group }) => {
  const [words, setWords] = useState({});
  const [elements, setElements] = useState({});
  const [game, setGame] = useState([]);
  const [wArray, setWArray] = useState([1, 2, 3, 4, 5]);
  const [eArray, setEArray] = useState([6, 7, 8, 9, 10]);
  const [loading, setLoading] = useState(true);
  const [matched, setMatched] = useState([]);
  const timer = useRef();
  const theme = useTheme();

  useEffect(() => {
    if (matched.length >= 10) func(false);
    let id;
    if (game.length <= 2)
      if (game.length === 2) {
        if (Math.abs(game[0] - game[1]) < 5) setGame([...game.slice(1)]);
        if (Math.abs(game[0] - game[1]) === 5) {
          console.log("they match");
          setMatched([...matched, ...game]);
        } else console.log("they do not match");
        id = setTimeout(() => {
          console.log("aqui va");
          setGame([]);
        }, 100);
      }
    return () => clearTimeout(id);
  }, [game]);

  useEffect(() => {
    setWArray(mix(wArray));
    setEArray(mix(eArray));
    setWords({ ...groups[group].words });
    setElements({ ...groups[group].elements });
    console.log(elements, words);
    setLoading(false);
  }, []);

  const addToMatrix = (index) => {
    console.log(index);
    setGame([...game, index]);
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
      {loading ? null : (
        <Stack
          direction="row"
          justifyContent="center"
          spacing={4}
          sx={{
            height: "100%",
            padding: 4,
            // border: 1,
            alignItems: "center",
            [theme.breakpoints.down("md")]: { padding: 0 },
          }}
        >
          <Stack
            sx={{
              height: "auto",
              gap: "16px",
              [theme.breakpoints.down("md")]: { gap: "5px" },
            }}
          >
            {wArray.map((index) => {
              return (
                <ElementCard
                  name={words[index]}
                  index={index}
                  func={addToMatrix}
                  active={game.includes(index)}
                  disabled={matched.includes(index)}
                />
              );
            })}
          </Stack>
          <Stack
            sx={{
              gap: "16px",
              [theme.breakpoints.down("md")]: { gap: "5px" },
            }}
          >
            {eArray.map((index) => (
              <ElementCard
                name={elements[index].name}
                symbol={elements[index].symbol}
                func={addToMatrix}
                index={index}
                active={game.includes(index)}
                disabled={matched.includes(index)}
              />
            ))}
          </Stack>
        </Stack>
      )}
    </Box>
  );
};
export default MatchTest;
