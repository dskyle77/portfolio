import { Stack, Box, Typography, Grid } from "@mui/material";
import { keyframes } from "@mui/system";

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

// const glow = keyframes`
//   0%, 100% { box-shadow: 0 0 20px rgba(0, 245, 255, 0.3); }
//   50% { box-shadow: 0 0 40px rgba(0, 245, 255, 0.6); }
// `;

const Skills = ({ skills }) => {
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        bgcolor: "transparent",
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 6 },
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 20% 50%, rgba(0, 245, 255, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0, 150, 255, 0.05) 0%, transparent 50%)",
          pointerEvents: "none",
        },
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Section Header */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              mb: 2,
              background: "linear-gradient(135deg, #ffffff 0%, #00f5ff 50%, #0096ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Tech Stack
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: 60,
                height: 2,
                background: "linear-gradient(90deg, transparent, #00f5ff)",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                color: "rgba(255, 255, 255, 0.6)",
                fontFamily: "monospace",
              }}
            >
              Technologies I work with
            </Typography>
            <Box
              sx={{
                width: 60,
                height: 2,
                background: "linear-gradient(90deg, #00f5ff, transparent)",
              }}
            />
          </Box>
        </Box>

        {/* Skills Grid */}
        <Grid
          container
          spacing={4}
          sx={{
            mt: 2,
            justifyContent: "center",
          }}
        >
          {skills.map((skill, index) => (
            <Grid
              item
              key={skill.name}
              sx={{
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  bgcolor: "rgba(15, 23, 42, 0.6)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "16px",
                  p: 4,
                  width: { md: "200px", xs: "250px" },
                  height: "240px",
                  border: "1px solid rgba(0, 245, 255, 0.2)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                  animation: `${float} ${3 + index * 0.5}s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    borderRadius: "16px",
                    padding: "2px",
                    background: "linear-gradient(135deg, rgba(0, 245, 255, 0.5), rgba(0, 150, 255, 0.5))",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  },
                  "&:hover": {
                    transform: "translateY(-10px) scale(1.05)",
                    borderColor: "rgba(0, 245, 255, 0.8)",
                    boxShadow: "0 20px 60px rgba(0, 245, 255, 0.4)",
                    "&::before": {
                      opacity: 1,
                    },
                    "& .skill-glow": {
                      opacity: 1,
                    },
                  },
                }}
              >
                {/* Glow effect on hover */}
                <Box
                  className="skill-glow"
                  sx={{
                    position: "absolute",
                    inset: -20,
                    background: "radial-gradient(circle, rgba(0, 245, 255, 0.2) 0%, transparent 70%)",
                    borderRadius: "50%",
                    filter: "blur(20px)",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    pointerEvents: "none",
                  }}
                />

                {/* Logo Container */}
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  <Box
                    component="img"
                    height={100}
                    src={skill.image}
                    alt={skill.name}
                    sx={{
                      filter: "drop-shadow(0 4px 20px rgba(0, 245, 255, 0.3))",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        filter: "drop-shadow(0 8px 30px rgba(0, 245, 255, 0.6))",
                      },
                    }}
                  />
                </Box>

                {/* Skill Name */}
                <Typography
                  variant="h5"
                  sx={{
                    color: "#fff",
                    fontWeight: 700,
                    mt: 2,
                    mb: 1,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#00f5ff",
                    },
                  }}
                >
                  {skill.name}
                </Typography>

                {/* Decorative line */}
                <Box
                  sx={{
                    width: 0,
                    height: "2px",
                    background: "linear-gradient(90deg, #00f5ff, #0096ff)",
                    transition: "width 0.3s ease",
                    mt: 1,
                    ".MuiGrid-item:hover &": {
                      width: "60%",
                    },
                  }}
                />

                {/* Corner accents */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 8,
                    left: 8,
                    width: 20,
                    height: 20,
                    borderTop: "2px solid rgba(0, 245, 255, 0.5)",
                    borderLeft: "2px solid rgba(0, 245, 255, 0.5)",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    ".MuiGrid-item:hover &": {
                      opacity: 1,
                    },
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 8,
                    right: 8,
                    width: 20,
                    height: 20,
                    borderBottom: "2px solid rgba(0, 245, 255, 0.5)",
                    borderRight: "2px solid rgba(0, 245, 255, 0.5)",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    ".MuiGrid-item:hover &": {
                      opacity: 1,
                    },
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
};

export default Skills;