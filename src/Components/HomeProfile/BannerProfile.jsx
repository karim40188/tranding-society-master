import { Box } from "@mui/material";
import profileBanner from "../../home_profile_assets/IMG_2537.gif";

function BannerProfile() {
  return (
    <Box
      sx={{
        width: "90%",
        mx:"auto"
      }}
    >
      <Box
        component="img"
        src={profileBanner}
        sx={{ width: "100%", borderRadius: "15px", backgroundImage: "cover" }}
      />
    </Box>
  );
}

export default BannerProfile;
