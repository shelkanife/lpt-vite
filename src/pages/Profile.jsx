import { Container, Typography, Button } from "@mui/material";
import { Link, Outlet, useNavigate } from "react-router-dom";
import FollowersList from "../components/FollowersList";
import ProfileInfoCard from "../components/ProfileInfoCard";
import { getFollowers, getFollowing } from "../services/documents";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCurretUser } from "../services/auth";
import { CircularProgress } from "@mui/material";

const Profile = () => {
  const { displayName } = useParams();
  const [following, setFollowing] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setFollowers([...(await getFollowers(displayName))]);
      setFollowing([...(await getFollowing(displayName))]);
      setLoading(false);
    })();
  }, [displayName]);

  return (
    // <Container>
    <Container sx={{ overflow: "auto", marginBottom: "70px" }}>
      <ProfileInfoCard
        displayName={displayName}
        isMyProfile={displayName === getCurretUser().displayName}
      />
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 700,
          margin: "0 0 25px",
          marginBottom: "16px",
        }}
      >
        Estad&iacute;ticas
      </Typography>
      {displayName === getCurretUser().displayName ? (
        <>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: 700,
              margin: 0, // "0 0 25px",
            }}
          >
            Calif&iacute;canos
          </Typography>
          <Typography>Contesta este corto formulario 👇️</Typography>
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdXi-2s5wfV8NE6rN0xDtJHox9gQ5a8xEag-JT77eiKZSzn6w/viewform?usp=sf_link"
          >
            <Button
              variant="contained"
              fullWidth
              sx={{ marginTop: 0, marginBottom: "25px" }}
            >
              Contestar
            </Button>
          </a>
        </>
      ) : null}

      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 700,
          margin: "0 0 25px",
          marginBottom: "16px",
        }}
      >
        Social
      </Typography>
      {loading ? (
        <CircularProgress
          size={""}
          sx={{
            margin: "auto",
            display: "block",
            width: "180px",
          }}
        />
      ) : (
        <FollowersList following={following} followers={followers} />
      )}
      <Outlet />
    </Container>
  );
};

export default Profile;
