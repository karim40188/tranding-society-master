import { Box, Container, Typography, Grid, Divider } from "@mui/material";
import logo from "../../assets/logo.png";
import brand from "../../home_profile_assets/brand.png";
import instagramIcon from "../../assets/instagram.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaMap, FaEnvelope } from "react-icons/fa";

function FooterProfile() {
  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        width: "100%",
        py: { xs: 4, md: 1 },
        color: "#fff",
        position: 'relative',
        zIndex: '9999'
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            mb: { xs: 4, md: 0 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Box component="img" src={logo} sx={{ mb: { xs: 2, md: 0 }, height: "50px" }} />
          <Box
            component="img"
            src={brand}
            sx={{
              width: { xs: "120px", md: "153px" },
              ml: { xs: 0, md: 2 },
              mt: { xs: 2, md: 1 },
              height: "50px"
            }}
          />
        </Box>
{/* 
        <Grid container spacing={2} sx={{ mt: "10px" }}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                color: "gray",
                fontSize: { xs: "14px", md: "18px", xl: "25px" },
                fontFamily: "TanseekModernProArabic-ExBold",
                textAlign: { xs: "center", md: "left" },
                mb: { xs: 4, md: 0 },
              }}
            >
              <Typography>Empowering traders with real-time tools,</Typography>
              <Typography>expert education, and a strong community.</Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 2, justifyContent: { xs: "center", md: "flex-start" } }}>
              <Box
                sx={{
                  color: "#fff",
                  width: "25px",
                  height: "25px",
                  backgroundColor: "#0a83ed",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                }}
              >
                <FaFacebookF />
              </Box>
              <Box
                component="img"
                src={instagramIcon}
                sx={{ width: "25px", height: "25px" }}
              />
              <Box
                sx={{
                  color: "text.primary",
                  width: "25px",
                  height: "25px",
                  backgroundColor: "#0a83ed",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                }}
              >
                <FaInstagram />
              </Box>
            </Box>
          </Grid>

          {/* <Grid item xs={12} md={4}>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "20px", xl: "22px" },
                color: "#ECBC56",
              }}
            >
              Quick Links
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontFamily: "TanseekModernProArabic-ExBold",
                fontSize: { xs: "20px", md: "25px", xl: "30px" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography>About Us</Typography>
              <Typography>Support</Typography>
              <Typography>Academy</Typography>
              <Typography>Terms and Conditions</Typography>
              <Typography>Privacy Policy</Typography>
            </Box>
          </Grid> */}

          {/* <Grid item xs={12} md={4}>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "20px", xl: "22px" },
                color: "#ECBC56",
                letterSpacing: "-0.17px",
              }}
            >
              Get in Touch
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: "10px", mb: 2 }}>
              <Box
                sx={{
                  backgroundColor: "#ECBC56",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <IoCall style={{ color: "#000" }} />
              </Box>
              <Typography>971 - 555555555</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px", mb: 2 }}>
              <Box sx={{ width: "25px", height: "25px" }}>
                <FaMap style={{ color: "#ECBC56", width: "100%", height: "100%" }} />
              </Box>
              <Typography>Dubai - UAE</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Box sx={{ width: "25px", height: "25px" }}>
                <FaEnvelope style={{ color: "#ECBC56", width: "100%", height: "100%" }} />
              </Box>
              <Typography>info@tradingsociety.net</Typography>
            </Box>
          </Grid> 
        </Grid> */}
      </Container>

      <Divider sx={{ backgroundColor: "#C3AD57", my: "12px" }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "12px",
          color: "text.secondary",
        }}
      >
        <Typography sx={{ fontSize: "25px", textAlign: "center" }}>
          © 2024 Trading Society. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default FooterProfile;
