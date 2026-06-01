import { Box, Stack, Typography, Container, Button } from "@mui/material";
import { keyframes } from "@mui/system";

const pulse = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.05); }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideLeft = keyframes`
  from { opacity: 0; transform: translateX(40px); }
  to { opacity: 1; transform: translateX(0); }
`;

const rotateBorder = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const HeroSection = () => {
  return (
    <section id="home" aria-labelledby="hero-heading">
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          overflow: "hidden",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pt: { xs: 10, md: 0 },
        }}
      >
        {/* Background Accents */}
        <Box
          sx={{
            position: "absolute",
            top: "20%",
            left: "5%",
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
            right: "5%",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(0, 150, 255, 0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
            animation: `${pulse} 9s ease-in-out infinite`,
            animationDelay: "1.5s",
          }}
        />

        {/* Main Content — two column on md+ */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"
          spacing={{ xs: 6, md: 10 }}
          sx={{ zIndex: 2, width: "100%" }}
        >
          {/* ── Left: Text ── */}
          <Stack
            direction="column"
            spacing={4}
            alignItems={{ xs: "center", md: "flex-start" }}
            textAlign={{ xs: "center", md: "left" }}
            sx={{
              flex: 1,
              maxWidth: { xs: "100%", md: "560px" },
              animation: `${slideUp} 1s cubic-bezier(0.16, 1, 0.3, 1)`,
            }}
          >
            {/* Greeting badge */}
            <Box
              sx={{
                px: 3,
                py: 1,
                background:
                  "linear-gradient(135deg, rgba(0,245,255,0.08) 0%, rgba(0,150,255,0.08) 100%)",
                border: "1px solid rgba(0,245,255,0.2)",
                borderRadius: "50px",
                backdropFilter: "blur(10px)",
                alignSelf: { xs: "center", md: "flex-start" },
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

            {/* Main Heading */}
            <Typography
              id="hero-heading"
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: "3rem", sm: "4rem", md: "5rem" },
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

            {/* Subtitle */}
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{ alignSelf: { xs: "center", md: "flex-start" } }}
            >
              <Box
                sx={{
                  width: 30,
                  height: 2,
                  background: "linear-gradient(90deg, transparent, #00f5ff)",
                }}
              />
              <Typography
                variant="h4"
                component="p"
                sx={{
                  color: "#00f5ff",
                  fontWeight: 700,
                  fontFamily: "monospace",
                  fontSize: { xs: "1.1rem", sm: "1.5rem" },
                  letterSpacing: "2px",
                }}
              >
                &lt; Full Stack Developer /&gt;
              </Typography>
              <Box
                sx={{
                  width: 30,
                  height: 2,
                  background: "linear-gradient(90deg, #00f5ff, transparent)",
                }}
              />
            </Stack>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.85)",
                fontSize: { xs: "1rem", sm: "1.1rem" },
                lineHeight: 1.8,
                maxWidth: "520px",
              }}
            >
              Crafting high-performance, beautiful, and scalable web experiences
              from Lagos, Nigeria. Passionate about clean architecture, modern
              interfaces, and building digital products that solve real problems.
            </Typography>

            {/* CTA Buttons */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2.5}
              sx={{ width: { xs: "100%", sm: "auto" } }}
            >
              <Button
                variant="contained"
                href="#projects"
                aria-label="View my projects"
                sx={{
                  background:
                    "linear-gradient(135deg, #00f5ff 0%, #0096ff 100%)",
                  color: "#000",
                  fontWeight: 700,
                  px: 4,
                  py: 1.6,
                  fontSize: "1rem",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 12px 48px rgba(0,245,255,0.5)",
                  },
                }}
              >
                Explore My Work
              </Button>

              <Button
                variant="outlined"
                href="#about"
                aria-label="Learn more about David Onyema"
                sx={{
                  borderColor: "rgba(0,245,255,0.5)",
                  color: "#00f5ff",
                  fontWeight: 700,
                  px: 4,
                  py: 1.6,
                  borderWidth: "2px",
                  "&:hover": {
                    borderColor: "#00f5ff",
                    background: "rgba(0,245,255,0.08)",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                About Me
              </Button>
            </Stack>
          </Stack>

          {/* ── Right: Photo ── */}
          <Box
            sx={{
              flexShrink: 0,
              animation: `${slideLeft} 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Spinning border ring */}
            <Box
              sx={{
                position: "relative",
                width: { xs: 230, sm: 270, md: 310 },
                height: { xs: 230, sm: 270, md: 310 },
              }}
            >
              {/* Rotating gradient ring */}
              <Box
                aria-hidden="true"
                sx={{
                  position: "absolute",
                  inset: -4,
                  borderRadius: "50%",
                  background:
                    "conic-gradient(from 0deg, #00f5ff, #0096ff, #7f00ff, transparent, #00f5ff)",
                  animation: `${rotateBorder} 4s linear infinite`,
                  zIndex: 0,
                }}
              />

              {/* Dark backdrop behind photo (hides the back half of the ring) */}
              <Box
                aria-hidden="true"
                sx={{
                  position: "absolute",
                  inset: 3,
                  borderRadius: "50%",
                  background: "#0f172a",
                  zIndex: 1,
                }}
              />

              {/* Photo */}
              <Box
                component="img"
                src={"/david.png"}
                alt="David Onyema — Full Stack Developer"
                sx={{
                  position: "absolute",
                  inset: 6,
                  width: "calc(100% - 12px)",
                  height: "calc(100% - 12px)",
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "top center",
                  zIndex: 2,
                  filter: "brightness(1.05) contrast(1.05)",
                }}
              />

              {/* Cyan glow behind the whole thing */}
              <Box
                aria-hidden="true"
                sx={{
                  position: "absolute",
                  inset: -20,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(0,245,255,0.15) 0%, transparent 70%)",
                  zIndex: 0,
                  animation: `${pulse} 3s ease-in-out infinite`,
                }}
              />

              {/* "Available for work" badge */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: { xs: 8, md: 12 },
                  right: { xs: -8, md: -16 },
                  zIndex: 3,
                  px: 1.8,
                  py: 0.7,
                  background: "rgba(15,23,42,0.92)",
                  border: "1px solid rgba(0,245,255,0.35)",
                  borderRadius: "50px",
                  backdropFilter: "blur(8px)",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.8,
                  boxShadow: "0 4px 20px rgba(0,245,255,0.2)",
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: "#00f5ff",
                    boxShadow: "0 0 6px #00f5ff",
                    animation: `${pulse} 2s ease-in-out infinite`,
                  }}
                />
                <Typography
                  sx={{
                    color: "#00f5ff",
                    fontSize: "0.72rem",
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Available for work
                </Typography>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Container>
    </section>
  );
};

export default HeroSection;