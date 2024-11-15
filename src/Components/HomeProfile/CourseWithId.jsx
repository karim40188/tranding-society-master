import { Box, Grid2 } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../context/Context";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import { FaPlay } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { FaStar } from "react-icons/fa";

function CourseWithId() {
  let [course, setCourse] = useState([]);
  let [ setErr] = useState(false);
  let { baseUrl } = useContext(DarkModeContext);
  let params = useParams();
  let navigate = useNavigate(); // to navigate to full screen page

  // let { token } = useContext(TokenContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getCourse(id) {
    let res = await axios
      .get(`${baseUrl}/courses/${id}`, {
        headers: {
          Authorization: `Bearer 29|Ty80fgEhfB5ll2b5og6dTY5WJWqIxwPCZRD2jVNOa50891a8`,
        },
      })
      .catch((error) => {
        console.log(error);
        setErr(error?.response?.data?.message);
      });

    setCourse(res?.data?.course);
  }

  useEffect(() => {
    getCourse(params.id);
  }, [getCourse, params.id]);

  // Function to handle video click
  const handleVideoClick = (videoUrl) => {
    navigate(`/video/${encodeURIComponent(videoUrl)}`); // navigate to full screen page
  };


  return (
    <Box sx={{ padding: 4, mx:'auto' }}>
      {/* تفاصيل الدورة */}
      <Card sx={{ display: "flex", marginBottom: 4, backgroundColor: "transparent" }}>
        <CardMedia
          component="img"
          sx={{ width: 650,borderRadius: '10px' }}
          image={course?.course_photo}
          alt={course?.course_title}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent>
            <Typography variant="h4">{course?.course_title}</Typography>
            <Typography variant="h6" color="text.secondary" sx={{ marginY: 2,fontStyle:'' }}>
              Category: {course?.category_name}
            </Typography>
            <Typography variant="body1" 
            sx={{ 
              marginY: 2,
         

             }}>
              
              You will learn in this course <br/>
               1- Everything about metatrader 5.<br/>
               2- How to copy and excute signals. <br/>
               3- Risk mangement.<br/>
               4- How to copy signals from chart.
              {/* {course?.course_description} */}
              {/* {course?.course_description} */}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Total minutes: {course?.course_total_hours} minutes
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Instructor: {course?.course_instructor_name}
            </Typography>
          </CardContent>
        </Box>
      </Card>

      {/* قائمة الفيديوهات */}
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        Course Videos
      </Typography>
      <Grid2 container spacing={2}>
        {course?.course_vedios?.map((video) => (
          <Grid2 item xs={12} sm={6} md={4} key={video?.id}>
            <Card
              sx={{ cursor: "pointer", backgroundColor: "transparent" }}
              onClick={() => handleVideoClick(video?.video_url)}
            >
              <Box sx={{ position: "relative", fontFamily: "Bayon" }}>
                <CardMedia
                  component="img"
                  image={video?.vedio_image}
                  alt={video?.course_name}
                  sx={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    // borderRadius: "8px",
                  }}
                />
                {/* Play button overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "62px",
                    height: "54px",
                    backgroundColor: "#FFFBFB82",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FaPlay
                    style={{
                      width: "28px",
                      height: "29px",
                      color: "#ECBC56",
                    }}
                  />
                </Box>
              </Box>
              <CardContent sx={{ backgroundColor: "transparent", padding: "16px" }}>
                <Typography variant="h6" sx={{ color: "#fff" }}>
                  {video?.course_name}
                </Typography>
                <Typography variant="body2" sx={{ color: "gray", fontFamily: "sans-serif" }}>
                  {video?.vedio_description}
                </Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center", mt: "8px" }}
                >
                  <IoMdTime style={{ color: "#ECBC56" ,width: "25px",height: "25px"}} />
                  <Typography
                    variant="body2"
                    sx={{ color: "gray", ml: "5px",fontFamily: "sans-serif" }}
                  >
                    Duration: {video?.vedio_time} minutes
                  </Typography>
                </Box>
                {/* <Typography variant="body2" sx={{ color: "gray", mt: "8px",fontFamily: "sans-serif" }}>
                  Uploaded:{" "}
                  {new Date(video?.vedio_uploaded_at).toLocaleDateString()}
                </Typography> */}
                <Box
                  sx={{ display: "flex", alignItems: "center", mt: "8px" }}
                >
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      style={{ width: "16px", color: "#ECBC56" }}
                    />
                  ))}
                  {/* <Typography variant="body2" sx={{ color: "gray", ml: "8px" ,fontFamily: "sans-serif"}}>
                    10k views
                  </Typography> */}
                </Box>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

export default CourseWithId;
