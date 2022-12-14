import Router from "./routes";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";

import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    background: {
      default: "#000000",
    },
    primary: {
      main: "#00BFFF",
    },
    secondary: {
      main: "#4d4c4b9e",
    },
  },
  typography: {
    fontFamily: "Batang",
    fontWeightBold: "400, 700",
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#fefefe",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#fefefe",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <CssBaseline />
        <Router />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
