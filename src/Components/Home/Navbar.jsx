import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"; 
import logo from "../../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [setHovered] = useState(false);


  

  const links = [
    {
      name: "Home",
      path: "/home",
      subLinks: ["Sub Home 1", "Sub Home 2", "Sub Home 3", "Sub Home 4"],
    },
    {
      name: "Academy",
      path: "/academy",
      subLinks: [
        "Sub Academy 1",
        "Sub Academy 2",
        "Sub Academy 3",
        "Sub Academy 4",
  
      ],
    },
    {
      name: "Sessions",
      path: "/sessions",
      subLinks: [
        "Sub Session 1",
        "Sub Session 2",
        "Sub Session 3",
        "Sub Session 4",
      ],
    },
    {
      name: "Trade Alerts",
      path: "/tradealerts",
      subLinks: ["Sub Trade 1", "Sub Trade 2", "Sub Trade 3", "Sub Trade 4"],
    },
    {
      name: "Scanners",
      path: "/scanners",
      subLinks: [
        "Sub Scanner 1",
        "Sub Scanner 2",
        "Sub Scanner 3",
        "Sub Scanner 4",
      ],
    },
    {
      name: "Login",
      path: "/login",
      subLinks: [], 
    },
    {
      name: "Join us",
      path: "/register",
      subLinks: ["Sub Join 1", "Sub Join 2", "Sub Join 3", "Sub Join 4"],
    },
  ];

  const handleToggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
      
      
      if (overlayVisible) {
        setOverlayVisible(false);  
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [overlayVisible]); 

  const handleMouseEnter = (linkName) => {
    setHoveredLink(linkName);
    setOverlayVisible(true);
    setHovered(true);
  };

  
  const handleMouseLeave = () => {
    setHoveredLink(null);
    setOverlayVisible(false);
    setHovered(false); 
  };

  return (
    
    <Box sx={{ 
      marginTop: "30px",
    }}>
      <AppBar
        className="navbar"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: scrolling ? "fixed" : "fixed",
          background: "#000000",
          maxWidth: "100%",
          height: "70px",
          zIndex: "10",
          transition: "300ms all ease",
          mx: "auto",
          mb: scrolling ? "0" : "30px",
          backdropFilter: "blur(15.699999809265137px)",
          backgroundColor: scrolling ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 1)",
          padding: { xs: "0 20px", md: "0 350px" }, 
          top: "0",
        }}
      >
        <motion.div
            className="overlay"
            initial={{ opacity: 0, scaleY: -50 }} 
            animate={{
              opacity: overlayVisible ? 1 : 10,
              scaleY: overlayVisible ? 1 : 0, 
            }} 
            transition={{ duration: 0.4, ease: "easeInOut" }} 
            style={{
              position: "absolute",
              backgroundColor: "black",
              width: "100%",
              left: "0",
              right: "0",
              top: "0", 
              height: "auto",
              paddingTop: "80px",
              paddingBottom: "40px",
              transformOrigin: "top", 
              display: overlayVisible ? "block" : "none",
            }}
            onMouseLeave={handleMouseLeave} 
          >
          {hoveredLink && (
            <Box
              sx={{
                paddingLeft: "20%",
               display: "flex",
               flexDirection: "column",
               alignItems: "start",
               justifyContent: "start",
              }}
            >
              <Box
              sx={{
                fontSize: "25px",
                fontFamily: "TanseekModernProArabic-ExBold",
                letterSpacing: ".071em",
                display: "flex",
                flexDirection: "column", 
                gap: "15px", 
              }}
              >
                  {links
                    .find((link) => link.name === hoveredLink) 
                    .subLinks.map((subLink, index) => (
                      <Link
                      className="sub-link"
                        key={index}
                        to="#"
                        style={{
                          display: "block",
                          padding: "5px 0",
                          color: "#fff",
                          textDecoration: "none",
                          transition: "color 0.3s ease", 
                        }}
                      >
                        {subLink}
                      </Link>
                    ))}
                </Box>
                <Box
                    sx={{
                      height: "10vh",
                      backdropFilter: "blur(15.699999809265137px)",
                      backgroundColor: "000000",
                    }}
                >
                  
                </Box>
            </Box>
          )}
        </motion.div>

        <Toolbar
          sx={{
            transition: "all 1s ease",
            justifyContent: "center",
            height: "100%",
            alignItems: "center",
            gap: "100px",
          }}
        >
          <Box sx={{ 
            display: "flex", 
            alignItems: "center",
             flexGrow: 1,
             justifyContent: "center",
            }}>
            <Box
              component="img"
              src={logo}
              sx={{
                maxWidth: { xs: "50px", md: "65px" }, 
                maxHeight: { xs: "50px", md: "70px" },
                animation: "fadeIn 0.5s ease",
              }}
            />
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: { xs: "20px", md: "20px" }, 
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {links.map((link) => (
              <Box
                key={link.name}
                sx={{
                  position: "relative",
                  "&:hover": {
                    transition: "all 1s ease", 
                   
                    ...(link.name !== "Join us" && {
                      "&:after": {
                        content: '""',
                        position: "absolute",
                        top: "100%",
                        backgroundColor: "#ecbc56",
                        width: "100%",
                        height: "3px",
                      },
                    }),
                  },
                }}
              >
                <Link
                  to={link.path}
                  className="link"
                  onMouseEnter={() => {
                    if (link.name !== "Join us" && link.name !== "Login" && link.name !== "Home"&& link.name !== "Academy"&& link.name !== "Sessions" && link.name !== "Trade Alerts"  && link.name !== "Scanners") { 
                      handleMouseEnter(link.name);
                    }
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#fff",
                      fontFamily: "TanseekModernProArabic-ExBold",
                      letterSpacing: ".071em",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: { xs: "16px", md: "25px" }, 
                      width: "150px",
                    
                      ...(link.name === "Join us" && {
                        background:
                          "linear-gradient(90deg, #D6AA1C 0%, #5D5329 100%)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        width: "115px",
                        height: "35px",
                        pb: "7px",
                        right: "-85px",
                        borderRadius: "5px",
                        fontSize: "30px",
                        fontWeight:"bold",
                        position: "relative",
                        "&:hover": {
                          background:
                            "linear-gradient(180deg, #dfb247 0%, #ecbc56 100%)",
                            
                        },
                      }),
                    }}
                  >
                    {link.name}
                  </Typography>
                </Link>
              </Box>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <IconButton
              onClick={handleToggle}
              color="inherit"
              sx={{
                display: { xs: "flex", md: "none" },
                fontSize: "2.5rem",
              }}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isOpen} onClose={handleToggle} sx={{zIndex:'12'}}>
        <List>
          {links.map((link) => (
            <ListItem
              key={link.name}
              button
              component={Link}
              to={link.path}
              onClick={handleToggle}
            >
              <ListItemText primary={link.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default Navbar;
