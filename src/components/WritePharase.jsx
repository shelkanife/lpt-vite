import { Box, Stack, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import ElementCard from "./ElementCard";
import { useTheme } from "@mui/material/styles";
import { groups } from "../pages/data";

const WritePharase = ({ func, description, group }) => {
  const [elements, setElements] = useState({});
  const [ph, setPh] = useState("");
  const [phrase, setPhrase] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    setElements({ ...groups[group].elements });
    setPh(groups[group].pharase);
    setLoading(false);
  }, []);
  useEffect(() => {
    if (phrase) {
      if (phrase !== ph) {
        func(true);
        setError(true);
      } else {
        setError(false);
        func(false);
      }
    } else setError(false);
  }, [phrase]);
  const handleChange = (e) => {
    setPhrase(e.target.value);
  };
  return (
    <Box
      sx={{
        padding: 1,
        // border: 1,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {loading ? null : (
        <Stack
          spacing={0.5}
          sx={{
            // border: 1,
            heigth: "100%",
          }}
        >
          <Typography>
            <strong>Instrucciones:</strong> {description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
              alignItems: "center",
              gap: "5px",
              flex: 2,
              [theme.breakpoints.down("sm")]: {
                gap: 0,
              },
            }}
          >
            {Object.values(elements).map((element) => (
              <ElementCard
                key={element.name}
                name={element.name}
                symbol={element.symbol}
              />
            ))}
          </Box>
          <Box
            sx={{
              marginTop: "50px",
              width: "100%",
              // position: "absolute",
              // bottom: 16,
              // margin: 0,
              // padding: 0,
              // border: 1,
            }}
          >
            <TextField
              type="text"
              label="Frase nmonica"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              onChange={handleChange}
              error={error}
              focused
              helperText={phrase ? (error ? "Frase incorrecta" : "") : ""}
              color={phrase ? (!error ? "success" : "") : ""}
              sx={{ flex: 1, width: "100%" }}
              // minRows={3}
            />
          </Box>
        </Stack>
      )}
    </Box>
    // </Box>
  );
};

export default WritePharase;
