import {
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Box,
  Chip,
  Container,
} from "@mui/material";

// Responsive Masonry-like flex grid fallback using Box instead of MUI's Grid
const Project = ({ project }) => (
  <Box
    sx={{
      width: { xs: "100%", sm: "48%", md: "31.5%" },
      flex: "1 1 300px",
      minWidth: 270,
      maxWidth: 415,
      display: "flex",
      flexDirection: "column",
      mb: { xs: 3, md: 0 },
      mx: { xs: 0, sm: 1 },
    }}
  >
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        overflow: "hidden",
        backdropFilter: "blur(10px)",
        transition: "0.25s ease",

        "&:hover": {
          transform: "translateY(-4px)",
          borderColor: "rgba(255,255,255,0.16)",
        },
      }}
    >
      {/* Image */}
      <Box
        sx={{
          height: 220,
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          image={project.image}
          alt={project.name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Content */}
      <CardContent
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#fff",
            fontWeight: 700,
            mb: 1.5,
            letterSpacing: "-0.5px",
          }}
        >
          {project.name}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.7,
            fontSize: "0.95rem",
            mb: 3,
          }}
        >
          {project.desc}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          {project.techStack.map((tech, idx) => (
            <Chip
              key={idx}
              label={tech}
              size="small"
              sx={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.75)",
                borderRadius: "8px",
                fontSize: "0.72rem",
              }}
            />
          ))}
        </Box>
      </CardContent>

      {/* Actions */}
      <CardActions
        sx={{
          px: 3,
          pb: 3,
          pt: 0,
        }}
      >
        <Button
          href={project.url}
          target="_blank"
          variant="contained"
          sx={{
            background: "#fff",
            color: "#000",
            fontWeight: 600,
            borderRadius: "10px",
            px: 2.5,
            textTransform: "none",
            boxShadow: "none",

            "&:hover": {
              background: "#eaeaea",
              boxShadow: "none",
            },
          }}
        >
          View Project
        </Button>
      </CardActions>
    </Card>
  </Box>
);

const Projects = () => {
  const projects = [
    {
      name: "Quicksite",
      desc: `A platform for creating and managing business mini-sites with reusable sections, live editing and custom branding tools.`,
      image: `https://image-source-sk.vercel.app/projects/quicksite.png`,
      url: "https://quicksiteio.vercel.app/",
      techStack: ["Next.js", "TypeScript", "Firebase", "Tailwind"],
    },

    {
      name: "Legal Baby Distribution",
      desc: `Music distribution platform for independent artists, built with a modern frontend and scalable content structure.`,
      image:
        "https://image-source-sk.vercel.app/images/project%20Images/legalbaby.png",
      url: "https://legalbabydistribution.com/",
      techStack: ["Next.js", "Tailwind", "Shadcn"],
    },

    {
      name: "Blog Dashboard",
      desc: `Content management dashboard with live editing, post management and responsive UI built for smooth publishing workflows.`,
      image: "https://image-source-sk.vercel.app/images/bd2.png",
      url: "https://blogsitegxu.vercel.app/",
      techStack: ["React", "Zustand", "Tailwind"],
    },

    {
      name: "Max Games Maker",
      desc: `Experimental platform for creating and testing mini games with editable templates and mobile-friendly tools.`,
      image:
        "https://image-source-sk.vercel.app/images/project%20Images/max-games.png",
      url: "https://max-games-maker-site.vercel.app",
      techStack: ["React", "Material UI"],
    },
  ];

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 10, md: 14 },
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box
          sx={{
            textAlign: "center",
            mb: 8,
          }}
        >
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
              userSelect: "none",
            }}
          >
            Selected Projects
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.55)",
              mx: "auto",
              lineHeight: 1.8,
              fontSize: "1rem",
            }}
          >
            // A few projects focused on product design, content systems and modern
            web experiences.
          </Typography>
        </Box>

        {/* Responsive Flexbox Grid */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 3, sm: 4 },
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: "stretch",
          }}
        >
          {projects.map((project, idx) => (
            <Project key={idx} project={project} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
