import logo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/system";
import NavBar from "./Components/Navbar";
import Hero from "./Components/Hero";
import HowWeWork from "./Components/HowWeWork";

function App() {
  return (
    <Box>
      <header>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </header>
      <Box>
        <NavBar/>
      </Box>
      <Box>
        <Hero/>
        <HowWeWork/>
      </Box>
    </Box>
  );
}

export default App;
