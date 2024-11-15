import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
// import { Link, Element } from "react-scroll";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import HomeProfile from "./Components/HomeProfile/HomeProfile";
import AcademyProfile from "./Components/HomeProfile/AcademyProfile";
import Layout2 from "./Components/Layout2";
import TradeAlertProfile from "./Components/HomeProfile/TradeAlertProfile";
import { useContext, useEffect } from "react";
import {
  DarkModeContext,
  LoadingContext,

} from "./Components/context/Context";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Calender from "./Components/HomeProfile/Calender";
import Register from "./Components/Register";
import Login from "./Components/Login";
import News from "./Components/HomeProfile/News";
import Test from "./Components/Test";
import CourseWithId from "./Components/HomeProfile/CourseWithId";
import InstructorWithId from "./Components/HomeProfile/InstructorWithId";
import TradeAlertWithId from "./Components/HomeProfile/TradeAlertWithId";
import OnlineSessions from "./Components/HomeProfile/OnlineSessions";
import Categories from "./Components/HomeProfile/Categories";
import FullScreenVideo from "./Components/HomeProfile/FullScreenVideo";
import Leaderboard from "./Components/HomeProfile/Leaderboard";
import Gang from "./Components/HomeProfile/Gang";
import GangPro from "./Components/HomeProfile/GangPro";
import RubberBrand from "./Components/HomeProfile/RubberBrand";
import Hunter from "./Components/HomeProfile/Hunter";

function App() {
  let { setLoading } = useContext(LoadingContext);
  let { darkMode } = useContext(DarkModeContext);
  // let { token, setToken } = useContext(TokenContext);

  const theme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiInputBase-root": {
              color: "#000",
            },
          },
        },
      },
    },

    typography: {
      body1: {
        fontSize: "27px",
        fontFamily: "TanseekModernProArabic-ExBold",
        fontWeight: "400",
      },
      body2: {
        fontSize: "25px",
        fontFamily: "Bayon",
        fontWeight: "400",
      },
      h3: {
        fontSize: "45px",
        fontFamily: "TanseekModernProArabic-ExBold",
        fontWeight: "700",
      },
    },
    palette: {
      background: {
        default: darkMode ? "#0c0c0c" : "#f1e1c7",
      },
      text: {
        primary: darkMode ? "#ffffff" : "#000000",
        secondary: darkMode ? "#cccccc" : "#555555",
      },
    },
  });

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     setToken(localStorage.getItem("token"));
  //     console.log(token);
  //   } else {
  //     window.location.href = "/login";
  //   }
  // }, [setToken, token]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setLoading]);

  const router = createBrowserRouter([
    { index: true, element: <Layout /> },
    {
      path: "/",
      element: <Layout2 />,
      children: [
        { path: "/home", element: <HomeProfile /> },
        { path: "/academy", element: <AcademyProfile /> },
        { path: "/tradealerts", element: <TradeAlertProfile /> },
        { path: "/calender", element: <Calender /> },
        { path: "/news", element: <News /> },
        { path: "/courses/:id", element: <CourseWithId /> },
        { path: "/instructor/:id", element: <InstructorWithId /> },
        { path: "/offers/:id", element: <TradeAlertWithId /> },
        { path: "/sessions", element: <OnlineSessions /> },
        { path: "/categories", element: <Categories /> },
        { path: "/video/:videoUrl", element: <FullScreenVideo /> },
        { path: "/leaderboard", element: <Leaderboard /> },
        { path: "/leaderboard", element: <Leaderboard /> },
        { path: "/scanners/1", element: <Gang /> },
        { path: "/scanners/1", element: <GangPro /> },
        { path: "/scanners/2", element: <RubberBrand /> },
        { path: "/scanners/3", element: <Hunter /> },
      ],
    },
    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },
    { path: "/test", element: <Test /> },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
