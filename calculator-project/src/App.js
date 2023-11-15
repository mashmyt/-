import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./styledComponents/GlobalStyles";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { basic } from "./styledComponents/Theme.styled";
import Header from "./components/header/Header";
import Calculator from "./components/calculator/Calculator";
export default function App() {
  const [selectedTheme, setSelectedTheme] = useState(basic);
  const HandleThemeChange = (theme) => {
    setSelectedTheme(theme);
    toggleActiveTheme(theme);
    localStorage.setItem("current-theme", JSON.stringify(theme));
  };
  function toggleActiveTheme(theme) {
    const themeBtns = document.querySelectorAll(".theme-btn");
    themeBtns.forEach((themeBtn) => {
      if (themeBtn.classList.contains(theme.name)) {
        themeBtn.classList.add("active");
      } else {
        themeBtn.classList.remove("active");
      }
    });
  }
  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem("current-theme"));

    if (currentTheme) {
      setSelectedTheme(currentTheme);
      toggleActiveTheme(currentTheme);
    }
  }, []);
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Header HandleThemeChange={HandleThemeChange} />
        <Routes>
          <Route path="/calculator" exact element={<Calculator />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
