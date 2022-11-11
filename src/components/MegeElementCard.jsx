import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const MegaElementCard = ({ symbol, name }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "200px",
        width: "200px",
        border: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "4px",
        margin: "auto",
        [theme.breakpoints.down("sm")]: {
          height: "180px",
          width: "180px",
        },
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          padding: 1,
          //   [theme.breakpoints.down("sm")]: {
          //     padding: 0,
          //   },
        }}
      >
        <Typography fontWeight={700} fontSize={80}>
          {symbol}
        </Typography>
        <Typography fontSize={25}>{name}</Typography>
      </Box>
    </Box>
  );
};

export default MegaElementCard;
