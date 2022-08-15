import { createTheme, ThemeProvider } from "@mui/material";
import {
  green,
  grey,
  pink,
  red,
  teal,
} from "@mui/material/colors";
import React, { useState,createContext } from "react";

export const ColorModeContext = createContext({
  toggleMode: () => {},
  mode: "light",
});
export const ColorContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleMode: () => 
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
      ,
      mode
    }),
    [mode]
  );
  const customTheme = createTheme({
    palette: {
      mode: mode,
      primary: teal,
      // background:{
      //   main:"#252827",
      // },
      danger: red,
      success: green,
      secondary:pink,
      info:grey

    },
    typography: {
      fontFamily: [
        "Oswald",
        "Teko",
        "Ububtu",
        "Titillium Web ",
        "Bree Serif",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  });

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
