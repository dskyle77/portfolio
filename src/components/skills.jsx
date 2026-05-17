import { Stack, Box, Typography, Grid, Divider } from "@mui/material";
import { keyframes } from "@mui/system";

import HtmlLogo from "../assets/html-logo.png";
import CssLogo from "../assets/css-logo.png";
import TailwindLogo from "../assets/tc.png";
import UnityLogo from "../assets/unity-logo.png";
import JsLogo from "../assets/js-logo.png";
import TsLogo from "../assets/ts-logo.png";
import ReactLogo from "../assets/react-logo.png";
import GdevelopLogo from "../assets/gdevelop-logo.png";
import GodotLogo from "../assets/godot-logo.png";

import NodeJsLogo from "../assets/node-js-logo.png";
import GitLogo from "../assets/git-logo.png";

// Keyframe for the loading fill animation
const fillTrack = keyframes`
    from { width: 0%; }
    to { width: var(--progress-width); }
  `;

const webSkills = [
  { name: "HTML", image: HtmlLogo, level: 95 },
  { name: "CSS", image: CssLogo, level: 90 },
  { name: "Tailwind CSS", image: TailwindLogo, level: 95 },
  { name: "JavaScript", image: JsLogo, level: 92 },
  { name: "TypeScript", image: TsLogo, level: 85 },
  { name: "React", image: ReactLogo, level: 90 },
  { name: "Node.js", image: NodeJsLogo, level: 75 },
  { name: "Git", image: GitLogo, level: 75 },
];

const gameSkills = [
  { name: "Gdevelop", image: GdevelopLogo, level: 90 },
  { name: "Godot", image: GodotLogo, level: 70 },
  { name: "Unity", image: UnityLogo, level: 65 },
];

function SkillGrid({ skills }) {
  return (
    <Grid container spacing={{ xs: 3, md: 4 }}>
      {skills.map((skill) => (
        <Grid item xs={12} sm={6} key={skill.name}>
          <Box
            sx={{
              p: 2,
              borderRadius: "12px",
              transition: "background 0.3s ease",
              "&:hover": {
                background: "rgba(255, 255, 255, 0.02)",
                "& .skill-icon": {
                  filter: "brightness(1) drop-shadow(0 0 8px #00f5ff)",
                },
              },
            }}
          >
            {/* Info Row: Icon, Label, and Percentage */}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mb: 1.5 }}
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <Box
                  className="skill-icon"
                  component="img"
                  src={skill.image}
                  alt={skill.name}
                  sx={{
                    width: 26,
                    height: 26,
                    objectFit: "contain",
                    filter: "brightness(0.7)",
                    transition: "filter 0.3s ease",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "1.05rem",
                  }}
                >
                  {skill.name}
                </Typography>
              </Stack>

              <Typography
                variant="body2"
                sx={{
                  color: "#00f5ff",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  fontSize: "1rem",
                }}
              >
                {skill.level || 0}%
              </Typography>
            </Stack>

            {/* Cyberpunk Progress Track */}
            <Box
              sx={{
                width: "100%",
                height: "6px",
                bgcolor: "rgba(255, 255, 255, 0.06)",
                borderRadius: "4px",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  "--progress-width": `${skill.level || 0}%`,
                  width: `${skill.level || 0}%`,
                  height: "100%",
                  borderRadius: "4px",
                  background:
                    "linear-gradient(90deg, #0096ff 0%, #00f5ff 100%)",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  boxShadow: "0 0 10px rgba(0, 245, 255, 0.5)",
                  animation: `${fillTrack} 1.2s cubic-bezier(0.1, 1, 0.1, 1) forwards`,
                }}
              />
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

const Skills = () => {
  return (
    <Stack
      id="skills"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 6 },
        position: "relative",
        bgcolor: "transparent",
      }}
    >
      <Box sx={{ maxWidth: "1000px", margin: "0 auto", width: "100%" }}>
        {/* Section Header */}
        <Box sx={{ mb: 8, textAlign: "left" }}>
        <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "2.8rem", sm: "3.5rem", md: "4.3rem" },
              mb: 2,
              letterSpacing: "-1.5px",
              background: "linear-gradient(90deg, #00f5ff 5%, #7f00ff 75%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 3px 18px #00f5ff44",
              fontFamily: "monospace",
              textTransform: "uppercase",
              display: "inline-block",
              py: 0.5,
              px: 1,
              borderRadius: "16px",
              boxShadow: "0 0 20px 2px #00f5ff24",
              userSelect: "none"
            }}
          >
            SKILLS
          </Typography>
     
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255, 255, 255, 0.5)",
              fontFamily: "monospace",
              fontSize: "1rem",
            }}
          >
            // Tools, technologies & areas where I excel
       
          </Typography>
       
        </Box>

        {/* Web Technologies */}
        <Box sx={{ mb: 5 }}>
          <Typography
            variant="h4"
            sx={{
              color: "#00f5ff",
              fontWeight: 700,
              mb: 2,
              letterSpacing: "1.5px",
              fontSize: { xs: "1.3rem", md: "1.7rem" },
              fontFamily: "monospace",
            }}
          >
            Web Development Technologies
          </Typography>
          <SkillGrid skills={webSkills} />
        </Box>

        {/* Divider */}
        <Divider
          sx={{
            mb: 5,
            borderColor: "rgba(0,245,255,0.06)",
            borderBottomWidth: 2,
          }}
        />

        {/* Game Development */}
        <Box>
          <Typography
            variant="h4"
            sx={{
              color: "#00f5ff",
              fontWeight: 700,
              mb: 2,
              letterSpacing: "1.5px",
              fontSize: { xs: "1.3rem", md: "1.7rem" },
              fontFamily: "monospace",
            }}
          >
            Game Development
          </Typography>
          <SkillGrid skills={gameSkills} />
        </Box>
      </Box>
    </Stack>
  );
};

export default Skills;
