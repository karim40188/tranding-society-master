import { Box } from "@mui/material";
import Cards from "./Cards";
import Progress from "./Progress";
import BannerProfile from "./BannerProfile";

function HomeProfile() {
  return (
    <Box>
      <BannerProfile />

      <Cards />

      <Box sx={{ my: { xs: "20px", md: "30px" } }}>
        <Progress />
      </Box>
    </Box>
  );
}

export default HomeProfile;
