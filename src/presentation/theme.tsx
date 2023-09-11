import { createTheme } from "@mui/material/styles";

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#0070f3", // Primary Blue
      light: "#4d94ff", // Light Blue
      dark: "#0052cc", // Dark Blue
    },
    secondary: {
      main: "#00b894", // Green
    },
    common: {
      black: "#000000", // Black
      white: "#ffffff", // White
    },
    background: {
      default: "#f5f5f5", // Beige
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif", // Set your preferred font family
  },
});

const Constants = {
  drawerWidth: 240,
};

export { theme, Constants };
