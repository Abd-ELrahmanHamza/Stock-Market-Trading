import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Define your custom theme
const theme = responsiveFontSizes(
  createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: "grey[100]",
          },
        },
      },
    },
    palette: {
      primary: {
        main: "#197BBD", // Primary Blue
        light: "#8cc5ffea", // Light Blue
        dark: "#256E96", // Dark Blue
      },
      secondary: {
        main: "#00b894", // Green
        light: "#00cec9", // Light Green
        dark: "#008b70", // Dark Green
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
        secondary: "#363636", // White
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
