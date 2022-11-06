import { Card, Button, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ElementCard = ({ index, symbol, name, func, active, disabled }) => {
  const theme = useTheme();

  return (
    <Box
      component="button"
      disabled={disabled}
      onClick={() => func(index)}
      disab
      sx={{
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        height: "80px",
        width: "80px",
        border: 1,
        color: active ? "blue" : "inherit",
        "&:hover": {
          cursor: "pointer",
        },
        [theme.breakpoints.down("sm")]: {
          height: "65px",
          width: "65px",
        },
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          padding: 1,
          [theme.breakpoints.down("sm")]: {
            padding: 0,
          },
        }}
      >
        <Typography fontWeight={700} fontSize={20}>
          {symbol}
        </Typography>
        <Typography fontSize={symbol ? "inherit" : 20}>{name}</Typography>
      </Box>
    </Box>
  );
};

export default ElementCard;
