import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import { UserProvider } from "./context/user";
import { ThemeProvider } from "./context/theme";
ReactDOM.render(
  <ThemeProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
