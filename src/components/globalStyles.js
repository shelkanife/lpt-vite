export const btn = {
  minWidth: "270px",
  padding: "0 16px",
  height: "50px",
  margin: "auto",
};
export const logo = (theme) => {
  return {
    [theme.breakpoints.down("md")]: {
      width: 192,
      height: 192,
    },
    width: 360,
    height: 360,
  };
};
export const mainStack = (theme) => {
  return {
    justifyContent: "center",
    alignItems: "center",
    paddingY: 2,
    paddingX: "48px",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
      margin: "12px auto",
    },
  };
};
export const sectionStack = (theme, direction) => {
  return {
    justifyContent: "center",
    alignItems: "center",
    paddingY: 2,
    maxWidth: 600,
    padding: "40px",
    margin: "auto",

    [theme.breakpoints.up("md")]: {
      flexDirection: direction ? "row" : "row-reverse",
      alignItems: "center",
      maxWidth: 1065,
      margin: "auto",
    },
  };
};
export const sectionImage = () => {
  return {
    width: 192,
    height: 192,
    marginLeft: "24px",
    marginRight: "48px",
  };
};
export const sectionDivider = () => {
  return {
    borderBottom: "2px solid #e5e5e5",
    margin: "auto",
    maxWidth: 1065,
  };
};
export const modal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  height: "100vh",
  p: 4,
  // border: "none",
};
export const toolbar = {
  padding: "0 40px",
  maxWidth: "1065px",
  margin: "0 auto",
  width: "100%",
  // border: 1,
};
export const sideIcon = (theme) => {
  return {
    width: "36px",
    height: "36px",
    marginLeft: "8px",
    marginRight: "10px",
    lineHeight: "36px",

    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginTop: "8px",
      marginRight: 0,
      width: "20px",
      height: "20px",
    },
  };
};
