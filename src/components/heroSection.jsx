import { Box, Stack, Typography, Container, Button } from "@mui/material";
import { keyframes } from "@mui/system";

// Animations
const pulse = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.05); }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroSection = () => {
  return (
    <Container
      maxWidth="lg"
      id="home"
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Futuristic Background Accents */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "350px",
          height: "350px",
          background:
            "radial-gradient(circle, rgba(0, 245, 255, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: `${pulse} 7s ease-in-out infinite`,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(0, 150, 255, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: `${pulse} 9s ease-in-out infinite`,
          animationDelay: "1.5s",
        }}
      />

      {/* Main Content */}
      <Stack
        direction="column"
        spacing={4}
        alignItems="center"
        textAlign="center"
        sx={{
          zIndex: 2,
          maxWidth: "800px",
          animation: `${slideUp} 1s cubic-bezier(0.16, 1, 0.3, 1)`,
        }}
      >
        {/* Greeting Badge */}
        <Box
          sx={{
            px: 3,
            py: 1,
            background:
              "linear-gradient(135deg, rgba(0, 245, 255, 0.08) 0%, rgba(0, 150, 255, 0.08) 100%)",
            border: "1px solid rgba(0, 245, 255, 0.2)",
            borderRadius: "50px",
            backdropFilter: "blur(10px)",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#00f5ff",
              fontFamily: "monospace",
              fontWeight: 600,
              letterSpacing: "1px",
            }}
          >
            👋 Welcome to my digital space
          </Typography>
        </Box>

        {/* Name Title */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "3rem", sm: "4.5rem", md: "5.5rem" },
            fontWeight: 900,
            lineHeight: 1.1,
            background:
              "linear-gradient(135deg, #ffffff 10%, #00f5ff 60%, #0096ff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-0.02em",
          }}
        >
          David Onyema
        </Typography>

        {/* Subtitle Accent */}
        <Stack direction="row" alignItems="center" spacing={2}>
          <Box
            sx={{
              width: 30,
              height: 2,
              background: "linear-gradient(90deg, transparent, #00f5ff)",
            }}
          />
          <Typography
            variant="h4"
            sx={{
              color: "#00f5ff",
              fontWeight: 700,
              fontFamily: "monospace",
              fontSize: { xs: "1.25rem", sm: "1.75rem" },
              letterSpacing: "3px",
            }}
          >
            &lt; Front-End Engineer /&gt;
          </Typography>
          <Box
            sx={{
              width: 30,
              height: 2,
              background: "linear-gradient(90deg, #00f5ff, transparent)",
            }}
          />
        </Stack>

        <Typography
          variant="body1"
          sx={{
            color: "rgba(255, 255, 255, 0.6)",
            fontSize: { xs: "1.1rem", sm: "1.25rem" },
            lineHeight: 1.6,
            maxWidth: "650px",
          }}
        >
          Crafting high-performance, beautiful, and scalable web ecosystems from
          the architectural floor up to the client interface.
        </Typography>

        {/* Call to Actions */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2.5}
          sx={{ mt: 2, width: { xs: "100%", sm: "auto" } }}
        >
          <Button
            variant="contained"
            href="#projects"
            sx={{
              background: "linear-gradient(135deg, #00f5ff 0%, #0096ff 100%)",
              color: "#000",
              fontWeight: 700,
              px: 5,
              py: 1.8,
              borderRadius: 2,
              fontSize: "1rem",
              boxShadow: "0 8px 32px rgba(0, 245, 255, 0.3)",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 12px 48px rgba(0, 245, 255, 0.5)",
              },
            }}
          >
            Explore My Work
          </Button>
          <Button
            variant="outlined"
            href="#about"
            sx={{
              borderColor: "rgba(0, 245, 255, 0.4)",
              color: "#00f5ff",
              fontWeight: 700,
              px: 5,
              py: 1.8,
              borderRadius: 2,
              fontSize: "1rem",
              borderWidth: "2px",
              backdropFilter: "blur(5px)",
              "&:hover": {
                borderWidth: "2px",
                borderColor: "#00f5ff",
                background: "rgba(0, 245, 255, 0.05)",
                transform: "translateY(-3px)",
              },
            }}
          >
            About Me
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default HeroSection;
