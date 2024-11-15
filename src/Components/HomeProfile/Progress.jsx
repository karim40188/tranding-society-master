import { Box, Grid2, Typography } from "@mui/material";
import progressImg from "../../home_profile_assets/progress_img.png";
import performanceImg from "../../home_profile_assets/trade_performance.png";
import educatorsImg from "../../home_profile_assets/educators.png";
import { GoMortarBoard } from "react-icons/go";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

function Progress() {
  const [cards] = useState([
    { name: "Ali Mohamed", progress: "65%" },
    { name: "Sara Ali", progress: "70%" },
    { name: "Omar Khaled", progress: "80%" },
    { name: "Nora Ahmed", progress: "90%" },
  ]);

  const [educators] = useState([
    { name: "Mohamed Fawzi" },
    { name: "Fatma Samir" },
    { name: "Ali Mostafa" },
  ]);

  return (
    <Box
    sx={{width:"100%",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
      }}>
          <Box
          sx={{width:"80%"}}
          >
            <Box sx={{ mb: "20px" }} component="img" src={performanceImg} />
            <Grid2 container spacing={2} justifyContent="center">
              {cards.map((card, index) => (
                <Grid2
                  item
                  xs={6}
                  sm={4}
                  md={3}
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "185px",
                      height: "185px",
                      borderRadius: "50%",
                      background: `linear-gradient(180deg, #FE4438 0%,  #E4CB86 65%, #191919 65% 100%), url(${progressImg})`,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: "150px",
                        height: "150px",
                        backgroundColor: "#191919",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Box sx={{ width: "100px", height: "100px", position: "relative" }}>
                        <Box
                          sx={{ width: "100%", height: "100%", backgroundSize: "cover", borderRadius: "50%" }}
                          component="img"
                          src={progressImg}
                        />
                        <Box
                          sx={{
                            position: "absolute",
                            backgroundColor: "#191919",
                            width: "100px",
                            height: "50px",
                            top: "90%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            textAlign: "center",
                            fontSize: "19px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "TanseekModernProArabic-ExBold",
                              fontSize: "19px",
                              color: "#FFFFFF",
                            }}
                          >
                            {card.name}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "TanseekModernProArabic-ExBold",
                              lineHeight: "3px",
                              fontSize: "25px",
                              color: "#FFFFFF",
                            }}
                          >
                            {card.progress}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid2>
              ))}
            </Grid2>
            <Box sx={{ my: "50px" }}>
              <Box sx={{ display: "flex", alignItems: "center", position: "relative", ml: "20px" }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "25px",
                    fontFamily: "TanseekModernProArabic-ExBold",
                  }}
                >
                  Educators
                </Typography>
                <Box
                  sx={{
                    width: "32px",
                    height: "32px",
                    position: "absolute",
                    top: "-20px",
                    left: "-15px",
                    color: "#C3AD577A",
                  }}
                >
                  <GoMortarBoard style={{ width: "100%", height: "100%" }} />
                </Box>
              </Box>
              <Grid2 container spacing={4} justifyContent="center">
                {educators.map((educator, index) => (
                  <Grid2
                    item
                    xs={6}
                    sm={4}
                    md={3}
                    key={index}
                    sx={{
                      width: "214px",
                      height: "269px",
                      borderRadius: "15px",
                      backgroundColor: "#272727",
                      overflow: "hidden",
                    }}
                  >
                    <Box sx={{ width: "151px", height: "175px", margin: "auto" }}>
                      <Box
                        component="img"
                        src={educatorsImg}
                        sx={{
                          width: "100%",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        textAlign: "left",
                        color: "#000",
                        backgroundColor: "#d9d9d9",
                        height: "110px",
                        padding: "10px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "TanseekModernProArabic-ExBold",
                          fontWeight: "700",
                        }}
                      >
                        {educator.name}
                      </Typography>
                      <Box
                        sx={{
                          color: "#ECBC56",
                          display: "flex",
                          alignItems: "center",
                          gap: "3px",
                        }}
                      >
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <Typography
                          component="span"
                          sx={{
                            fontFamily: "TanseekModernProArabic-Bold",
                            fontSize: "13px",
                            color: "#8C8C8C",
                          }}
                        >
                          10k
                        </Typography>
                      </Box>
                    </Box>
                  </Grid2>
                ))}
              </Grid2>
            </Box>
          </Box>

    </Box>
  );
}

export default Progress;
