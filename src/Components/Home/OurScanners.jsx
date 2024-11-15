import { Box, Grid2, Typography } from "@mui/material";
// import { useEffect, useState } from "react";
import stats from "../../assets/scanners1.png";
import substract from "../../assets/Subtract.png";
import vector1 from "../../assets/Ornament1.png";
import vector2 from "../../assets/Ornament2.png";
import vector3 from "../../assets/Ornament3.png";
import laptop from "../../assets/laptop.png";
import ScrollToTopButton from "../ScrollToTopButton";
import { motion } from "framer-motion";
import TelegramButton from "../WathsAppButton";

function OurScanners() {
  // const [visibleVectors, setVisibleVectors] = useState([false, false, false]);
  // const totalVectors = 3; // عدد العناصر

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setVisibleVectors((prev) => {
  //       const nextVisible = [...prev];
  //       const nextIndex = nextVisible.indexOf(false);
  //       if (nextIndex === -1) {
  //         // إذا كانت جميع العناصر مرئية، أعد تعيينها
  //         return [false, false, false];
  //       } else {
  //         nextVisible[nextIndex] = true;
  //         return nextVisible;
  //       }
  //     });
  //   }, 500); // وقت الظهور لكل عنصر (بالملي ثانية)

  //   return () => clearInterval(interval); // تنظيف عند انتهاء المكون
  // }, []);

  return (
    <>
      <Grid2 container justifyContent='space-between' sx={{}}>
        <Grid2
          size={{ xs: 12, md: 6 }}
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
      

          }}
        >
          <Box>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "36px", md: "45px" },
                textTransform: "uppercase",
                lineHeight: "44px",
                letterSpacing: "2%",
                mb: "16px",
                textAlign: { xs: "center", md: "left" },
                color: "text.primary",
                fontWeight:'700',
              }}
            >
              Our <br /> Scanners
            </Typography>
            <motion.div
              initial={{ opacity: 0 , }}
              whileInView={{ opacity: 1  }}
              transition={{ duration: 2, repeat:Infinity  ,delay:1}}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: "20px", md: "30px" },
                  left: { xs: "50%", md: "160px" },
                  transform: {
                    xs: "translate(-90px,22px)",
                    lg: "translate(-90px,22px)",
                  },
                  width: { xs: "150px", md: "auto" },
                }}
                component="img"
                src={vector3}
              />
            </motion.div>

            <Typography
              sx={{
                fontSize: { xs: "18px", md: "27px",xl:'40px' },
                fontFamily: "TanseekModernProArabic-ExBold",
                fontWeight: "400",
                color: "#686868",
                textAlign: { xs: "center", md: "left" },
                mb: "16px",
                width: { xs: "100%", md: "492px" },
              }}
            >
              Unlock cutting-edge scanners and integrated trading tools that
              empower you to spot top trading opportunities as they happen...
            </Typography>
            <motion.div
              initial={{ opacity: 0 , }}
              whileInView={{ opacity: 1  }}
              transition={{ duration: 2, repeat:Infinity ,delay:0.5}}
            >
            <Box
              sx={{
                position: "absolute",
                top: { xs: "20px", md: "-150px" },
                left: { xs: "50%", md: "100px" },
                transform: {
                  xs: "translate(30%,-70%)",
                  md: "translateX(22px)",
                },
              }}
              component="img"
              src={vector1}
            />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 , }}
              whileInView={{ opacity: 1  }}
              transition={{ duration: 2, repeat:Infinity ,delay:0.2}}
            >
            <Box
              sx={{
                position: "absolute",
                top: { xs: "0px", md: "-100px" },
                left: { xs: "50%", md: "-70px" },
                transform: { xs: "translate(-200px,-80px)", md: "none" },
              }}
              component="img"
              src={vector2}
            />
          </motion.div>
          </Box>
        </Grid2>

        <Grid2
          size={{ xs: 12, md: 6 }}
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: "translateY(-70px)",
        
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "576px",xl:'700px' },
              height: { xs: "auto", md: "414px",xl:'800px' },
            }}
          >
            <div
              style={{
                width: "100%",
                height: "500px",
                // backgroundImage: `url(${substract})`,
                backgroundAttachment: "fixed",
                backgroundPosition: "left",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                display: "flex",
                justifyContent: "end",
                alignItems: "end",
                flexDirection: "column",
                
              }}
            >
              <img src={stats} alt="My Logo" 
              style={{ 
                width: '1200px', 
                height: 'auto' 

              }} />
              {/* <div
              style={{
                backgroundImage: `url(${stats})`,
                width: "800px",
                height: "800px",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
                backgroundSize: "contain",
                
              }}
              ></div> */}
            </div>
          </Box>
        </Grid2>
      </Grid2>

  
      <ScrollToTopButton />
      <TelegramButton />
    </>
  );
}

export default OurScanners;
