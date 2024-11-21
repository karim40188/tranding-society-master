/* eslint-disable react-hooks/exhaustive-deps */

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
import { Link, useNavigate } from "react-router-dom";
import { DarkModeContext, TokenContext } from "../context/Context";
import axios from "axios";

function Sidebar() {
  let iconsSidebarRef = useRef(null);
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
    setPhone,
  } = useContext(TokenContext);
  let [activeLink, setActiveLink] = useState(false);
  let {baseUrl}=useContext(DarkModeContext)

  let navigate = useNavigate();

  let sidebarRef = useRef(null);

  async function getUserWithId() {
    let res = await axios.get(`${baseUrl}/user`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    setUserImg(res?.data?.user.profile_image);
    setUserFirstName(res?.data?.user?.user_first_name);
    setUserId(res?.data?.user?.user_id);
    setLastName(res?.data?.user?.user_last_name);
    setUserEmail(res?.data?.user?.user_email);
    setPhone(res?.data?.user?.phone);
  }

  useEffect(() => {
    getUserWithId();
  }, [getUserWithId]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    let handleClickOutSide = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        window.innerWidth <= 700
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
    { name: "Dashboard", path: "/home", icon: <AiOutlineHome /> },
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
          style={{ width: "20px", height: "20px" }}
        />
      ),
    },

    {
      name: "Scanners",
      icon: (
        <img
          src={Scanners_img2}
          alt="Custom Logo"
          style={{ width: "25px", height: "25px" }}
        />
      ),
    },
    { name: "Calenders", path: "/calender", icon: <SlCalender /> },
    { name: "News", path: "/news", icon: <LuNewspaper /> },
  ]);

  const scannersItems = [
    { name: "Chart", path: "/scanners/1" },
    { name: "Gang", path: "/scanners/1" },
    { name: "Gang pro", path: "/scanners/1" },
    { name: "Rubber band", path: "/scanners/2" },
    { name: "hunter", path: "/scanners/3" },
  ];

  return (
    <>
      <Box
        ref={sidebarRef}
        sx={{
          position: { xs: "fixed", md: "sticky" },
          backgroundColor: "black",
          width: sidebarOpen ? "260px" : "0",
          transform: sidebarOpen ? "translateX(0)" : "translateX(-280px)",
          zIndex: "99999",
          minHeight: "100vh",
          overflow: "hidden",
          transition: "all 0.5s ease-in-out",
          borderRadius: "15px",
          top:'0',
          bottom:'0',
          left:'0'
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
            gap: "15px",

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

                      "&:hover": {
                        transform: "scale(1.02)",
                        backgroundColor: "#ecbc56",
                      },
                    }}
                    onClick={() => setScannersOpen(!scannersOpen)}
                  >
                    <Box
                      sx={{
                        // ml: "20px",
                        color: "#fff",
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
                        fontSize: "14px",
                        // ml: "20px",
                        color: "text.primary",
                        marginLeft: "0px",
                        marginTop: "-1px",

                        transform: scannersOpen
                          ? "rotate(0deg)"
                          : "rotate(-90deg)",
                      }}
                    >
                      <img
                        src={DownArrow}
                        alt="External Icon"
                        style={{ width: "10px", height: "10px" }}
                      />
                    </Box>
                  </Box>

                  {/* Dropdown items */}
                  {scannersOpen &&
                    scannersItems.map((item) => (
                      <Box
                        key={item.name}
                        sx={{
                          pl: "10px",
                          py: "2px",
                          cursor: "pointer",

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
                            fontFamily: "TanseekModernProArabic-ExBold",
                            fontWeight: "400",
                            fontSize: "25px",
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
                // all links without scanners
                <Link
                  to={link.path}
                  key={link.name}
                  style={{
                    listStyleType: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    padding: "8px",
                    cursor: "pointer",

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
                  <Box sx={{ fontSize: "22px", color: "text.primary" }}>
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
                </Link>
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

      {/* when sidebar closed */}

      {!sidebarOpen && (
        <Box
          ref={iconsSidebarRef}
          sx={{
            position: "fixed",
            top: "50%",
            transform: "translateY(-50%)",
            left: "0",

            display: {xs:"none",md:"flex"},
            width: sidebarOpen ? "0" : "auto",
            flexDirection: "column",
            gap: "15px",
            p: "15px",
            backgroundColor: "#333",
            borderRadius: "0 10px 10px 0",
            zIndex: "99999999",
            transition: "all 0.5s ease-in-out",
          }}
        >
          {links.map((link) => (
            <Box
              key={link.name}
              to={link.path}
              style={{
                position: "relative",
              }}
              onClick={() => {
                if (link.name === "Scanners") {
                  setScannersOpen((prev) => !prev);
                } else {
                  navigate(link.path);
                }
              }}
            >
              <Box
                sx={{
                  fontSize: "24px",
                  color: "#fff",
                  cursor: "pointer",
                  position: "relative",
                  "&:hover": {
                    transform: "scale(1.05)",
                    color: "#ecbc56",
                  },
                }}
              >
                {link.icon}
              </Box>

              {/* قائمة Scanners تظهر عند النقر على الأيقونة */}
              {link.name === "Scanners" && scannersOpen && !sidebarOpen && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "0",
                    left: "100%",
                    backgroundColor: "#444",
                    padding: "10px",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                    zIndex: "999999",
                    width: "200px",
                    transform: "translateX(10px)",
                  }}
                >
                  {scannersItems.map((item) => (
                    <Box
                      key={item.name}
                      sx={{
                        fontSize: "22px",
                        color: "#fff",
                        letterSpacing: "3px",
                        cursor: "pointer",
                        fontFamily: "TanseekModernProArabic-ExBold",
                        "&:hover": {
                          transform: "scale(1.05)",
                          color: "#ecbc56",
                        },
                      }}
                      onClick={() => {
                        navigate(`${item.path}`);
                        window.scrollTo(0, 0);
                      }}
                    >
                      {item.name}
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          ))}
        </Box>
      )}
    </>
  );
}

export default Sidebar;
