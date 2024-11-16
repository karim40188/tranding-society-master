import { Box, Button, Typography } from "@mui/material";
import imgBg from "../../home_profile_assets/profileb-bg.png";
import profile_img from "../../home_profile_assets/profile_img.png";
import trade_alert_img from "../../home_profile_assets/BuyAndSell..svg";
import Scanners_img2 from "../../home_profile_assets/scannersPic.svg";
import DownArrow from "../../home_profile_assets/DownArrow.svg";
import { useContext, useEffect, useRef, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { GoMortarBoard } from "react-icons/go";
import { IoIosRadio } from "react-icons/io";
import { MdLeaderboard } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { LuNewspaper } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../context/Context";
import axios from "axios";

function Sidebar() {
  let {
    sidebarOpen,
    setSidebarOpen,
    userId,
    setUserId,
    setUserImg,
    userFirstName,
    setUserFirstName,
    lastName,
    setLastName,
    setUserEmail,
    setPhone
  } = useContext(TokenContext);
  let [activeLink, setActiveLink] = useState(false);
  let navigate = useNavigate();

  let sidebarRef = useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getUserWithId() {
    let res = await axios.get("https://tradingsociety.net/api/api/v1/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    setUserImg(res?.data?.user.profile_image);
    setUserFirstName(res?.data?.user?.user_first_name);
    setUserId(res?.data?.user?.user_id);
    setLastName(res?.data?.user?.user_last_name);
    setUserEmail(res?.data?.user?.user_email)
    setPhone(res?.data?.user?.phone)

  }

  useEffect(() => {
    getUserWithId();
  }, [getUserWithId]);

  useEffect(() => {
    let handleClickOutSide = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        window.innerWidth <= 600
      ) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutSide);

    return () => {
      window.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [setSidebarOpen]);

  let [scannersOpen, setScannersOpen] = useState(false);

  let [links] = useState([
    { name: "Home", path: "/home", icon: <AiOutlineHome /> },
    { name: "Academy", path: "/academy", icon: <GoMortarBoard /> },
    { name: "Live Session", path: "/sessions", icon: <IoIosRadio /> },
    { name: "Leader Board", path: "/leaderboard", icon: <MdLeaderboard /> },
    {
      name: "Trade Alerts",
      path: "/tradealerts",
      icon: (
        <img
          src={trade_alert_img}
          alt="Custom Logo"
          style={{ width: "30px", height: "30px" }}
        />
      ),
    },

    {
      name: "Scanners",
      icon: (
        <img
          src={Scanners_img2}
          alt="Custom Logo"
          style={{ width: "30px", height: "30px" }}
        />
      ),
    },
    { name: "Calenders", path: "/calender", icon: <SlCalender /> },
    { name: "News", path: "/news", icon: <LuNewspaper /> },
  ]);

  const scannersItems = [
    { name: "Gang", path: "/scanners/1" },
    { name: "Gang pro", path: "/scanners/1" },
    { name: "Rubber band", path: "/scanners/2" },
    { name: "hunter", path: "/scanners/3" },
  ];

  return (
    <Box
      ref={sidebarRef}
      sx={{
        position: { xs: "fixed", md: "sticky" },
        backgroundColor: "black",
        width: sidebarOpen ? "280px" : "0",
        transform: sidebarOpen ? "translateX(0)" : "translateX(-280px)",
        zIndex: "99999",
        minHeight: "100vh",
        overflow: "hidden",
        transition: "600ms all",
      }}
    >
      {/* Profile section */}
      <Box
        className="flex items-center justify-center"
        sx={{
          width: "100%",
          height: "100px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          mt: "20px",
        }}
      >
        {/* Sidebar Card Profile */}
        <Box
          className="flex items-center justify-center"
          sx={{
            backgroundImage: `url(${imgBg})`,
            borderRadius: "15px",
            opacity: "0.9",
            backgroundPosition: "center",
            backgroundColor: "white",
            width: "90%",
            height: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            boxShadow: "0px 0px 15px rgba(213, 172 , 14, 0.54)",
          }}
        >
          <Box
            className="flex items-center"
            sx={{ justifyContent: "space-around", width: "100%" }}
          >
            {/* Image Profile Of Card */}
            <Box component="img" src={profile_img} />
            <Box>
              {/* User Details */}
              <Typography
                sx={{
                  fontSize: "15px",
                  fontFamily: "Motken noqta ii",
                }}
              >
                {userFirstName} {lastName}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "TanseekModernProArabic-ExBold",
                  fontSize: "25px",
                  fontWeight: "400",
                  letterSpacing: "-4%",
                }}
              >
                ID: {userId}
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
                    transition:
                      "transform 0.3s ease, background-color 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.02)",
                      backgroundColor: "#ecbc56",
                    },
                  }}
                  onClick={() => setScannersOpen(!scannersOpen)}
                >
                  <Box
                    sx={{
                      fontSize: "30px",
                      ml: "20px",
                      color: "text.primary",
                    }}
                  >
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
                      transform: scannersOpen
                        ? "rotate(0deg)"
                        : "rotate(-90deg)",
                    }}
                  >
                    <img
                      src={DownArrow}
                      alt="External Icon"
                      style={{ width: "15px", height: "15px" }}
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
                <Box
                  sx={{ fontSize: "30px", ml: "20px", color: "text.primary" }}
                >
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
       
         
      </Box>
    </Box>
  );
}

export default Sidebar;
