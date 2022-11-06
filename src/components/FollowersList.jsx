import { Typography, Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FollowRow from "./FollowRow";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const FollowersList = ({ following, followers }) => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {}, [followers, following]);
  return (
    <Box>
      <Box>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label={`Seguidores(${followers.length})`} {...a11yProps(0)} />
            <Tab label={`Siguiendo(${following.length})`} {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {followers.map((userInfo) => (
            <FollowRow
              displayName={userInfo.displayName}
              photoURL={userInfo.photoURL}
              key={userInfo.displayName}
            />
          ))}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {following.map((userInfo) => (
            <FollowRow
              displayName={userInfo.displayName}
              photoURL={userInfo.photoURL}
              key={userInfo.displayName}
            />
          ))}
        </TabPanel>
      </Box>
    </Box>
  );
};

export default FollowersList;
