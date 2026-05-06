import {
  Box,
  Stack,
  Typography,
  Container,
  Button,
  // useTheme,
  // useMediaQuery,
} from "@mui/material";
import { keyframes } from "@mui/system";
import heroImg from "../assets/hero-image.png";

// Animations
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const HeroSection = () => {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container
      maxWidth="xl"
      id="about"
      sx={{
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          background:
            "radial-gradient(circle, rgba(0, 245, 255, 0.03) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          animation: `${pulse} 4s ease-in-out infinite`,
        },
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 8, md: 8 }}
        alignItems="center"
        justifyContent="space-between"
        sx={{
          minHeight: "calc(100vh - 100px)",
          py: { xs: 4, md: 8 },
          px: { xs: 2, md: 6 },
          mt: { xs: 8, md: 4 },
          position: "relative",
        }}
      >
        {/* Text Content */}
        <Stack
          direction="column"
          spacing={3}
          sx={{
            flex: 1,
            maxWidth: { xs: "100%", md: "600px" },
            animation: `${slideIn} 0.8s ease-out`,
          }}
        >
          {/* Greeting Badge */}
          <Box
            sx={{
              display: "inline-block",
              alignSelf: "flex-start",
              px: 3,
              py: 1,
              background:
                "linear-gradient(135deg, rgba(0, 245, 255, 0.1) 0%, rgba(0, 150, 255, 0.1) 100%)",
              border: "1px solid rgba(0, 245, 255, 0.3)",
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
              }}
            >
              👋 Welcome to my digital space
            </Typography>
          </Box>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
              fontWeight: 800,
              lineHeight: 1.2,
              background:
                "linear-gradient(135deg, #ffffff 0%, #00f5ff 50%, #0096ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 40px rgba(0, 245, 255, 0.3)",
            }}
          >
            David Onyema
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                width: 40,
                height: 2,
                background: "linear-gradient(90deg, #00f5ff, transparent)",
              }}
            />
            <Typography
              variant="h5"
              sx={{
                color: "#00f5ff",
                fontWeight: 700,
                fontFamily: "monospace",
                letterSpacing: "2px",
              }}
            >
              &lt; Front End Developer /&gt;
            </Typography>
          </Box>

          <Typography
            variant="body1"
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              lineHeight: 1.8,
              fontSize: { xs: "1rem", md: "1.125rem" },
              borderLeft: "3px solid rgba(0, 245, 255, 0.5)",
              paddingLeft: 2,
            }}
          >
            I'm David Onyema — a self-taught full-stack developer based in
            Lagos, Nigeria. I didn't learn to code in a classroom. I figured it
            out through broken builds, late nights, and shipping real projects
            for real clients. Three-plus years in, and I'm just getting started.
            I build fast, functional, and scalable web applications using
            Next.js, Tailwind CSS, Typescript, and Nodejs. Being part of
            Lagos's growing tech scene — home to some of Africa's most exciting
            startups — has shaped how I think about building products that are
            practical, performant, and built to scale. I'm not just writing
            code. I'm building things that matter.
          </Typography>

          {/* CTA Buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mt: 2 }}
          >
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(135deg, #00f5ff 0%, #0096ff 100%)",
                color: "#000",
                fontWeight: 700,
                px: 4,
                py: 1.5,
                borderRadius: 2,
                fontSize: "1rem",
                boxShadow: "0 8px 32px rgba(0, 245, 255, 0.4)",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
                  transition: "left 0.5s",
                },
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 48px rgba(0, 245, 255, 0.6)",
                  "&::before": {
                    left: "100%",
                  },
                },
              }}
              href="#projects"
            >
              View My Work
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#00f5ff",
                color: "#00f5ff",
                fontWeight: 700,
                px: 4,
                py: 1.5,
                borderRadius: 2,
                fontSize: "1rem",
                borderWidth: "2px",
                "&:hover": {
                  borderWidth: "2px",
                  borderColor: "#00f5ff",
                  background: "rgba(0, 245, 255, 0.1)",
                  transform: "translateY(-2px)",
                },
              }}
              component="a"
              href="#contact"
            >
              Contact Me
            </Button>
          </Stack>
        </Stack>

        {/* Image Content */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: { xs: "min(600px,100%)", md: "500px" },
            position: "relative",
          }}
        >
          {/* Floating orbs */}
          <Box
            sx={{
              position: "absolute",
              top: "10%",
              right: "-10%",
              width: 200,
              height: 200,
              background:
                "radial-gradient(circle, rgba(0, 245, 255, 0.2) 0%, transparent 70%)",
              borderRadius: "50%",
              filter: "blur(40px)",
              animation: `${float} 6s ease-in-out infinite`,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "10%",
              left: "-10%",
              width: 250,
              height: 250,
              background:
                "radial-gradient(circle, rgba(0, 150, 255, 0.2) 0%, transparent 70%)",
              borderRadius: "50%",
              filter: "blur(40px)",
              animation: `${float} 8s ease-in-out infinite`,
              animationDelay: "1s",
            }}
          />

          {/* Main Image Container */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              animation: `${float} 4s ease-in-out infinite`,
            }}
          >
            {/* Glow effect */}
            <Box
              sx={{
                position: "absolute",
                inset: -20,
                background:
                  "linear-gradient(135deg, rgba(0, 245, 255, 0.3), rgba(0, 150, 255, 0.3))",
                borderRadius: 4,
                filter: "blur(30px)",
                opacity: 0.6,
                animation: `${pulse} 3s ease-in-out infinite`,
              }}
            />

            <Box
              component="img"
              src={heroImg}
              alt="David Onyema"
              sx={{
                position: "relative",
                width: "100%",
                height: "auto",
                maxWidth: "100%",
                borderRadius: 4,
                border: "3px solid",
                borderColor: "rgba(0, 245, 255, 0.5)",
                boxShadow: "0 20px 60px rgba(0, 245, 255, 0.4)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02) translateY(-5px)",
                  borderColor: "rgba(0, 245, 255, 1)",
                  boxShadow: "0 30px 80px rgba(0, 245, 255, 0.6)",
                },
              }}
            />

            {/* Corner accents */}
            <Box
              sx={{
                position: "absolute",
                top: -10,
                left: -10,
                width: 40,
                height: 40,
                borderTop: "3px solid #00f5ff",
                borderLeft: "3px solid #00f5ff",
                borderRadius: "8px 0 0 0",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: -10,
                right: -10,
                width: 40,
                height: 40,
                borderBottom: "3px solid #00f5ff",
                borderRight: "3px solid #00f5ff",
                borderRadius: "0 0 8px 0",
              }}
            />
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default HeroSection;
