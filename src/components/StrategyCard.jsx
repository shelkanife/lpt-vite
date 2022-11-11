import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";

const StrategyCard = ({ uri, title, description }) => {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 345, height: 300, marginTop: "20px" }}>
      <Link to={uri} style={{ textDecoration: "none", color: "inherit" }}>
        <CardMedia
          component="img"
          height="192"
          image="./logo512.png"
          alt="logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};
export default StrategyCard;
