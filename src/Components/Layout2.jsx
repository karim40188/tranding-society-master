import { Box } from "@mui/material";
import Sidebar from "../Components/HomeProfile/Sidebar";
import Navbar from "../Components/HomeProfile/Navbar";
import { Outlet } from "react-router-dom";
import FooterProfile from "./HomeProfile/FooterProfile";
import { useContext } from "react";
import { LoadingContext } from "./context/Context";

function Layout2() {
  let { isLoading } = useContext(LoadingContext);

  return (
    <Box>
      {isLoading ? (
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            position: "fixed",
            top: "0",
            left: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000",
            textAlign: "center",
          }}
        >
          <span className="loader" style={{ fontFamily: "Bayon" }}>
            Trading Society
          </span>
        </Box>
      ) : (
        <Box className="" sx={{ display: "flex", overflowX: "hidden" }}>
          {/* Sidebar */}

          <Sidebar />

          <Box sx={{ width: "100%" }}>
            <Navbar />

            <Box sx={{ p: "30px", minHeight: "100vh" }}>
              <Outlet />
            </Box>
            <FooterProfile />
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Layout2;
