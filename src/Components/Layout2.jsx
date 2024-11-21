import { Box } from "@mui/material";
import Sidebar from "../Components/HomeProfile/Sidebar";
import Navbar from "../Components/HomeProfile/Navbar";
import { Outlet } from "react-router-dom";
import FooterProfile from "./HomeProfile/FooterProfile";
import { useContext } from "react";
import { LoadingContext, TokenContext } from "./context/Context";
import TradingLoader from "./TradingLoader";
import BottomNavbar from "./BottomNavbar";
function Layout2() {
  let { isLoading } = useContext(LoadingContext);
  let { sidebarOpen } = useContext(TokenContext);

  return (
    <Box>
      {isLoading ? (
        <Box>
          <TradingLoader />
        </Box>
      ) : (
        <Box
          className=""
          sx={{
            display: "flex",
            overflowX: "hidden",
            gap: sidebarOpen ? "5px" : "0px",
          }}
        >
          {/* Sidebar */}

          <Sidebar />

          <Box sx={{ width: "100%" }}>
            <Navbar />

            <Box
              sx={{ my: "3%", width: "98%", mx: "auto", minHeight: "100vh" }}
            >
              <Outlet />
            </Box>
            <FooterProfile />
          </Box>

          {!sidebarOpen ? (
            <Box>
              {" "}
              <BottomNavbar />{" "}
            </Box>
          ) : (
            ""
          )}
        </Box>
      )}
    </Box>
  );
}

export default Layout2;
