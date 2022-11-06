import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export const useToggleColorMode = () => {
  const context = React.useContext(ColorModeContext);
  return context;
};

export default function ToggleColorMode({ children }) {
  const [mode, setMode] = React.useState("light");
  const [systemMode, setSystemMode] = React.useState(false);
  const currentSystemTheme = useMediaQuery("(prefers-color-scheme: dark)")
    ? "dark"
    : "light";
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: (themeMode) => {
        let finalTheme;
        if (themeMode === "system") {
          finalTheme = currentSystemTheme;
          setSystemMode(true);
        } else {
          finalTheme = themeMode;
          setSystemMode(false);
        }
        setMode(finalTheme);
      },
    }),
    [currentSystemTheme]
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          systemMode,
          // : prefersDarkMode ? "dark" : "light",
        },
      }),
    [mode, systemMode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
