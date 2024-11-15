import {
  Box,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoMdTime } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion"; // استيراد Framer Motion

function OurCourses() {
  let [categories, setCategories] = useState([]);
  let [currentCategory, setCurrentCategory] = useState(null);
  let [activeCategory, setActiveCategory] = useState(null);
  let navigate = useNavigate();

  async function getCourses() {
    let res = await axios.get(`https://tradingsociety.net/api/v1/courses`, {
      headers: {
        Authorization: `Bearer 29|Ty80fgEhfB5ll2b5og6dTY5WJWqIxwPCZRD2jVNOa50891a8`,
      },
    });
    setCategories(res?.data?.courses?.data);
  }

  function splitDescription(description) {
    return description.split("\r\n").filter((line) => line.trim() !== "");
  }

  useEffect(() => {
    getCourses();
  }, []);

  function getCoursesData() {
    if (currentCategory) {
      let category = categories.find(
        (c) => c.category_name === currentCategory
      );
      if (category) {
        return category.courses;
      }
    }
    return [];
  }

  return (
    <Box>
      <Box>
        <Typography
          sx={{
            fontSize: { xs: "24px", sm: "33px" },
            my: "3px",
            color: "#fff",
            transform: "translateX(-40px)",
            position: "relative",
            zIndex: "99",
            "&::after": {
              content: "''",
              backgroundColor: "#ecbc56",
              position: "absolute",
              top: "100%",
              left: "0",
              width: "120px",
              height: "3px",
            },
          }}
        >
          Our{" "}
          <Typography component="span" sx={{ color: "#ECBC56" }}>
            Courses
          </Typography>
        </Typography>

        <Box
          sx={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {categories.map((categoryData, index) => (
            <Box key={index}>
              <Button
                sx={{ textTransform: "capitalize", color: "#fff" }}
                onClick={(e) => {
                  if (activeCategory) {
                    activeCategory.classList.remove("active_category");
                  }

                  e.currentTarget.classList.add("active_category");
                  setActiveCategory(e.currentTarget);
                  setCurrentCategory(categoryData.category_name);
                }}
              >
                {categoryData.category_name}
              </Button>
            </Box>
          ))}
        </Box>

        {/* عرض الكورسات بناءً على الفئة المحددة */}
        <Grid container spacing={2} sx={{ marginTop: 3 }}>
          {getCoursesData().map((course, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }} // يبدأ من الشفافية 0 ويكون أصغر
                animate={{ opacity: 1, scale: 1 }} // يظهر بشكل كامل
                exit={{ opacity: 0, scale: 0.9 }} // عند الاختفاء يصبح أصغر
                transition={{ duration: 0.3 }} // مدة الحركة
              >
                <Card
                  sx={{
                    height: "auto",
                    cursor: "pointer",
                    backgroundColor: "transparent",
                  }}
                  onClick={() => {
                    navigate(`/courses/${course.id}`);
                    window.scrollTo(0, 0);
                  }}
                >
                  <CardMedia
                    component="img"
                    image={course.course_photo}
                    alt={course.course_title}
                  />
                  <CardContent sx={{ color: "#fff", width: "100%" }}>
                    <Typography
                      gutterBottom
                      component="div"
                      sx={{
                        fontSize: { xs: "20px", sm: "30px" },
                        fontFamily: "TanseekModernProArabic-Bold",
                        lineHeight: "15px",
                      }}
                    >
                      {course.course_title}
                    </Typography>
                    {splitDescription(course.course_description).map(
                      (line, i) => (
                        <Typography
                          key={i}
                          variant="body1"
                          sx={{ fontSize: { xs: "16px", sm: "25px" } }}
                        >
                          {line}
                        </Typography>
                      )
                    )}

                    <Typography
                      variant="subtitle1"
                      sx={{ fontSize: { xs: "12px", sm: "15px" } }}
                    >
                      Instructor: {course.course_instructor_name}
                    </Typography>
                    <Box sx={{display:'flex', alignItems:'center',gap:'10px'}}>
                      <Box
                        sx={{
                          color: "#ECBC56",
                          display: "flex",
                          alignItems: "center",
                          mt:'7px'
                        }}
                      >
                        <FaStar style={{ width: "10px", height: "10px" }} />
                        <FaStar style={{ width: "10px", height: "10px" }} />
                        <FaStar style={{ width: "10px", height: "10px" }} />
                        <FaStar style={{ width: "10px", height: "10px" }} />
                        <FaStar style={{ width: "10px", height: "10px" }} />
                      </Box>
{/* 
                      <Typography
                        sx={{
                          color: "gray",
                          fontSize: { xs: "10px", sm: "20px" },
                        }}
                      >
                        10{" "}
                        <Typography
                          component="span"
                          sx={{ ml: "1px", fontFamily:'Bayon',fontSize:' 12px'}}
                        >
                          k
                        </Typography>
                      </Typography> */}
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <IoMdTime style={{ color: "#ECBC56" }} />
                      <Typography
                        sx={{ fontSize: { xs: "14px", sm: "20px" }, ml: "5px" }}
                      >
                        Duration:{" "}
                        <Typography variant="span">
                          {course.course_total_hours}
                        </Typography>
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default OurCourses;
