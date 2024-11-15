import { Box } from "@mui/material";
import logo from "../../assets/logo.png";
import brand from "../../assets/brand.png";
import { DarkModeContext, TokenContext } from "../context/Context";
import { useContext } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import lang_img from "../../home_profile_assets/lang.png";
import { IoMdNotifications } from "react-icons/io";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function Navbar() {
  let { sidebarOpen, setSidebarOpen } = useContext(TokenContext);
  let sidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  let navigate = useNavigate();
  let { darkMode, toggleMode } = useContext(DarkModeContext);

  return (

    <Box                          //nav var cont.
      sx={{
        position: "fixed",
        display: "flex",
        flexDirection: "row",
        justifyContent: "end",
        alignItems: "start",
        backgroundColor:"#fff",
        top: 0,
        width: "100%",
        zIndex: "9999",
      }}
    >
        <Box                      // nav bar body
          sx={{
            backgroundColor: darkMode ? "#000" : "#6B5B3D",
            width: sidebarOpen ? { xs: "100%", md: "calc(100% - 267px)" } : "100%",
            transition: "width 0.3s ease",
            // width : "sideba5Open ? { xs: "100%", md: "calc(100% - 300px)" } : "100%",
            // left: sidebarOpen ? { xs: 0, md: "0px" } : "0",
            height: "80px",
            position: "fixed",
            top: 0,
            borderBottomLeftRadius: "10px",
            zIndex: "9999",
            display: "flex",
            alignItems: "center",
            transition: "background-color 0.3s ease", // إضافة تأثير عند تغيير الخلفية
          }}
        >
          <Box             
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* logo of trading society */}
            <Box
              sx={{
                display: "flex",
                paddingLeft: "20px",
                paddingLeft:sidebarOpen ? "10px" : "20px",
                alignItems: "center",
                cursor: "pointer",
                transition: "transform 0.3s ease", // إضافة تأثير تكبير عند التمرير
                "&:hover": {
                  transform: "scale(1.05)", // تكبير عند التمرير
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

          {/* الـ menu مع الأيقونات */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              position: "absolute",
              // flexDirection: { xs: 'row-reverse', md: 'row' },
              right: "60px",
              gap: { xs: "10px", md: "15px" },
            }}
          >
            {/* الأيقونات */}
            <Box
              sx={{
                display: "flex",
                gap: { xs: "10px", md: "20px" },
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={lang_img}
                sx={{
                  width: { xs: "20px", md: "30px" },
                  transition: "transform 0.3s ease",
                }}
              />
              <div
                style={{ cursor: "pointer", transition: "color 0.3s ease" }}
                onClick={toggleMode}
              >
                {darkMode ? (
                  <MdLightMode
                    style={{
                      color: "#ecbc56",
                      fontSize: "20px",
                      transition: "transform 0.3s ease",
                      "&:hover": { transform: "scale(1.1)" },
                    }}
                  />
                ) : (
                  <MdDarkMode
                    style={{
                      fontSize: "20px",
                      transition: "transform 0.3s ease",
                      "&:hover": { transform: "scale(1.1)" },
                    }}
                  />
                )}
              </div>
              <IoMdNotifications
                style={{
                  color: "#ecbc56",
                  fontSize: "20px",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.1)" },
                }}
              />
            </Box>

            {/* الـ menu */}
            <Box
              onClick={sidebarToggle}
              sx={{
                color: "#fff",
                fontSize: { xs: "25px", md: "30px" },
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                transition: "transform 0.3s ease", // إضافة تأثير تكبير عند التمرير
                "&:hover": {
                  transform: "scale(1.1)", // تكبير عند التمرير
                },
              }}
            >
              <CiMenuBurger />
            </Box>
          </Box>
        </Box>
    </Box>
  );
}

export default Navbar;
