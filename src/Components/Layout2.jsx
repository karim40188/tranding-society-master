import { Box } from "@mui/material";
import Sidebar from "../Components/HomeProfile/Sidebar";
import Navbar from "../Components/HomeProfile/Navbar";
import { Outlet } from "react-router-dom";
import FooterProfile from "./HomeProfile/FooterProfile";
import { useContext } from "react";
import { LoadingContext, TokenContext } from "./context/Context";

function Layout2() {
  let { sidebarOpen } = useContext(TokenContext);
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
        <Box sx={{ display: "flex", flexDirection: "column",  }}>
          <Navbar />

          <Box sx={{ display: "flex", flexGrow: 1 }}>
            <Box sx={{ flexShrink: 0 }}>
              <Sidebar />
            </Box>

            <Box
              sx={{
                // pt: { xs: "20px", md: "10%" },
                width: sidebarOpen ? { xs: "100%", md: "80%" } : { xs: "100%", md: "90%" },
                pt:{xs:'25%',md:'8%'},
                px:'20px',
                mx: "auto",
                transition: "width 0.3s ease",
                position: "relative",
                left: sidebarOpen ? { xs: "0", md: "50%" } : {xs:'50%', md: "46%" },
                
                transform:sidebarOpen ? { xs: "0", md: "translateX(-50%)" } : { xs: "translateX(-50%)", md: "translateX(-50%)" },
                // padding:'10px'
              }}
            >
              <Outlet />
            </Box>
          </Box>
        <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "end",
          // backgroundColor: "#000
        }}
        >
                <Box sx={{ 
                  
                  width: { xs: "0", md: sidebarOpen ? "80.5%" : "100%", xl: sidebarOpen ? "84.5%" : "100%"},

                  mt: "20px", 
        
                  }}>
                  <FooterProfile />
                </Box>
        </Box>
        </Box>
      )}
    </Box>
  );
}

export default Layout2;
