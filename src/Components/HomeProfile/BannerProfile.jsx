import { Box } from '@mui/material'
import profileBanner from "../../home_profile_assets/IMG_2537.gif";

function BannerProfile() {
  return (
    <Box sx={{ 
      width: "100%",
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      juustifyContent:'center',

    }}>
    <Box
      component="img"
      src={profileBanner}
      sx={{ backgroundImage: "cover", width: "92%" , borderRadius:"15px",marginRight:"-30px"}} 
    />
  </Box>
  )
}

export default BannerProfile