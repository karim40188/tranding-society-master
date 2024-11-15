import { useState } from "react";



import dayjs from "dayjs";
import {
  Box,
  Button,
  Typography,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [events, setEvents] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventTitle, setEventTitle] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const numberOfColumns = 7;
  const daysInMonth = currentMonth.daysInMonth();
  const daysArray = Array.from({ length: daysInMonth }, (_, index) =>
    dayjs(currentMonth).date(index + 1)
  );


  const nextMonth = () => {
    setCurrentMonth(currentMonth.add(1, "month"));
  };

  const previousMonth = () => {
    setCurrentMonth(currentMonth.subtract(1, "month"));
  };

  const handleDateClick = (day) => {
    setSelectedDate(day);
    setOpenDialog(true);
  };

  const handleAddEvent = () => {
    if (eventTitle.trim()) {
      setEvents({ ...events, [selectedDate.format("YYYY-MM-DD")]: eventTitle });
    }
    setOpenDialog(false);
    setEventTitle("");
  };

  return (
    <Box
      sx={{
        padding: { xs: "5px", md: "20px" }, // تحسين الحشوة على الشاشات الصغيرة
        color: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // تغيير الاتجاه على الشاشات الصغيرة
          alignItems: "center",
          gap: "5px",
          fontSize: "14px",
          fontFamily: "SF Pro Display",
          
          mb: 2,
        }}
      >
        <Button
          sx={{
            width: "100%",
            maxWidth: "106px", // تحديد أقصى عرض
            height: "36px",
            background: "linear-gradient(90deg, #C3AD57 0%, #5D5329 100%)",
            color: "#fff",
            textTransform: "capitalize",
            borderRadius: "5px",
            fontSize: { xs: "12px", md: "14px" },
          }}
        >
          Calendar
        </Button>
        <Button
          sx={{
            width: "100%",
            maxWidth: "106px", // تحديد أقصى عرض
            height: "36px",
            color: "#fff",
            fontSize: { xs: "12px", md: "14px" },
            textTransform: "capitalize",
            backgroundColor: "#000",
            borderRadius: "5px",
          }}
        >
          Live Meeting
        </Button>
        <Button
          sx={{
            width: "100%",
            maxWidth: "140px", // تحديد أقصى عرض
            height: "36px",
            color: "#fff",
            fontSize: { xs: "12px", md: "14px" },
            textTransform: "capitalize",
            backgroundColor: "#000",
            borderRadius: "5px",
          }}
        >
          Recorded Meeting
        </Button>
      </Box>

      <Box
        sx={{
          textAlign: "center",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
            gap: { xs: "10px", md: "30px" }, // تصغير الفجوات على الشاشات الأصغر
          }}
        >
          <IoMdArrowDropleft
            onClick={previousMonth}
            style={{
              color: "#856A30",
              width: "33px",
              height: "47px",
              fontSize: "30px",
            }}
          />
          <Box>
            <Typography
              variant="h5"
              sx={{
                margin: "0 10px",
                color: "#C3AD57",
                width: { xs: "150px", md: "250px" }, // تحسين العرض على الشاشات الصغيرة
                maxHeight:'80px',
                fontFamily: "Motken noqta ii",
                fontSize: { xs: "18px", md: "25px" }, // حجم النص استجابة
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: "100%",
                  width: "100%",
                  height: "10px",
                  left: "0",
                  background: 'linear-gradient(90deg, #191919 57.89%, #856A30 100%)',
                },
              }}
            >
              {currentMonth.format("MMMM")}{" "}
              <Typography
                component="span"
                sx={{ color: "#fff", fontFamily: "Motken noqta ii" }}
              >
                {currentMonth.format("YYYY")}
              </Typography>
            </Typography>
          </Box>

          <IoMdArrowDropright
            onClick={nextMonth}
            style={{ color: "#856A30", width: "33px", height: "47px" }}
          />
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            justifyContent: "center",
            mt: "20px", // تصغير التباعد العلوي للشاشات الأصغر
            border: "0px solid #856A30",
            borderCollapse: "collapse",
          }}
        >
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <Typography
              sx={{
                color: "#C3AD57",
                fontFamily: "Motken noqta ii",
                borderBottom: "0px solid #856A30",
                textAlign: "center",
                fontSize: { xs: "12px", md: "14px" }, // حجم النص استجابة
              }}
              key={day}
            >
              {day}
            </Typography>
          ))}

          {/* Empty spaces at the start */}
          {Array.from({ length: currentMonth.startOf("month").day() }).map(
            (_, index) => (
              <Box key={index} sx={{ borderBottom: "1px solid #856A30" }}></Box>
            )
          )}
          {/* {Array.from({ length: currentMonth.startOf("month").day() }).map(
            (_, index) => (
              <Box key={index} sx={{ borderBottom: "1px solid #856A30" }}></Box>
            )
          )} */}

          {/* Display days */}
          {daysArray.map((day) => (
            <Box
              key={day}
              // key={day.format("DD")}
              sx={{
                borderTop: daysArray.indexOf(day)<numberOfColumns?"0px" : "1px solid #856A30",
                borderBottom: daysArray.indexOf(day)<numberOfColumns?"0px" : "1px solid #856A30",
                // borderRight: dayjs().weekday(0)<numberOfColumns?"0px" : "1px solid #856A30",

                // borderRight: "1px solid #856A30",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                position: "relative",
                width: "100%",
                height: { xs: "60px", md: "100px" }, // ضبط الارتفاع للشاشات الصغيرة
                transition: "background-color 0.3s",
                backgroundColor: events[day.format("YYYY-MM-DD")]
                  ? "#ffcccc"
                  : "inherit",
                "&:hover": { backgroundColor: "#C3AD57", color: "#000" },
              }}
              onClick={() => handleDateClick(day)}
            >
              <Typography
                variant="body1"
                sx={{ fontFamily: "Clarendon", fontSize: { xs: "16px", md: "30px" } }} // حجم النص استجابة
              >
                {day.date()}
              </Typography>
              {events[day.format("YYYY-MM-DD")] && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    backgroundColor: "red",
                    color: "#fff",
                    borderRadius: "50%",
                    width: "15px",
                    height: "15px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  !
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Box>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Add Event</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Event Title"
            fullWidth
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleAddEvent}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Calendar;
