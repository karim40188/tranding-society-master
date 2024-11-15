import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import OurCourses from "./OurCourses";
import axios from "axios";
import person1 from "../../home_profile_assets/person4.png";
import { IoMdTime } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import decorationImg from "../../home_profile_assets/decoration.png";
import { useNavigate } from "react-router-dom";
import { HiOutlineXMark } from "react-icons/hi2";
import { motion } from "framer-motion";
import BannerProfile from "./BannerProfile";
import { js } from '@eslint/js';

function AcademyProfile() {
  let [instructors, setInstructors] = useState([]);
  let [popup, setPopup] = useState(false);
  let [instructorWithId, setInstructorWithId] = useState({});

  async function getAllInstructors() {
    let res = await axios.get(`https://tradingsociety.net/api/v1/instructor`, {
      headers: {
        Authorization: `Bearer 29|Ty80fgEhfB5ll2b5og6dTY5WJWqIxwPCZRD2jVNOa50891a8`,
      },
    });
    setInstructors(res?.data?.instructors?.data);
  }

  async function getInstructorCourses(id) {
    let res = await axios.get(
      `https://tradingsociety.net/api/v1/instructor_courses/${id}`,
      {
        headers: {
          Authorization: `Bearer 29|Ty80fgEhfB5ll2b5og6dTY5WJWqIxwPCZRD2jVNOa50891a8`,
        },
      }
    );
    setInstructorWithId(res?.data?.instructor_with_courses);
  }

  useEffect(() => {
    getAllInstructors();
  }, []);

  let navigate = useNavigate();

  const handleInstructorClick = () => {
    setPopup(true);
  };

  const handleVideoClick = (videoUrl) => {
    navigate(`/video/${encodeURIComponent(videoUrl)}`);
  };

  return (
    <>
      <BannerProfile />
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          flexDirection: "column",
          px: { xs: 2, md: 4 },
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "24px", md: "33px" },
              my: "30px",
              color: "#fff",
              transform: "translateX(15px)",
              position: "relative",
              "&::after": {
                content: "''",
                position: "absolute",
                backgroundColor: "#ecbc56",
                left: "0",
                top: "100%",
                width: "100%",
                height: "3px",
              },
            }}
          >
            Our{" "}
            <Typography component="span" sx={{ color: "#ECBC56" }}>
              Educators
            </Typography>
          </Typography>
        </Box>

        <Box
          sx={{
            ml: { xs: "20px", md: "60px" },
            position: "relative",
            zIndex: "999",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            {instructors.map((educator, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  padding: "20px",
                  border: "2px solid #ecbc56", // لون البرواز
                  borderRadius: "10px", // زوايا ناعمة
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)", // ظل ناعم
                  transition: "transform 0.3s ease, box-shadow 0.3s ease", // تأثير التحريك
                  backgroundColor: "#282828", // خلفية العنصر
                  "&:hover": {
                    transform: "scale(1.05)", // تكبير طفيف عند التمرير
                    boxShadow: "0 6px 30px rgba(0, 0, 0, 0.6)", // زيادة الظل عند التمرير
                  },
                }}
                onClick={() => {
                  getInstructorCourses(educator.id);
                  handleInstructorClick();
                }} // عند الضغط على المدرب
              >
                <Box
                  sx={{
                    width: "130px",
                    height: "150px",
                    // borderRadius: "50%",
                    // overflow: ", // للتأكد من بقاء الصورة داخل الدائرة
                    // boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)", // ظل حول الصورة
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "0%",
                    }}
                    component="img"
                    src={educator.Instructor_image}
                    alt={educator.Instructor_name}
                  />
                </Box>
                <Typography
                  sx={{
                    color: "#fff", // تغيير لون النص
                    fontWeight: "bold", // جعل الاسم بارزًا
                    fontSize: "30px",
                  }}
                >
                  {educator.Instructor_name}
                </Typography>
              </Box>
            ))}
          </Box>

          {popup ? (
            <motion.div
              initial={{ opacity: 0, y: -100 }} // يبدأ مخفيًا ويأتي من أعلى
              whileInView={{ opacity: 1, y: 0 }} // عند الظهور
              exit={{ opacity: 0, y: 100 }} // عند الإغلاق يختفي للأسفل
              transition={{ duration: 0.5 }} // مدة الحركة
            >
              <Box
                sx={{
                  width: { xs: "90%", sm: "600px", md: "770px" }, // يستجيب لحجم الشاشة
                  height: "auto",
                  backgroundColor: "#3F3D3D",
                  position: "relative",
                  mt: "50px",
                  p: { xs: "20px", sm: "30px" }, // تقليل الحواف على الشاشات الأصغر
                  mx: "auto", // يتمركز في المنتصف
                }}
              >
                <Box
                  sx={{
                    borderBottom: "50px solid #3F3D3D",
                    borderLeft: "50px solid transparent",
                    borderRight: "5px solid transparent",
                    position: "absolute",
                    top: "-50px",
                    left: "0px",
                  }}
                ></Box>

                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: { xs: "column", md: "row" }, // عمود في الهواتف ومسطّر في الشاشات الأكبر
                      width: "100%",
                    }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column",jstifyContent: "center"}}>
                      <Box sx={{ display: "flex", alignItems: "center",jstifyContent: "center" }}>
                        <Box
                          sx={{
                            width: "80px",
                            height: "120px",
                            borderRadius: "50%",
                            mr: "10px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "top",
                            
                            
                          }}
                        >
                          <Box
                            sx={{
                              width: "80px",
                              height: "100px",
                              borderRadius: "50%",
                        
                            }}
                            component="img"
                            src={instructorWithId.Instructor_image}
                            alt={instructorWithId.Instructor_name}
                          />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            mt: "25px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: { xs: "18px", md: "22px" }, // تكبير الحجم على الشاشات الأكبر
                              fontWeight: "bold",
                            }}
                          >
                            {instructorWithId.Instructor_name}
                          </Typography>
                          <Box sx={{ color: "#ECBC56" }}>
                            {Array(5)
                              .fill(0)
                              .map((_, i) => (
                                <FaStar key={i} />
                              ))}
                          </Box>
                        </Box>
                      </Box>

                      <Typography
                        sx={{
                          width: { xs: "100%", md: "310px" },
                          height: "auto",
                          fontSize: { xs: "16px", md: "18px" },
                          lineHeight: "22.21px",
                          color: "gray",
                          // mt: "15px",
                        }}
                      >
                        {instructorWithId.description}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        position: "absolute",
                        top: "10px",
                        right: "0px",
                        fontSize: "30px",
                        color: "#fff",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setPopup(false);
                      }}
                    >
                      <HiOutlineXMark />
                    </Box>

                    <Box sx={{ mt: { xs: "20px", md: "0" } }}>
                      <Typography sx={{ lineHeight: "3px" }}>
                        Meet Our Educator <br />
                        <Typography component="span" sx={{ color: "#ECBC56" }}>
                          {instructorWithId.Instructor_name}
                        </Typography>
                      </Typography>

                      <Box
                        sx={{
                          width: { xs: "100%", md: "300px" }, // عرض كامل في الشاشات الصغيرة
                          height: "202px",
                          mt: { xs: "10px", md: "0" }, // مسافة من الأعلى في الشاشات الصغيرة
                        }}
                      >
                        <Box
                          component="img"
                          src={instructorWithId.Instructor_image}
                          alt={instructorWithId.Instructor_name}
                          sx={{
                            width: "100%",
                            height: "100%",
                            backgroundSize: "cover",
                            objectFit: "cover",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>

                  {instructorWithId.courses &&
                    instructorWithId.courses.length > 0 && (
                      <Typography
                        sx={{
                          color: "#ecbc56",
                          position: "relative",
                          "&::after": {
                            content: "''",
                            position: "absolute",
                            backgroundColor: "#ecbc56",
                            left: "80px",
                            top: "20px",
                            width: "120px",
                            height: "10px",
                          },
                        }}
                      >
                        {instructorWithId?.courses[0].category_name}
                      </Typography>
                    )}

                  {/* عرض الفيديوهات بناءً على المستوى */}
                  {instructorWithId.courses &&
                    instructorWithId.courses.length > 0 && (
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "20px",
                          mt: "20px",
                          justifyContent: { xs: "center", md: "flex-start" },
                        }}
                      >
                        {instructorWithId?.courses[0]?.course_vedios.map(
                          (video, index) => (
                            <Box
                              key={index}
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                flexBasis: {
                                  xs: "100%",
                                  sm: "48%",
                                  md: "calc(33.33% - 20px)",
                                }, // عرض متجاوب
                                marginBottom: "20px", // مسافة بين الصفوف
                              }}
                              onClick={() => handleVideoClick(video?.video_url)}
                            >
                              <Box
                                sx={{
                                  width: "100%",
                                  height: "189px",
                                  position: "relative",
                                }}
                              >
                         <Box
                                component="img"
                                src={course.course_photo} // Update to use course.course_photo
                                alt={course.course_title} // Update to use course.course_title
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  backgroundSize: "cover",
                                  borderRadius: "8px",
                                  objectFit: "cover",
                                }}
                              />
                                <Box
                                  sx={{
                                    width: "62px",
                                    height: "54px",
                                    backgroundColor: "#FFFBFB82",
                                    top: "30%",
                                    left: "50%",
                                    position: "absolute",
                                    transform: "translateX(-50%)",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: "50%",
                                    color: "#ecbc56",
                                  }}
                                >
                                  <FaPlay />
                                </Box>
                              </Box>
                              <Box sx={{ mt: "10px" }}>
                                <Typography
                                  sx={{
                                    fontSize: { xs: "18px", md: "22px" },
                                    fontWeight: "bold",
                                  }}
                                >
                                  {video.course_name}
                                </Typography>
                                <Typography
                                  sx={{
                                    color: "gray",
                                    fontSize: { xs: "14px", md: "16px" },
                                  }}
                                >
                                  {instructorWithId.Instructor_name}
                                </Typography>
                                <Box
                                  sx={{
                              
                                    display: "flex",
                                    alignItems: "center",
                                    mt: "5px",
                                  }}
                                >
                                  {Array(5)
                                    .fill(0)
                                    .map((_, i) => (
                                      <FaStar
                                        key={i}
                                        style={{
                                          width: "15px",
                                          height: "15px",
                                          color: "#ECBC56",
                                        }}
                                      />
                                    ))}
                                  <Typography
                                    sx={{
                                      color: "gray",
                                      fontSize: { xs: "10px", sm: "20px" },
                                    }}
                                  >
                                    10{" "}
                                    <Typography
                                      component="span"
                                      sx={{ ml: "1px",fontFamily:'Bayon' , fontSize:"12px"}}
                                    >
                                      k
                                    </Typography>
                                  </Typography>
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    mt: "5px",
                                  }}
                                >
                                  <IoMdTime
                                    style={{
                                      color: "#ECBC56",
                                      fontSize: "18px",
                                    }}
                                  />
                                  <Typography
                                    sx={{ fontSize: "14px", ml: "5px" }}
                                  >
                                    Duration:{" "}
                                    <Typography
                                      component="span"
                                      sx={{ fontWeight: "bold" }}
                                    >
                                      {video.vedio_time}
                                    </Typography>
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          )
                        )}
                      </Box>
                    )}
                </Box>
              </Box>
            </motion.div>
          ) : (
            ""
          )}
          <OurCourses />
        </Box>
      </Box>
    </>
  );
}

export default AcademyProfile;
