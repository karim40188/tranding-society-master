import { Box } from "@mui/material";

function Test() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "430px",
          height: "300px",
          backgroundColor: "#3F3D3D",
          position: "relative",
        }}
      >
        <Box
          sx={{
            borderBottom: "50px solid #3F3D3D",
            borderLeft: "50px solid transparent",
            borderRight: "5px solid transparent",
            height: "0",
            width: "0px",
            position: "absolute",
            top: "-50px",
            left: "0px",
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default Test;
