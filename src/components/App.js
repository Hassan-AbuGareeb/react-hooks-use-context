import React, { useContext, useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { ThemeContext } from "../context/theme";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={theme}>
      <Header />
      <Profile />
    </main>
  );
}

export default App;
