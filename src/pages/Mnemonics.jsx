import { Card, CardActions, Container, Typography, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const Mnemonics = () => {
  return (
    <Container >
      <Typography variant="h4">Mnemotecnia</Typography>
      <Box sx={{ padding: "24px 0"}}>
        <Card sx={{ display: "flex", alignItems: "center",marginBottom:"16px" }}>
          <Link
            to="groups/16"
            style={{ textDecoration: "none", color: "inherit", flex: 1,marginLeft:"16px" }}
          >
            <Typography>Grupo 16</Typography>
          </Link>
          <CardActions>
            <ArrowForwardIosIcon />
          </CardActions>
        </Card>
        <Card sx={{ display: "flex", alignItems: "center",marginBottom:"16px" }}>
          <Link
            to="groups/17"
            style={{ textDecoration: "none", color: "inherit", flex: 1,marginLeft:"16px" }}
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
