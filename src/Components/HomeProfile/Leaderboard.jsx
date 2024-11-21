import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Leaderboard = () => {
  
  const traders = [
    { name: "Trader 1", score: 1500 },
    { name: "Trader 2", score: 1400 },
    { name: "Trader 3", score: 1300 },
    { name: "Trader 4", score: 1200 },
    { name: "Trader 5", score: 1100 },
    { name: "Trader 6", score: 1000 },
    { name: "Trader 7", score: 900 },
  ];

  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Box
      sx={{
        width: "90%",
        margin: "auto",
        padding: "30px",
        backgroundColor: "#191919", 
        borderRadius: "15px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "", 
        textAlign: "",
        gap:'30px'
        
      }}
    >
      <Typography
       className="text-gradient"
       sx={{fontSize:'40px'}}
      
      >
        Trading Leaderboard
      </Typography>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", 
          gap: "20px", 
          width: "100%",
        }}
      >
        {traders.map((trader, index) => (
          <motion.div
            key={trader.name}
            variants={itemVariants}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              backgroundColor: "#2E2E2E", 
              borderRadius: "15px", 
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)", 
              fontFamily: "Clarendon",
              transition: "transform 0.3s ease-in-out", 
              "&:hover": {
                transform: "scale(1.05)", 
              },
            }}
          >
            <Typography sx={{ color: "#F0A500", fontSize: "20px", fontWeight: "bold" }}>
              #{index + 1} {trader.name}
            </Typography>
            <Typography sx={{ color: "#66FCF1", fontSize: "18px", fontWeight: "600" }}>
              {trader.score} pts
            </Typography>
          </motion.div>
        ))}
      </motion.div>
    </Box>
  );
};

export default Leaderboard;
