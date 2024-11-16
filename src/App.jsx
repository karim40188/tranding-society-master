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
import { DarkModeContext, LoadingContext } from "./Components/context/Context";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Calender from "./Components/HomeProfile/Calender";
import Login from "./Components/Login";
import News from "./Components/HomeProfile/News";
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
import ProtectedRouter from "./Components/ProtectedRouter";

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setLoading]);

  const router = createBrowserRouter([
    { index: true, element:<Layout /> },
    {
      path: "/",
      element: (
        <ProtectedRouter>
          <Layout2 />
        </ProtectedRouter>
      ),
      children: [
        {
          path: "/home",
          element: (
            <ProtectedRouter>
              {" "}
              <HomeProfile />
            </ProtectedRouter>
          ),
        },
        {
          path: "/academy",
          element: (
            <ProtectedRouter>
              <AcademyProfile />
            </ProtectedRouter>
          ),
        },
        {
          path: "/tradealerts",
          element: (
            <ProtectedRouter>
              <TradeAlertProfile />{" "}
            </ProtectedRouter>
          ),
        },
        {
          path: "/calender",
          element: (
            <ProtectedRouter>
              <Calender />
            </ProtectedRouter>
          ),
        },
        {
          path: "/news",
          element: (
            <ProtectedRouter>
              <News />
            </ProtectedRouter>
          ),
        },
        {
          path: "/courses/:id",
          element: (
            <ProtectedRouter>
              <CourseWithId />{" "}
            </ProtectedRouter>
          ),
        },
        {
          path: "/instructor/:id",
          element: (
            <ProtectedRouter>
              <InstructorWithId />{" "}
            </ProtectedRouter>
          ),
        },
        {
          path: "/offers/:id",
          element: (
            <ProtectedRouter>
              <TradeAlertWithId />
            </ProtectedRouter>
          ),
        },
        {
          path: "/sessions",
          element: (
            <ProtectedRouter>
              <OnlineSessions />{" "}
            </ProtectedRouter>
          ),
        },
        {
          path: "/categories",
          element: (
            <ProtectedRouter>
              <Categories />{" "}
            </ProtectedRouter>
          ),
        },
        {
          path: "/video/:videoUrl",
          element: (
            <ProtectedRouter>
              <FullScreenVideo />{" "}
            </ProtectedRouter>
          ),
        },
        {
          path: "/leaderboard",
          element: (
            <ProtectedRouter>
              <Leaderboard />{" "}
            </ProtectedRouter>
          ),
        },
        {
          path: "/scanners/1",
          element: (
            <ProtectedRouter>
              <Gang />{" "}
            </ProtectedRouter>
          ),
        },
        {
          path: "/scanners/1",
          element: (
            <ProtectedRouter>
              <GangPro />
            </ProtectedRouter>
          ),
        },
        {
          path: "/scanners/2",
          element: (
            <ProtectedRouter>
              <RubberBrand />
            </ProtectedRouter>
          ),
        },
        {
          path: "/scanners/3",
          element: (
            <ProtectedRouter>
              <Hunter />{" "}
            </ProtectedRouter>
          ),
        },
      ],
    },
    { path: "/login", element: <Login /> },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
