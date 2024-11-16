import { Box } from "@mui/material";
import logo from "../../assets/logo.png";
import brand from "../../assets/brand.png";
import { TokenContext } from "../context/Context";
import { useContext } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

function Navbar() {
  let { sidebarOpen, setSidebarOpen } = useContext(TokenContext);
  let sidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  let navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "sticky",
        top:'0',
        left:'0',
        right:'0',
        backgroundColor: "#000",
        height: "80px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          
        }}
      >
        <Box
          sx={{
            display: "flex",
            paddingLeft: "20px",
            alignItems: "center",
            cursor: "pointer",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          <Box
            component="img"
            src={logo}
            sx={{
              height: { xs: "40px", md: "60px" },
              width: { xs: "auto", md: "60px" },
              mb: "10px",
            }}
          />
          <Box
            component="img"
            src={brand}
            sx={{
              height: { xs: "40px", md: "40px" },
              ml: { xs: 1, md: 2 },
              width: "auto",
              mt: "0px",
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "absolute",

          right: "60px",
          gap: { xs: "10px", md: "15px" },
        }}
      >
     
        <Box
          onClick={sidebarToggle}
          sx={{
            color: "#fff",
            fontSize: { xs: "25px", md: "30px" },
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <CiMenuBurger />
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
