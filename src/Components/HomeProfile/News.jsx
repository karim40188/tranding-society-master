import { Box, Typography } from "@mui/material";
import BannerProfile from "./BannerProfile";
import Widget2 from "../Home/Widget2";

function News() {
  return (
    <Box sx={{height:'auto'}}>
      <BannerProfile />

      <Box >
        <Widget2 />
      </Box>
    </Box>
  );
}

export default News;
