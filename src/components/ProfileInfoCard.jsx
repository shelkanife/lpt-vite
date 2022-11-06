import {
  Stack,
  Box,
  Card,
  CardHeader,
  Typography,
  CardContent,
  Button,
  CircularProgress,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { getUserInfo, getFollowInfo } from "../services/documents";
import { Link } from "react-router-dom";
import {
  follow,
  unfollow,
  following as amIFollowing,
} from "../services/documents";
import { getCurretUser } from "../services/auth";

const ProfileInfoCard = ({ displayName, isMyProfile }) => {
  const theme = useTheme();

  const [userInfo, setUserInfo] = useState({});
  const [followingUser, setFollowingUser] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleClick = async (e) => {
    setDisabled(true);
    if (followingUser) {
      await unfollow(getCurretUser().displayName, displayName);
      setUserInfo({ ...userInfo, followers: userInfo.followers - 1 });
    } else {
      await follow(getCurretUser().displayName, displayName);
      setUserInfo({ ...userInfo, followers: userInfo.followers + 1 });
    }
    setDisabled(false);
    setFollowingUser((prev) => !prev);
  };

  useEffect(() => {
    (async () => {
      if (isMyProfile) {
        setUserInfo({
          ...getCurretUser(),
          ...(await getFollowInfo(getCurretUser().displayName)),
        });
      } else {
        setFollowingUser(
          await amIFollowing(getCurretUser().displayName, displayName)
        );
        setUserInfo({ ...(await getUserInfo(displayName)) });
      }
      setLoading(false);
    })();
  }, [displayName]);

  return (
    <Card sx={{ marginBottom: "16px" }}>
      <CardHeader
        title="Perfil"
        sx={{
          display: {
            xs: "flex",
            sm: "flex",
            md: "none",
          },
          textAlign: "center",
          borderBottom: 1,
        }}
      />
      <CardContent>
        {loading ? (
          <CircularProgress
            size={""}
            sx={{
              margin: "auto",
              display: "block",
              width: "180px",
              [theme.breakpoints.down("md")]: {
                height: "77px",
                width: "77px",
              },
            }}
          />
        ) : (
          <Stack
            direction="row"
            sx={{
              [theme.breakpoints.up("md")]: {
                flexDirection: "row-reverse",
              },
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                [theme.breakpoints.up("md")]: {
                  margin: 2,
                  padding: 2,
                  position: "relative",
                },
              }}
            >
              <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                {userInfo.displayName}
              </Typography>
              <Typography sx={{ fontSize: "17px", fontWeight: 500 }}>
                {userInfo.email}
              </Typography>
              <Typography sx={{ fontSize: "15px", fontWeight: 500 }}>
                Seguidores: {userInfo.followers} / Siguiendo:{" "}
                {userInfo.following}
              </Typography>
              <Box
                sx={{
                  position: "absolute",
                  top: "25%",
                  right: 0,
                  marginRight: "16px",
                  [theme.breakpoints.down("md")]: {
                    marginRight: "32px",
                    position: "relative",
                    top: 0,
                    marginTop: 1,
                  },
                }}
              >
                {isMyProfile ? (
                  <Link
                    to="/profile/settings"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Button variant="contained">Editar perfil</Button>
                  </Link>
                ) : (
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={handleClick}
                    disabled={disabled}
                  >
                    {followingUser ? "Dejar de seguir" : "Seguir"}
                  </Button>
                )}
              </Box>
            </Box>
            <Box sx={{ position: "relative" }}>
              <Avatar
                sx={{
                  height: "180px",
                  width: "180px",
                  [theme.breakpoints.down("md")]: {
                    height: "77px",
                    width: "77px",
                  },
                }}
                src={userInfo.photoURL}
              />
            </Box>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};

export default ProfileInfoCard;
