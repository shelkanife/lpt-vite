import { Card, CardActions, Container, Typography, Stack } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const Mnemonics = () => {
  return (
    <Container >
      <Typography variant="h3">Mnemonics</Typography>
      <Stack spacing={2}>
        <Card sx={{ display: "flex", alignItems: "center", paddingX: "16px" }}>
          <Link
            to="groups/16"
            style={{ textDecoration: "none", color: "inherit", flex: 1 }}
          >
            <Typography>Group 16</Typography>
          </Link>
          <CardActions>
            <ArrowForwardIosIcon />
          </CardActions>
        </Card>
        <Card sx={{ display: "flex", alignItems: "center", paddingX: "16px" }}>
          <Link
            to="groups/17"
            style={{ textDecoration: "none", color: "inherit", flex: 1 }}
          >
            <Typography>Group 17</Typography>
          </Link>
          <CardActions>
            <ArrowForwardIosIcon />
          </CardActions>
        </Card>
      </Stack>
    </Container>
  );
};

export default Mnemonics;
