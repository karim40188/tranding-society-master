import { Box, Typography } from "@mui/material";
import progress_bar from "../home_profile_assets/progress_img.png";

const instructors = [
  { name: "Instructor A", rating: 75 },
  { name: "Instructor B", rating: 19 },
  { name: "Instructor C", rating: 30 },
  { name: "Instructor D", rating: 89},
];

const CircularProgressBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 4,
        padding: 4,
      }}
    >
      {instructors.map((instructor, index) => (
        <Box key={index} sx={{ textAlign: "center" }}>
          <Box sx={{ position: "relative", display: "inline-block" }}>
            <Box
              sx={{
                position: "relative",
                width: 200,
                height: 200,
                borderRadius: "50%",
        
                background: `conic-gradient(
                  #FE4438 ${instructor.rating * 3.6}deg, 
                  #202938 ${instructor.rating * 3.6}deg 360deg
                )`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "80%",
                  height: "80%",
                  borderRadius: "50%",
                  backgroundColor: "#222",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Box
                  component="img"
                  src={progress_bar}
                  sx={{ width: 100, height: 100 }}
                />
              </Box>
            </Box>
          </Box>

          <Box>
            <Typography
              sx={{ marginTop: 1, color: "#fff", fontWeight: "bold" }}
            >
              {instructor.name}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#fff",
                mt: 1,
              }}
            >
              {instructor.rating}%
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CircularProgressBar;
