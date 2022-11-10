import {
  Box,
  Container,
  TextField,
  InputAdornment,
  Button,
  Typography,
  Stack,
  Divider,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { getAllUsers, getUserByName } from "../services/documents";
import { getAuth } from "firebase/auth";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

const Social = () => {
  const [profiles, setProfiles] = useState([]);
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProfiles([...(await getUserByName(username))]);
  };

  return (
    <Container>
      <Typography variant="h4">Social</Typography>

      <Box>
        <Box component="form" onSubmit={handleSubmit} sx={{ marginBottom: 4 }}>
          <TextField
            sx={{ width: "100%" }}
            id="input-with-icon-textfield"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="filled"
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
          />
        </Box>
      </Box>
      <Divider sx={{ borderBottom: "2px solid #e5e5e5" }} />
      <Box sx={{ height: "500px", overflowY: "auto", padding: 2 }}>
        {profiles.length === 0 ? (
          <Typography>
            Busca un perfil con el nombre <strong>exacto</strong>
          </Typography>
        ) : (
          profiles.map((username) => {
            console.log(username);
            return (
              <UserLink
                username={username.displayName}
                photoUrl={username.photoURL}
              />
            );
          })
        )}
      </Box>
    </Container>
  );
};

const UserLink = ({ photoUrl, username }) => {
  return (
    <Box sx={{ minHeight: "66px" }}>
      <Link
        to={`/profile/${username}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Stack direction="row" spacing={1} sx={{ paddingBottom: "10px" }}>
          <Box sx={{ display: "flex", flexGrow: 1 }}>
            <Avatar
              sx={{
                height: "48px",
                width: "48px",
                marginRight: 3,
              }}
              src={photoUrl}
            />
            <Typography sx={{ lineHeight: "48px" }}>{username}</Typography>
          </Box>
        </Stack>
      </Link>
      <Divider sx={{ borderBottom: "2px solid #e5e5e5" }} />
    </Box>
  );
};
export default Social;
