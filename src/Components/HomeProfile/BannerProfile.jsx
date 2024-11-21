import { Box } from "@mui/material";
import profileBanner from "../../home_profile_assets/IMG_2537.gif";

function BannerProfile() {
  return (
    <Box
      sx={{
        width: "100%",
        height: {xs:"200px",md:"400px"},
        mx: "auto",
      }}
    >
      <Box
        component="img"
        src={profileBanner}
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "15px",
          backgroundSize: "cover",
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition:'center'
        }}
      />
    </Box>
  );
}

export default BannerProfile;
