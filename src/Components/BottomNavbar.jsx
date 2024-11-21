import React, { useState } from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { AiOutlineHome } from "react-icons/ai";
import { GoMortarBoard } from "react-icons/go";
import { IoIosRadio } from "react-icons/io";
import Scanners_img2 from "../home_profile_assets/scannersPic.svg";
import { Link, useNavigate } from "react-router-dom";

const BottomNavbar = () => {
  const scannersItems = [
    { name: "Gang", path: "/scanners/1" },
    { name: "Gang pro", path: "/scanners/1" },
    { name: "Rubber band", path: "/scanners/2" },
    { name: "hunter", path: "/scanners/3" },
  ];


  let navigate = useNavigate()
  const [value, setValue] = React.useState(0);
  let [scannersOpen, setScannerOpen] = useState(false);
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#191919",
        padding: "10px 0",
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#191919",
          color: "#fff",
        }}
      >
 
      <BottomNavigationAction
          // label="Home"
          value={0}
          icon={<AiOutlineHome size={24} />}
          sx={{
            color: value === 0 ? "#66FCF1" : "#fff",
            "&:hover": {
              color: "#ecbc56",
            },
          }}
          onClick={()=>{
          navigate('/home')
          }}
        />
     
       
        <BottomNavigationAction
          // label="Academy"
          value={1}
          icon={<GoMortarBoard size={24} />}
          sx={{
            color: value === 1 ? "#66FCF1" : "#fff",
            "&:hover": {
              color: "#ecbc56",
            },
          }}
          onClick={()=>{
            navigate('/academy')
            }}
        />
        <BottomNavigationAction
          // label="Online Sessions"
          value={2}
          icon={<IoIosRadio size={24} />}
          sx={{
            color: value === 2 ? "#66FCF1" : "#fff",
            "&:hover": {
              color: "#ecbc56",
            },
          }}
          onClick={()=>{
            navigate('/sessions')
            }}
        />
        <BottomNavigationAction
          // label="Scanners"
          value={3}
          icon={
            <img
              src={Scanners_img2}
              alt="Custom Logo"
              style={{ width: "25px", height: "25px" }}
            />
          }
          sx={{
            color: value === 3 ? "#66FCF1" : "#fff",
            "&:hover": {
              color: "#ecbc56",
            },
          }}
          onClick={() => {
            setScannerOpen(!scannersOpen);
          }}
        />
      </BottomNavigation>
      {scannersOpen && (
        <Box
          sx={{
            backgroundColor: "#191919",
            boxShadow:"0 0 30px black",
            width: "250px",
            padding:'15px',
            height: "200px",
            position: "absolute",

            right: "0",
            borderRadius:'15px',
            bottom: "120%",
            display: "flex",
            flexDirection:'column',
            gap:"8px",
            textAlign:"center",
            justifyContent:'space-around'
            
          }}
        >
          {scannersItems.map((scannerLink) => {
            return (
              <Link key={scannerLink.name} to={scannerLink.path} style={{ color: "#fff" }}>{scannerLink.name}</Link>
            )
              
          })}
        </Box>
      )}
    </Box>
  );
};

export default BottomNavbar;
