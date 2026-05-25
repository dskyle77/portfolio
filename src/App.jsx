import { ThemeProvider, CssBaseline, Snackbar, Alert } from "@mui/material";
import { GlobalStyles } from "@mui/material";
import { useState } from "react";

import Header from "./components/header";
import About from "./components/AboutSection";
import HeroSection from "./components/heroSection";
import SideMenu from "./components/sideMenu";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";
import ScrollToTop from "./components/ScrollToTop";

import darkTechTheme from "./theme";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseAlert = () => {
    setAlert((prev) => ({ ...prev, open: false }));
  };

  return (
    <ThemeProvider theme={darkTechTheme}>
      <GlobalStyles styles={{ html: { scrollBehavior: "smooth" } }} />
      <CssBaseline />

      {/* Landmark: banner */}
      <Header openMenu={openMenu} />

      {/* Landmark: main */}
      <main id="main-content">
        <HeroSection />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Landmark: contentinfo */}
      <Footer />

      <SideMenu close={closeMenu} open={menuOpen} />
      <ScrollToTop />

      <Snackbar
        open={alert.open}
        autoHideDuration={4000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity={alert.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}

export default App;
