import { Button } from "@mui/material";

function OnlineSession() {
  return (
    <div>


<Button
          sx={{
            width: "100%",
            maxWidth: "140px",
            height: "36px",
            color: "#fff",
            fontSize: { xs: "12px", md: "14px" },
            textTransform: "capitalize",
            backgroundColor: "#000",
            borderRadius: "5px",
            mb:"30px"
          }}
        >
          Recorded Meeting
        </Button>
      <p  style={{fontSize:'30px'}} className="text-gradient">Live Session</p>
    </div>
  );
}

export default OnlineSession;
