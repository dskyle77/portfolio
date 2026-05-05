import { createTheme } from "@mui/material/styles";

const darkTechTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00f5ff", // Cyan
      light: "#5ffbff",
      dark: "#00b8d4",
      contrastText: "#000000",
    },
    secondary: {
      main: "#0096ff", // Blue
      light: "#4db8ff",
      dark: "#0066cc",
      contrastText: "#ffffff",
    },
    background: {
      default: "#0f172a", // Slate 900
      paper: "#1e293b", // Slate 800
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
    divider: "rgba(0, 245, 255, 0.2)",
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          backgroundAttachment: "fixed",
          scrollBehavior: "smooth",
        },
        "*::-webkit-scrollbar": {
          width: "10px",
        },
        "*::-webkit-scrollbar-track": {
          background: "rgba(15, 23, 42, 0.5)",
        },
        "*::-webkit-scrollbar-thumb": {
          background: "linear-gradient(135deg, #00f5ff, #0096ff)",
          borderRadius: "5px",
        },
        "*::-webkit-scrollbar-thumb:hover": {
          background: "linear-gradient(135deg, #00d4ff, #0080ff)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          padding: "10px 24px",
          fontWeight: 600,
          boxShadow: "none",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 8px 24px rgba(0, 245, 255, 0.3)",
          },
        },
        contained: {
          background: "linear-gradient(135deg, #00f5ff, #0096ff)",
          color: "#000",
          "&:hover": {
            background: "linear-gradient(135deg, #00d4ff, #0080ff)",
            transform: "translateY(-2px)",
          },
        },
        outlined: {
          borderWidth: "2px",
          "&:hover": {
            borderWidth: "2px",
            backgroundColor: "rgba(0, 245, 255, 0.1)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "rgba(30, 41, 59, 0.6)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(0, 245, 255, 0.2)",
          transition: "all 0.3s ease",
          "&:hover": {
            borderColor: "rgba(0, 245, 255, 0.5)",
            transform: "translateY(-5px)",
            boxShadow: "0 20px 60px rgba(0, 245, 255, 0.2)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "rgba(0, 245, 255, 0.3)",
              borderWidth: "2px",
            },
            "&:hover fieldset": {
              borderColor: "rgba(0, 245, 255, 0.5)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#00f5ff",
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "rgba(15, 23, 42, 0.95)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: "8px",
        },
      },
    },
  },
});

export default darkTechTheme;
