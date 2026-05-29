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

// Individual Project Card - More Semantic
const Project = ({ project }) => (
  <article
    style={{
      width: "100%",
      flex: "1 1 300px",
      minWidth: 270,
      maxWidth: 415,
      display: "flex",
      flexDirection: "column",
      marginBottom: "1.5rem",
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
      {/* Project Image */}
      <Box sx={{ height: 220, overflow: "hidden" }}>
        <CardMedia
          component="img"
          image={project.image}
          alt={`Screenshot of ${project.name} project`}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.4s ease",
          }}
        />
      </Box>

      {/* Project Content */}
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography
          variant="h3"
          component="h3"
          sx={{
            color: "#fff",
            fontWeight: 700,
            mb: 1.5,
            fontSize: "1.4rem",
            letterSpacing: "-0.5px",
          }}
        >
          {project.name}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.7,
            fontSize: "0.97rem",
            mb: 3,
          }}
        >
          {project.desc}
        </Typography>

        {/* Tech Stack */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {project.techStack.map((tech, idx) => (
            <Chip
              key={idx}
              label={tech}
              size="small"
              sx={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.85)",
                borderRadius: "8px",
                fontSize: "0.75rem",
              }}
            />
          ))}
        </Box>
      </CardContent>

      {/* Project Link */}
      <CardActions sx={{ px: 3, pb: 3, pt: 0 }}>
        <Button
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          aria-label={`View ${project.name} project`}
          sx={{
            background: "#fff",
            color: "#000",
            fontWeight: 600,
            borderRadius: "10px",
            px: 3,
            textTransform: "none",
            "&:hover": {
              background: "#eaeaea",
            },
          }}
        >
          View Project
        </Button>
      </CardActions>
    </Card>
  </article>
);

const Projects = () => {
  const projects = [
    {
      name: "Quicksite",
      desc: "A platform for creating and managing business mini-sites with reusable sections, live editing and custom branding tools.",
      image: "https://image-source-sk.vercel.app/projects/quicksite.png",
      url: "https://quicksiteio.vercel.app/",
      techStack: ["Next.js", "TypeScript", "Firebase", "Tailwind"],
    },
    {
      name: "Legal Baby Distribution",
      desc: "Music distribution platform for independent artists with modern frontend and scalable content structure.",
      image:
        "https://image-source-sk.vercel.app/images/project%20Images/legalbaby.png",
      url: "https://legalbabydistribution.com/",
      techStack: ["Next.js", "Tailwind", "Shadcn"],
    },
    {
      name: "Blog Dashboard",
      desc: "Content management dashboard with live editing, post management and responsive UI for smooth publishing workflows.",
      image: "https://image-source-sk.vercel.app/images/bd2.png",
      url: "https://blogsitegxu.vercel.app/",
      techStack: ["React", "Zustand", "Tailwind"],
    },
    {
      name: "Max Games Maker",
      desc: "Experimental platform for creating and testing mini games with editable templates and mobile-friendly tools.",
      image:
        "https://image-source-sk.vercel.app/images/project%20Images/max-games.png",
      url: "https://max-games-maker-site.vercel.app",
      techStack: ["React", "Material UI"],
    },
  ];

  return (
    <section id="projects" aria-labelledby="projects-heading">
      <Box sx={{ py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg">
          {/* Section Header */}
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              id="projects-heading"
              variant="h2"
              component="h2"
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
              }}
            >
              Selected Projects
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.6)",
                maxWidth: 700,
                mx: "auto",
                fontSize: "1.05rem",
              }}
            >
              A selection of projects focused on product design, content
              systems, and modern web experiences.
            </Typography>
          </Box>

          {/* Projects Grid */}
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
    </section>
  );
};

export default Projects;
