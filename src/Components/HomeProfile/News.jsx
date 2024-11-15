import { Box, Typography } from "@mui/material";
import BannerProfile from "./BannerProfile";
import { useState } from "react";
import newsImg from "../../home_profile_assets/news_img.png";

function News() {
  let [news] = useState([
    {
      img: newsImg,
      title: "Future of AI",
      description: "The standard Lorem Ipsum passage, used since the 1500s",
    },
    {
      img: newsImg,
      title: "Future of AI",
      description: "The standard Lorem Ipsum passage, used since the 1500s",
    },
    {
      img: newsImg,
      title: "Future of AI",
      description: "The standard Lorem Ipsum passage, used since the 1500s",
    },
    {
      img: newsImg,
      title: "Future of AI",
      description: "The standard Lorem Ipsum passage, used since the 1500s",
    },
    {
      img: newsImg,
      title: "Future of AI",
      description: "The standard Lorem Ipsum passage, used since the 1500s",
    },
    {
      img: newsImg,
      title: "Future of AI",
      description: "The standard Lorem Ipsum passage, used since the 1500s",
    },
  ]);

  return (
    <Box sx={{ minHeight: "100vh", color: "#000" }}>
      <BannerProfile />

      <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
          <Box
            sx={{
              width: "90%",
              display: "grid",
              gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(4, 1fr)" },
              gap: "10px",
              mt: { xs: "20px", md: "50px", xl: "220px" },
              padding: { xs: "0 10px", md: "0 20px" }, // Padding للهوامش على الشاشات الصغيرة
            }}
          >
            {news.map((item, index) => (
              <Box
                key={index}
                sx={{
                  borderRadius: "15px",
                  backgroundColor: "#D9D9D9",
                  overflow: "hidden", // لتحسين العرض داخل الصندوق
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s", // تأثير التحول
                  "&:hover": { transform: "scale(1.05)" }, // تأثير عند التحويم
                }}
              >
                <Box component="img" src={item.img} sx={{ width: "100%", height: "auto" }} />
                <Box
                  sx={{
                    p: "10px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      letterSpacing: "-0.17px",
                      lineHeight: "18px",
                      fontWeight: "600",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{ fontSize: "14px", fontFamily: "SF Pro Display" }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
      </Box>
    </Box>
  );
}

export default News;
