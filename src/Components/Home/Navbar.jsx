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
import logo from "../../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const links = [
    { name: "Home", id: "#home" },
    { name: "Academy", id: "/academy" },
    { name: "Sessions", id: "#sessions" },
    { name: "Trade Alerts", id: "#tradealerts-section" },
    { name: "Scanners", id: "#scanners" },
    { name: "Login", id: "/login" },
    { name: "Join us", id: "/register" },
  ];

  const handleToggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box sx={{ marginTop: "30px" }}>
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
          backdropFilter: "blur(15.7px)",
          backgroundColor: scrolling ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 1)",
          padding: { xs: "0 20px", md: "0 350px" },
          top: "0",
        }}
      >
        <Toolbar
          sx={{
            transition: "all 1s ease",
            justifyContent: "center",
            height: "100%",
            alignItems: "center",
            gap: "100px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1, justifyContent: "center" }}>
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
                  to={link.id}
                  className="link"
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
                        background: "linear-gradient(90deg, #D6AA1C 0%, #5D5329 100%)",
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
                        fontWeight: "bold",
                        position: "relative",
                        "&:hover": {
                          background: "linear-gradient(180deg, #dfb247 0%, #ecbc56 100%)",
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

      <Drawer
        anchor="left"
        open={isOpen}
        onClose={handleToggle}
        sx={{ zIndex: "50" }}
        PaperProps={{
          sx: {
            width: "250px",
          },
        }}
      >
        <List>
          {links.map((link) => (
            <ListItem key={link.name} to={link.id} button component={Link} onClick={handleToggle}>
              <ListItemText primary={link.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default Navbar;
