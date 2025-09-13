import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { AppProvider } from "./contexts/AppContext";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";

// pages
import HomePage from "./pages/HomePage";

// components
import Header from "./components/Header";
import Cursor from "./components/Cursor";

function App() {
  const [theme /*, setTheme*/] = useState("light");
  const defineTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={defineTheme}>
      <GlobalStyle theme={defineTheme} />
      <AppProvider
        value={{
          mobileBreakPoint: 650,
        }}
      >
        <Header />
        <Cursor />
        <HomePage />
        {/*        <button
          className="mouse-effect"
          style={{
            margin: "400px",
            background: "red",
          }}
          onClick={() =>
            setTheme((prev) => (prev === "dark" ? "light" : "dark"))
          }
        >
          change theme
        </button> */}
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
