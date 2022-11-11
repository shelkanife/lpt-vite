import { Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState } from "react";

// success : #2e7d32
// error: #d32f2f
const Circle = ({ state }) => {
  return (
    <>
      {state === undefined ? (
        <Box
          sx={{
            height: "30px",
            width: "30px",
            color:
              state === undefined ? "inherit" : state ? "#2e7d32" : "#d32f2f",
            border: 1,
            borderRadius: "50%",
            position: "relative",
            lineHeight: "30px",
          }}
        />
      ) : state ? (
        <CheckCircleIcon sx={{ color: "#2e7d32", fontSize: "35px" }} />
      ) : (
        <CancelIcon sx={{ color: "#d32f2f", fontSize: "35px" }} />
      )}
    </>
  );
};

const AnsweresState = ({ state }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        heigth: "30px",
        // width: "30px",
      }}
    >
      {state.map((e) => (
        <Circle state={e} />
      ))}
    </Box>
  );
};

export default AnsweresState;
