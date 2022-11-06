import { Container, Typography } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
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
    <Container>
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
