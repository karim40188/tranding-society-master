import Navbar from "../Components/Home/Navbar";
import OurMobileApp from "../Components/Home/OurMobileApp";
import { Box } from "@mui/material";
import Banner from "../Components/Home/Banner";
import MissionAndVison from "../Components/Home/MissionAndVison";
import TradeAlert from "../Components/Home/TradeAlert";
import Academy from "../Components/Home/Academy";
import OurScanners from "../Components/Home/OurScanners";
import Footer from "../Components/Home/Footer";
import { useContext } from "react";
import { LoadingContext } from "../Components/context/Context";
import CeoMF from "../Components/Home/CeoMF";
import CeoMH from "../Components/CeoMH";
import AboutUsText from "../Components/Home/AboutUsText";

function Layout() {
  let { isLoading } = useContext(LoadingContext);
  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            // overflow: "hidden",
            position: "fixed",
            top: "0",
            left: "0",
            bottom: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000",
            overflow: "hidden",
            textAlign:"center"
          }}
        >
      <span className="loader" style={{fontFamily:"Bayon"}}>Trading Society</span>
        </Box>
      ) : (
        <Box>
          <Box>
            <Navbar />
          </Box>
          <Box sx={{ width: "91%", mx: "auto", mb: "200px" }}>
            <Banner />
            <AboutUsText />
          </Box>
          <Box sx={{ mt: "0px" }}>
            <MissionAndVison />
          </Box>
          <Box sx={{ mt: "150px" }}>
            <TradeAlert />
          </Box>
          <Box sx={{ mt: "150px", width: "91%", margin: "auto" }}>
            <OurMobileApp />
          </Box>
          <Box>
            <Box sx={{ mt: { xs: "0", lg: "50px" } }}>
              <CeoMF />
            </Box>
            <Box sx={{ mt: { xs: "0", lg: "50px" } }}>
              <CeoMH />
            </Box>
          </Box>
          <Box
            sx={{
              width: "91%",
              margin: "auto",
              mt: { xs: "30px", lg: "200px" },
            }}
          >
            <Academy />

            <Box sx={{ width: "91%", mt: "300px", mx: "auto" }}>
              <OurScanners />
            </Box>
          </Box>

          <Box sx={{ mt: "50px" }}>
            <Footer />
          </Box>
        </Box>
      )}
    </>
  );
}

export default Layout;
