import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    fontFamily: "Roboto",
    h1: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
      fontSize: "17px",
      lineHeight: "20px",
    },
    subtitle1: {
      fontFamily: "Open Sans",
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "21px",
    },
    body1: {
      fontWeight: 500,
      fontSize: "13px",
      lineHeight: "16px",
    },
  },
  palette: {
    primary: {
      main: "#6A3EEA",
    },
    secondary: {
      main: "#8b4a97",
    },
    background: {
      default: "#ffffff",
    },
  },
  spacing: 10,
  shape: {
    borderRadius: 10,
  },
});
