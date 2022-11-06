import { Box } from "@mui/material";

const Test = ({ value, index, style, children }) => {
  return (
    <Box
      hidden={value !== index}
      sx={{
        transition: "all 2s",
        flex: 5,
        border: 1,
        height: "100%",
        ...style,
      }}
    >
      {value === index && <Box sx={{ height: "100%" }}>{children}</Box>}
    </Box>
  );
};

export default Test;
