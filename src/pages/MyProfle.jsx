import { Container, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import FollowersList from "../components/FollowersList";
import ProfileInfoCard from "../components/ProfileInfoCard";
import MyProfile from "../components/MyProfile";
import { getFollowers, getFollowing } from "../services/documents";
import { getCurretUser } from "../services/auth";
import { useEffect, useState } from "react";

const MyProfilePage = () => {
  const [following, setFollowing] = useState([]);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    (async () => {
      setFollowing([...(await getFollowing(getCurretUser().displayName))]);
      setFollowers([...(await getFollowers(getCurretUser().displayName))]);
    })();
  }, []);

  return (
    <Container disableGutters>
    {/* <Container disabñeGutters sx={{ overflow: "auto", marginBottom: "70px" }}> */}

      <MyProfile />
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
      <FollowersList following={following} followers={followers} />
      <Outlet />
    </Container>
  );
};

export default MyProfilePage;
