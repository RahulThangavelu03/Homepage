
import React, { useState,useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ThemeContext } from "./ThemeContext";
import App from "../App";

function ThemeWrapper() {
  const [dark, setDark] = useState(false);

useEffect(() => {
  document.body.style.backgroundColor = dark ? "#111" : "#fff";
  document.body.style.transition = "0.3s";
}, [dark]);


  const theme = createTheme({
    palette: {
      mode: dark ? "dark" : "light",
    },
  });

  const toggleTheme = () => setDark(!dark);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeWrapper;
