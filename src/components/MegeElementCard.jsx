import { Box, Typography } from "@mui/material";

const MegaElementCard = ({ symbol, name }) => {
  return (
    <Box
      //   component="button"
      //   disabled={disabled}
      //   onClick={() => func(index)}
      sx={{
        // margin: 0,
        // padding: 0,
        // boxSizing: "border-box",
        height: "200px",
        width: "200px",
        border: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "4px",
        margin: "auto",

        // color: active ? "blue" : "inherit",
        // [theme.breakpoints.down("sm")]: {
        //   height: "65px",
        //   width: "65px",
        // },
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
