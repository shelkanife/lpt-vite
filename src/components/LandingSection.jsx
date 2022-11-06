import { Box, Stack, Typography, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { sectionStack, sectionImage, sectionDivider } from "./globalStyles";
const LandingSection = ({
  direction = true,
  title,
  description,
  image = "./logo512.png",
}) => {
  const theme = useTheme();

  return (
    <Box textAlign="center" marginY={2} sx={{ marginX: "auto" }}>
      <Stack sx={sectionStack(theme, direction)}>
        <Box component="img" src={image} sx={sectionImage} />
        <Stack spacing={2}>
          <Typography variant="h5" fontWeight={700} textAlign="left">
            {title}
          </Typography>
          <Typography sx={{ lineHeight: 1.5, textAlign: "justify" }}>
            {description}
          </Typography>
        </Stack>
      </Stack>
      <Divider sx={sectionDivider} />
    </Box>
  );
};
export default LandingSection;
