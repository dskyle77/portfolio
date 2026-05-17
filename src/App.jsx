import { ThemeProvider, CssBaseline, Snackbar, Alert } from "@mui/material";
import { GlobalStyles } from "@mui/material";
import { useState } from "react";

import Header from "./components/header";
import About from "./components/AboutSection"
import HeroSection from "./components/heroSection";
import SideMenu from "./components/sideMenu";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";

import darkTechTheme from "./theme";



function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  // Snackbar state
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "success", // 'success' | 'error'
  });

  const handleCloseAlert = () => {
    setAlert((prev) => ({ ...prev, open: false }));
  };

  const handleSubmitContact = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("https://formspree.io/f/xjkaabvk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setAlert({
          open: true,
          message: "Message sent successfully!",
          severity: "success",
        });
        e.target.reset();
      } else {
        setAlert({
          open: true,
          message: "Failed to send message.",
          severity: "error",
        });
      }
    } catch (error) {
      setAlert({
        open: true,
        message: "Error: " + error.message,
        severity: "error",
      });
    }
  };
  return (
    <ThemeProvider theme={darkTechTheme}>
      <GlobalStyles styles={{ html: { scrollBehavior: "smooth" } }} />
      <CssBaseline />

      <Header openMenu={openMenu} />
      <HeroSection />
      <About />
      <SideMenu close={closeMenu} open={menuOpen} />

      <Skills />
      <Projects />
      <Contact submitForm={handleSubmitContact} />
      <Footer />

      {/* MUI Snackbar Alert */}
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
