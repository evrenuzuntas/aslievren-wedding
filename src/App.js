import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import AppRouter from "./routes/AppRouter";
import ContactButton from "./components/ContactButton";

const theme = createTheme({
  palette: {
    primary: {
      main: "#424242", // Fotoğraftaki gri ton
    },
    secondary: {
      main: "#9e9e9e", // İkincil gri ton
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Container>
          <AppRouter />
          <ContactButton />
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
