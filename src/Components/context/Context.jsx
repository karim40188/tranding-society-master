import { createContext, useEffect, useState } from "react";

export let LoadingContext = createContext("");
// eslint-disable-next-line react/prop-types
export function LoadingContextProvider({ children }) {
  let [isLoading, setLoading] = useState(true);
  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export let DarkModeContext = createContext("");
// eslint-disable-next-line react/prop-types
export function DarkModeContextProvider({ children }) {
  let [darkMode, setDarkMode] = useState(true);

  let toggleMode = () =>
    setDarkMode((prevMode) => {
      console.log(prevMode);
      return !prevMode;
    });

  let baseUrl = "https://tradingsociety.net/api/api/v1";
  return (
    <DarkModeContext.Provider
      value={{ darkMode, setDarkMode, toggleMode, baseUrl }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}

export let TokenContext = createContext("");

// eslint-disable-next-line react/prop-types
export function TokenContextProvider({ children }) {
  let [token, setToken] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      console.log(token);
    } else {
      // window.location.href = "/login";
      return;
    }
  }, [setToken, token]);

  let [sidebarOpen, setSidebarOpen] = useState(false);

  let [userEmail, setUserEmail] = useState("");
  let [userId, setUserId] = useState("");
  let [userFirstName, setUserFirstName] = useState("");
  let [phone, setPhone] = useState("");
  let [userImg, setUserImg] = useState(null);
  let [lastName, setLastName] = useState("");

  return (
    <TokenContext.Provider
      value={{
        token,
        setToken,
        sidebarOpen,
        setSidebarOpen,
        userFirstName,
        setUserFirstName,
        phone,
        setPhone,
        userEmail,
        setUserEmail,
        userId,
        setUserId,
        userImg,
        setUserImg,
        lastName,
        setLastName
      }}
    >
      {children}
    </TokenContext.Provider>
  );
}
