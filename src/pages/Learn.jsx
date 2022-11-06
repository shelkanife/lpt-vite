import { Container, Box, Typography } from "@mui/material";
import StrategyCard from "../components/StrategyCard";
const Learn = () => {
  return (
    <Container sx={{ overflow: "auto", marginBottom: "70px" }}>
      <Box>
        <h1>Aprende reglas mnemotecnicas</h1>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
            rowGap: "20px",
            columnGap: "20px",
            justifyContent: "center",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <StrategyCard
            uri="/learn/mcg"
            title="Memorama"
            description="Aprende jugando al memorama"
          />
          <StrategyCard
            uri="/learn/mnemonics"
            title="Nemotecmia"
            description="Aprende el grupo X e Y utilizando la nemotecmia"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Learn;
