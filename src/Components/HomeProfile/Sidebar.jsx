import { Box, Button, Typography } from "@mui/material";
import imgBg from "../../home_profile_assets/profileb-bg.png";
import profile_img from "../../home_profile_assets/profile_img.png";
import trade_alert_img from "../../home_profile_assets/BuyAndSell..svg";
import Scanners_img2 from "../../home_profile_assets/scannersPic.svg";
import DownArrow from "../../home_profile_assets/DownArrow.svg";
import { useContext, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { GoMortarBoard } from "react-icons/go";
import { IoIosRadio } from "react-icons/io";
import { MdLeaderboard } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { LuNewspaper } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../context/Context";

function Sidebar() {
  let { sidebarOpen } = useContext(TokenContext);
  let [activeLink, setActiveLink] = useState(false);
  let navigate = useNavigate();

  // State to manage dropdown for Scanners
  let [scannersOpen, setScannersOpen] = useState(false);

  let [links] = useState([
    { name: "Home", path: "/home", icon: <AiOutlineHome /> },
    { name: "Academy", path: "/academy", icon: <GoMortarBoard /> },
    { name: "Live Session", path: "/sessions", icon: <IoIosRadio /> },
    { name: "Leader Board", path: "/leaderboard", icon: <MdLeaderboard /> },
    { name: "Trade Alerts", path: "/tradealerts", icon: <img src={trade_alert_img} alt="Custom Logo" style={{ width: "30px", height: "30px" }} /> },
    // No path for Scanners yet as it's a dropdown
    { name: "Scanners", icon: <img src={Scanners_img2} alt="Custom Logo" style={{ width: "30px", height: "30px" }} /> },
    { name: "Calenders", path: "/calender", icon: <SlCalender /> },
    { name: "News", path: "/news", icon: <LuNewspaper /> },
    { name: "Gang", path: "/gang-scanner", icon: <LuNewspaper /> },
  ]);

  // Dummy dropdown items for Scanners
  const scannersItems = [
    { name: "Gang", path: "/scanners/1" },
    { name: "Gang pro", path: "/scanners/1" },
    { name: "Rubber band", path: "/scanners/2" },
    { name: "hunter", path: "/scanners/3" },
  ];

  return (
    <>
      <Box
        sx={{
          width: "265px",
          left: { xs: "-250px", md: "15px" },
          position: "fixed",
          display: { xs: sidebarOpen ? "block" : "none", md: "block" },
          top: "0",
          flexDirection: "column",
          alignItems: "left",
          bottom: "0",
          top: "0%",
          height: "100vh",
          zIndex: "999999",
          overflowX: "hidden",
          overflowY: "scroll",
          transition: "transform 0.3s ease-in-out",
          transform: sidebarOpen ? "translateX(-5.5%)" : "translateX(-110%)",
          backgroundColor: "black",
        }}
      >
        {/* Profile section */}
        <Box
          sx={{
            width: "100%",
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            mr: "0px",
            mt: "20px",
            pb: "0px",
          }}
        >
          <Box
            sx={{
              backgroundImage: `url(${imgBg})`,
              borderRadius: "15px",
              opacity: "0.9",
              backgroundPosition: "center",
              backgroundColor: "white",
              width: "90%",
              height: "90%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              mr: "0px",
              mt: "0px",
              transform: "translateX(0px)",
              boxShadow: "0px 0px 15px rgba(213, 172 , 14, 0.54)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box component="img" src={profile_img} />
              <Box sx={{ ml: "10px" }}>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                    fontFamily: "Motken noqta ii",
                    letterSpacing: "-4%",
                    color: "text.primary",
                  }}
                >
                  Abdelrahman..
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "TanseekModernProArabic-ExBold",
                    fontSize: "25px",
                    fontWeight: "400",
                    letterSpacing: "-4%",
                  }}
                >
                  ID: 123456
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Sidebar links */}
        <Box
          component="ul"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            justifyContent: "center",
            gap: "7px",
            zIndex: "99999",
            color: "#fff",
          }}
        >
          {links.map((link) => {
            if (link.name === "Scanners") {
              return (
                <Box key={link.name}>
                  <Box
                    component="li"
                    sx={{
                      listStyleType: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "9px",
                      p: "8px",
                      cursor: "pointer",
                      transition: "transform 0.3s ease, background-color 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                        backgroundColor: "#ecbc56",
                      },
                    }}
                    onClick={() => setScannersOpen(!scannersOpen)}
                  >

                    <Box sx={{ fontSize: "30px", ml: "20px", color: "text.primary" }}>
                      {link.icon}
                    </Box>

                    <Typography
                      sx={{
                        fontFamily: "Motken noqta ii",
                        fontSize: "12px",
                        letterSpacing: "-4%",
                        color: "#fff",
                      }}
                    >
                      {link.name}
                    </Typography>
                    
                    <Box
                          sx={{
                            fontSize: "30px",
                            ml: "20px",
                            color: "text.primary",
                            marginLeft: "0px",
                            marginTop: "-1px",
                            transition: "transform 0.3s ease",
                            transform: scannersOpen ? "rotate(0deg)" : "rotate(-90deg)", // Apply rotation
                          }}
                        >
                          <img 
                            src={DownArrow}  
                            alt="External Icon" 
                            style={{ width: "15px", height: "15px" }}  // Adjust dimensions as needed
                          />
                        </Box>
                  </Box>

                  {/* Dropdown items */}
                  {scannersOpen &&
                    scannersItems.map((item) => (
                      <Box
                        key={item.name}
                        sx={{
                          pl: "75px",
                          py: "5px",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "scale(1.02)",
                            color: "#ecbc56",
                          },
                        }}
                        onClick={() => {
                          navigate(item.path);
                          window.scrollTo(0, 0);
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "tanseekModernProArabic-light",
                            fontWeight: "400",
                            fontSize: "15px",
                            color: "#fff",
                          }}
                        >
                          {item.name}
                        </Typography>
                      </Box>
                    ))}
                </Box>
              );
            } else {
              return (
                <Box
                  key={link.name}
                  component="li"
                  sx={{
                    listStyleType: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    p: "8px",
                    cursor: "pointer",
                    transition: "transform 0.3s ease, background-color 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      backgroundColor: "#ecbc56",
                    },
                  }}
                  onClick={(e) => {
                    if (activeLink) {
                      activeLink.classList.remove("active");
                    }

                    const currentLink = e.currentTarget;
                    currentLink.classList.add("active");
                    setActiveLink(currentLink);
                    navigate(link.path);
                    window.scrollTo(0, 0);
                  }}
                >
                  <Box sx={{ fontSize: "30px", ml: "20px", color: "text.primary" }}>
                    {link.icon}
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "Motken noqta ii",
                      fontSize: "12px",
                      letterSpacing: "-4%",
                      color: "#fff",
                    }}
                  >
                    {link.name}
                  </Typography>
                </Box>
              );
            }
          })}

          <Button
            onClick={() => navigate("/profile")}
            sx={{
              color: "#c1954a",
              width: "120px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              mt: "15px",
              ml: "1px",
              backgroundColor: "#201b14",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Motken noqta ii",
                fontSize: "18px",
                letterSpacing: "-4%",
              }}
            >
              Logout
            </Typography>
          </Button>
{/* 
          <Box sx={{ mt: "40px", textAlign: "center" }}>
            <Box component="img" src={sideBar_img} />
          </Box> */}
        </Box>
      </Box>
    </>
  );
}

export default Sidebar;
 