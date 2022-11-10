import { Container,Typography,Box,Card,CardActions } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
const Quizz = () => {
  return (
    <Container >
      <Typography variant="h4">Verifica tus conocimientos</Typography>

      <Box sx={{ padding: "24px 0"}}>
        <Card sx={{ display: "flex", alignItems: "center", paddingX: "16px",marginBottom:"16px" }}>
          <Link
            to="16"
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
            to="17"
            style={{ textDecoration: "none", color: "inherit", flex: 1 }}
          >
            <Typography>Grupo 17</Typography>
          </Link>
          <CardActions>
            <ArrowForwardIosIcon />
          </CardActions>
        </Card>
        <Card sx={{ display: "flex", alignItems: "center", paddingX: "16px",marginBottom:"16px" }}>
          <Link
            to="random"
            style={{ textDecoration: "none", color: "inherit", flex: 1 }}
          >
            <Typography>Todos</Typography>
          </Link>
          <CardActions>
            <ArrowForwardIosIcon />
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
};

export default Quizz;
