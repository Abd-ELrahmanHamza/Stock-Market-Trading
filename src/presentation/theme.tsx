import { grey } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Define your custom theme
const theme = responsiveFontSizes(
  createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: grey[300],
          },
        },
      },
    },
    palette: {
      primary: {
        main: "#0070f3", // Primary Blue
        light: "#4d94ff", // Light Blue
        dark: "#0052cc", // Dark Blue
      },
      secondary: {
        main: "#00b894", // Green
        light: "#00cec9", // Light Green
        dark: "#0984e3", // Dark Green
      },
      error: {
        main: "#ff0000", // Red
        light: "#ff7675", // Light Red
        dark: "#d63031", // Dark Red
      },
      common: {
        black: "#363636", // Black
        white: "#ffffff", // White
      },
      background: {
        default: "#f5f5f5", // Beige
      },
      text: {
        primary: "#363636", // Black
        secondary: "#ffffff", // White
      },
    },
    typography: {
      fontFamily: [
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

  })
);

const Constants = {
  drawerWidth: 240,
};

export { theme, Constants };
