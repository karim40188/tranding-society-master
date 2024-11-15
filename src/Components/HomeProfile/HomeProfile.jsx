import { Box } from "@mui/material";
import Cards from "./Cards";
import Progress from "./Progress";
import BannerProfile from "./BannerProfile";

function HomeProfile() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: '100%',
        // mt: { xs: '100px', md: '100px', lg: '100px' }, // ضبط الهامش العلوي حسب حجم الشاشة
        // padding: { xs: '20px', md: '40px', lg: '60px' }, // إضافة حشوة استجابة
      }}
    >
      <BannerProfile sx={{ marginTop: { xs: '20px', md: '50px', lg: '70px' } }} /> 
      
      <Box sx={{ marginTop:"5%"}}>
        <Cards />
      </Box>

      <Box sx={{ mt: { xs: '20px', md: '30px' } }}>
        <Progress />
      </Box>
    </Box>
  );
}

export default HomeProfile;
