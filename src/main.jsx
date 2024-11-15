import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
import {
  DarkModeContextProvider,
  LoadingContextProvider,
  TokenContextProvider,
} from "./Components/context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <TokenContextProvider>
    <DarkModeContextProvider>
      <LoadingContextProvider>
        <App />
      </LoadingContextProvider>
    </DarkModeContextProvider>
  </TokenContextProvider>
);
