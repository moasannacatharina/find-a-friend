import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    secondary: { main: "#E4BF75", dark: "#9e7930" },
    light: { main: "#EDE5DB" },
    primary: { main: "#131933" },
    accent: { main: "#a74747" },
    error: { main: "#FF7154" },
    boxShadow: { main: "#ababab", secondary: "#000" },
  },
});

export default theme;
