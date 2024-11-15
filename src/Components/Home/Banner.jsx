import { Box } from "@mui/material";
import banner from "../../assets/19.jpg";
import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../context/Context";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import { motion } from "framer-motion";

function Banner() {
  let { isLoading } = useContext(LoadingContext);
  let [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    let handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box sx={{ marginTop:"80px" }}>
      {isLoading ? (
        <Box>loading...</Box>
      ) : (
        <Box sx={{ position: "relative", overflow: "hidden" }}>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 2000 }}
            modules={[Autoplay]}
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <SwiperSlide
                sx={{
                  position: "relative",
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
                key={index}
              >
                <motion.div
                  style={{
                    backgroundImage: `url(${banner})`,
                    backgroundSize: "cover",
                    backgroundPosition:'center',
                    width: "100%",
                    height: "85vh",
                    margin: "auto",
                    borderRadius: "15px",
                    overflow: "hidden",
                  }}
                  animate={{ y: offsetY * 0.4 }}
                  transition={{ duration: 0 }}
                ></motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      )}
    </Box>
  );
}

export default Banner;
