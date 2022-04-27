// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from "@material-ui/core/styles";
// import { MuiCustomBreakPoints } from '~/styles';
import ReactGA from "react-ga";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { HomePage } from "~/pages";

const theme = createTheme({
  palette: {
    text: {
      primary: "#FFFFFF",
      secondary: "#F69501",
    },
  },
  typography: {
    fontFamily: "Poppins",

    h6: {
      fontWeight: "600",
      fontSize: "40px",
      color: "white",
    },
    h5: {
      fontWeight: "600",
      fontSize: "16px",
      background:
        "-webkit-linear-gradient(268.99deg, #F69501 0.03%, #F1756E 100.53%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    body2: {
      lineHeight: 2,

      fontWeight: "400",
      fontSize: "14px",
      color: "white",
    },
    body1: {
      lineHeight: 2,
      fontWeight: "600",
      fontSize: "24px",
      color: "white",
    },
    subtitle1: {
      lineHeight: 2,
      fontWeight: "600",
      fontSize: "16px",
      color: "white",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
};

export default App;
