import { Container, Box, Typography, Stack } from "@mui/material";

const AboutSection = () => {
  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "15+", label: "Projects Shipped" },
    { value: "Lagos", label: "Based in Nigeria" },
  ];

  return (
    <section id="about" aria-labelledby="about-heading">
      <Box sx={{ py: { xs: 7, md: 16 }, position: "relative" }}>
        <Container maxWidth="lg" sx={{ px: { xs: 1, md: 3 } }}>
          {/* Section Heading */}
          <Typography
            id="about-heading"
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 800,
              mb: { xs: 3, md: 4 },
              fontSize: { xs: "2.2rem", md: "2.85rem" },
              background: "linear-gradient(135deg, #ffffff 0%, #00f5ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Story So Far
          </Typography>

          <Stack spacing={{ xs: 2, md: 3 }} sx={{ mb: { xs: 4, md: 6 } }}>
            <Box>
              {/* First Paragraph */}
              <Typography
                variant="body1"
                sx={{
                  color: "#00f5ff",
                  background:
                    "linear-gradient(90deg, rgba(0,245,255,0.14) 0%, rgba(0,40,70,0.22) 100%)",
                  borderLeft: "4px solid #00f5ff",
                  borderRadius: "7px 14px 14px 7px",
                  px: { xs: 1.6, sm: 2.5 },
                  py: { xs: 1, sm: 1.3 },
                  fontSize: { xs: "1rem", sm: "1.09rem", md: "1.3rem" },
                  lineHeight: 1.9,
                  mb: { xs: 1.7, md: 2 },
                }}
              >
                I'm{" "}
                <Box component="span" sx={{ color: "#fff", fontWeight: 700 }}>
                  David Onyema
                </Box>{" "}
                (also known as{" "}
                <Box
                  component="span"
                  sx={{ color: "#ffd600", fontWeight: 700 }}
                >
                  dskyle77
                </Box>
                ), a full-stack developer from{" "}
                <Box
                  component="span"
                  sx={{ color: "#ffd600", fontWeight: 700 }}
                >
                  Lagos, Nigeria
                </Box>
                , with over{" "}
                <Box
                  component="span"
                  sx={{ color: "#00ffab", fontWeight: 700 }}
                >
                  three years
                </Box>{" "}
                of experience building websites, web applications and internal
                tools using{" "}
                <Box
                  component="span"
                  sx={{ color: "#00bfff", fontWeight: 600 }}
                >
                  Next.js, React, TypeScript
                </Box>{" "}
                and{" "}
                <Box
                  component="span"
                  sx={{ color: "#ffa726", fontWeight: 600 }}
                >
                  Firebase
                </Box>
                .
              </Typography>

              {/* Second Paragraph */}
              <Typography
                variant="body1"
                sx={{
                  color: "#f5f5f5",
                  background:
                    "linear-gradient(90deg, rgba(36,10,81,0.18) 0%, rgba(0,245,255,0.06) 100%)",
                  borderRight: "4px solid #7f00ff",
                  borderRadius: "14px 7px 7px 14px",
                  px: { xs: 1.6, sm: 2.5 },
                  py: { xs: 1, sm: 1.3 },
                  fontSize: { xs: "0.98rem", sm: "1.03rem", md: "1.2rem" },
                  lineHeight: 1.85,
                  mb: { xs: 1.7, md: 2 },
                }}
              >
                I mostly enjoy{" "}
                <Box
                  component="span"
                  sx={{ color: "#00f5ff", fontWeight: 700 }}
                >
                  building products
                </Box>{" "}
                that solve real business problems — from company websites and
                admin dashboards to dynamic editor systems and scalable content
                platforms. I care a lot about{" "}
                <Box
                  component="span"
                  sx={{ color: "#00f5ff", fontWeight: 700 }}
                >
                  performance
                </Box>
                ,{" "}
                <Box component="span" sx={{ color: "#26ffe6" }}>
                  clean UI
                </Box>
                , maintainable architecture and crafting products people can
                actually use comfortably.
              </Typography>

              {/* Third Paragraph */}
              <Typography
                variant="body1"
                sx={{
                  color: "#dfeafc",
                  background:
                    "linear-gradient(90deg, rgba(0,245,255,0.10) 0%, rgba(36,10,81,0.16) 100%)",
                  borderLeft: "4px solid #26ffe6",
                  borderRadius: "7px 14px 14px 7px",
                  px: { xs: 1.6, sm: 2.5 },
                  py: { xs: 0.9, sm: 1.2 },
                  fontSize: { xs: "0.97rem", sm: "0.98rem", md: "1.1rem" },
                  lineHeight: 1.78,
                }}
              >
                Over the years, I've worked on{" "}
                <Box component="span" sx={{ color: "#ffa726" }}>
                  client projects
                </Box>
                , personal products and experiments that helped me grow beyond
                just frontend development into building{" "}
                <Box component="span" sx={{ color: "#00bfff" }}>
                  complete systems
                </Box>{" "}
                from idea to deployment.
              </Typography>
            </Box>
          </Stack>

          {/* Stats / Metrics */}
          <Box
            sx={{
              background:
                "linear-gradient(90deg, rgba(0,245,255,0.08) 0%, rgba(36,10,81,0.18) 100%)",
              border: "2px solid #00f5ff33",
              borderRadius: "16px",
              p: { xs: 1.5, sm: 2.2, md: 3 },
              boxShadow: "0 6px 32px -8px #00f5ff22, 0 0 0 1px #333c",
              maxWidth: 540,
              mx: "auto",
              mt: { xs: 3, md: 4 },
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 3, md: 5 }}
              divider={
                <Box
                  sx={{
                    width: { xs: "100%", sm: "1.5px" },
                    height: { xs: "1.5px", sm: 54 },
                    bgcolor: "rgba(0,245,255,0.13)",
                    borderRadius: "2px",
                    alignSelf: "center",
                  }}
                />
              }
            >
              {stats.map((stat, i) => (
                <Box
                  key={i}
                  sx={{
                    textAlign: "center",
                    flex: 1,
                    py: { xs: 1, sm: 0 },
                  }}
                >
                  <Typography
                    variant="h3"
                    component="div"
                    sx={{
                      fontWeight: 800,
                      color: "#00f5ff",
                      fontSize: { xs: "1.65rem", sm: "2rem", md: "2.6rem" },
                      lineHeight: 1.2,
                      mb: { xs: 0.1, sm: 0.4 },
                      letterSpacing: "-2px",
                      textShadow: "0 0 6px #00f5ff44",
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#e0fffa",
                      fontWeight: 600,
                      fontSize: { xs: "0.93rem", sm: "0.98rem", md: "1.06rem" },
                      letterSpacing: "0.12em",
                      opacity: 0.77,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default AboutSection;
