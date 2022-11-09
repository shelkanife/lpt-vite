import { Card, CardActions, Container, Typography, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const Mnemonics = () => {
  return (
    <Container >
      <Typography variant="h3">Mnemotecnia</Typography>
      <Box sx={{ padding: "24px 16px"}}>
        <Card sx={{ display: "flex", alignItems: "center", paddingX: "16px",marginBottom:"16px" }}>
          <Link
            to="groups/16"
            style={{ textDecoration: "none", color: "inherit", flex: 1 }}
          >
            <Typography>Grupo 16</Typography>
          </Link>
          <CardActions>
            <ArrowForwardIosIcon />
          </CardActions>
        </Card>
        <Card sx={{ display: "flex", alignItems: "center", paddingX: "16px",marginBottom:"16px" }}>
          <Link
            to="groups/17"
            style={{ textDecoration: "none", color: "inherit", flex: 1 }}
          >
            <Typography>Grupo 17</Typography>
          </Link>
          <CardActions>
            <ArrowForwardIosIcon />
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
};

export default Mnemonics;
