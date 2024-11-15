import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Leaderboard = () => {
  // بيانات ثابتة للمتداولين
  const traders = [
    { name: "Trader 1", score: 1500 },
    { name: "Trader 2", score: 1400 },
    { name: "Trader 3", score: 1300 },
    { name: "Trader 4", score: 1200 },
    { name: "Trader 5", score: 1100 },
    { name: "Trader 5", score: 1100 },
    { name: "Trader 5", score: 1100 },
  ];

  // إعدادات الأنيميشن
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // تأخير بين دخول كل عنصر
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <Box
      sx={{
        width: "80%",
        margin: "auto",
        padding: "20px",
        backgroundColor: "#0B0C10",
        borderRadius: "15px",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
        color: "#fff",
        display: "flex",
        flexWrap: "wrap", // تسمح للعناصر بالتفاف
        justifyContent: "center", // توزيع العناصر بالتساوي
        
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#66FCF1",
          fontFamily: "SF Pro Display",
          width: "100%", // تأكد أن العنوان يأخذ عرض كامل
        }}
      >
        Trading Leaderboard
      </Typography>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent:'center',
          gap: "15px", // المسافة بين المربعات
          width: "100%", // تأكد أن العنصر يأخذ عرض كامل

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
              backgroundColor: "#1F2833",
              borderRadius: "10px",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
              fontFamily: "Clarendon",
              width: "150px", // تحديد عرض المربعات
              height: "100px", // تحديد ارتفاع المربعات
            }}
          >
            <Typography sx={{ color: "#66FCF1", fontSize: "18px" }}>
              #{index + 1} {trader.name}
            </Typography>
            <Typography sx={{ color: "#45A29E", fontSize: "18px" }}>
              {trader.score} pts
            </Typography>
          </motion.div>
        ))}
      </motion.div>
    </Box>
  );
};

export default Leaderboard;
