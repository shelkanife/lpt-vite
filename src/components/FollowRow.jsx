import { Typography, Box, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

const FollowRow = ({ displayName, photoURL }) => {
  return (
    <Link
      to={`/profile/${displayName}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Box sx={{ borderBottom: 1, marginBottom: 2, padding: "16px" }}>
        <Stack
          direction="row"
          sx={{
            justifyContent: "center",
            alignItems: "center",
            height: "48px",
          }}
        >
          <Avatar
            sx={{
              height: "48px",
              width: "48px",
            }}
            src={photoURL}
          />
          <Typography sx={{ flexGrow: 1, margin: "0 12px" }}>
            {displayName}
          </Typography>
        </Stack>
      </Box>
    </Link>
  );
};
export default FollowRow;
