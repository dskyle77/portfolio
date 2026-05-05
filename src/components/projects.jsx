import {
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import { keyframes } from "@mui/system";
import LaunchIcon from "@mui/icons-material/Launch";
import CodeIcon from "@mui/icons-material/Code";

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
`;

const Project = ({ project, index }) => (
  <Grid item>
    <Card
      sx={{
        m: { xs: 0, sm: 2 },
        width: { xs: "100%", sm: 360 },
        maxWidth: 360,
        height: 520,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "rgba(15, 23, 42, 0.6)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(0, 245, 255, 0.2)",
        borderRadius: "16px",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s ease",
        animation: `${float} ${3 + index * 0.3}s ease-in-out infinite`,
        animationDelay: `${index * 0.1}s`,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #00f5ff, #0096ff, #00f5ff)",
          backgroundSize: "200% 100%",
          animation: `${shimmer} 3s linear infinite`,
          opacity: 0,
          transition: "opacity 0.3s ease",
        },
        "&:hover": {
          transform: "translateY(-10px)",
          borderColor: "rgba(0, 245, 255, 0.6)",
          boxShadow: "0 20px 60px rgba(0, 245, 255, 0.3)",
          "&::before": {
            opacity: 1,
          },
          "& .project-overlay": {
            opacity: 1,
          },
          "& .project-image": {
            transform: "scale(1.1)",
          },
        },
      }}
    >
      {/* Image Container */}
      <Box
        sx={{
          position: "relative",
          height: "200px",
          overflow: "hidden",
          borderRadius: "16px 16px 0 0",
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={project.image}
          alt={project.name}
          className="project-image"
          sx={{
            transition: "transform 0.5s ease",
            objectFit: "cover",
          }}
        />
        {/* Overlay on hover */}
        <Box
          className="project-overlay"
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(0, 245, 255, 0.2), rgba(0, 150, 255, 0.2))",
            opacity: 0,
            transition: "opacity 0.3s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CodeIcon sx={{ fontSize: 60, color: "#fff", opacity: 0.8 }} />
        </Box>
      </Box>

      {/* Content */}
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography
          variant="h5"
          component="div"
          fontWeight="bold"
          gutterBottom
          sx={{
            color: "#fff",
            mb: 2,
            display: "flex",
            alignItems: "center",
            gap: 1,
            transition: "color 0.3s ease",
            "&:hover": {
              color: "#00f5ff",
            },
          }}
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              bgcolor: "#00f5ff",
              borderRadius: "50%",
              boxShadow: "0 0 10px #00f5ff",
            }}
          />
          {project.name}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            mb: 2,
            lineHeight: 1.6,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.desc}
        </Typography>

        {/* Tech Stack */}
        {project.techStack && project.techStack.length > 0 && (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
            {project.techStack.map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                size="small"
                sx={{
                  background: "rgba(0, 245, 255, 0.1)",
                  border: "1px solid rgba(0, 245, 255, 0.3)",
                  color: "#00f5ff",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                  fontFamily: "monospace",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "rgba(0, 245, 255, 0.2)",
                    borderColor: "#00f5ff",
                    transform: "translateY(-2px)",
                  },
                }}
              />
            ))}
          </Box>
        )}
      </CardContent>

      {/* Actions */}
      <CardActions
        sx={{
          justifyContent: "flex-end",
          p: 2,
          pt: 0,
        }}
      >
        <Button
          variant="contained"
          href={project.url}
          target="_blank"
          size="small"
          endIcon={<LaunchIcon />}
          sx={{
            background: "linear-gradient(135deg, #00f5ff, #0096ff)",
            color: "#000",
            fontWeight: 700,
            px: 3,
            borderRadius: "8px",
            textTransform: "none",
            boxShadow: "0 4px 15px rgba(0, 245, 255, 0.4)",
            transition: "all 0.3s ease",
            "&:hover": {
              background: "linear-gradient(135deg, #00d4ff, #0080ff)",
              transform: "translateY(-2px)",
              boxShadow: "0 6px 25px rgba(0, 245, 255, 0.6)",
            },
          }}
        >
          View Project
        </Button>
      </CardActions>

      {/* Corner accents */}
      <Box
        sx={{
          position: "absolute",
          top: 12,
          left: 12,
          width: 24,
          height: 24,
          borderTop: "2px solid rgba(0, 245, 255, 0.5)",
          borderLeft: "2px solid rgba(0, 245, 255, 0.5)",
          opacity: 0,
          transition: "opacity 0.3s ease",
          "& parent:hover": {
            opacity: 1,
          },
        }}
      />
    </Card>
  </Grid>
);

const Projects = () => {
  const projects = [
    {
      name: "Quicksite",
      desc: `Quicksite is a fast, simple platform that lets individuals and small businesses create beautiful mini-websites without any technical skills.
  With ready-made templates, custom domains, and easy editing tools, you can launch your online presence in minutes—whether it’s for your business, brand, or personal profile.`,
      image: `https://image-source-sk.vercel.app/projects/quicksite.png`,
      url: "https://quicksiteio.vercel.app/",
      techStack: ["Nextjs", "Typescript", "Firebase", "TailwindCSS"],
    },
    {
      name: "Legalbabydistribution",
      desc: `A next-generation distribution and artist services platform built for independent creators—no upfront costs to release, just your music reaching the world.`,
      image: `https://image-source-sk.vercel.app/images/project%20Images/legalbaby.png`,
      url: "https://legalbabydistribution.com/",
      techStack: ["Nextjs", "TailwindCSS", "Shadcn"],
    },
    {
      name: "Blog Dashboard",
      desc: `A modern, responsive blog dashboard for creating, editing, and managing posts with a clean, user-friendly interface.`,
      image: "https://image-source-sk.vercel.app/images/blog-dashboard.png",
      url: "https://blog-site-gxu.vercel.app/",
      techStack: ["React", "Tailwind CSS", "Zustand"],
    },
    {
      name: "Hulu",
      desc: `Redesign of an existing website with very responsive design.`,
      image:
        "https://image-source-sk.vercel.app/images/project%20Images/hulu.png",
      url: "https://david-hulu-com.vercel.app",
      techStack: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "GadgetZone",
      desc: `An e-commerce website for buying and selling gadgets, featuring a sleek design, product listings, and a shopping cart.`,
      image:
        "https://image-source-sk.vercel.app/images/project%20Images/gadgetszone.png",
      url: "https://gadgets-zone-three.vercel.app/",
      techStack: ["Nextjs", "TailwindCSS", "Shadcn"],
    },
    {
      name: "To Do List",
      desc: `A simple task management app that helps users stay organized by adding, editing, and tracking tasks through a clean, responsive interface.`,
      image:
        "https://image-source-sk.vercel.app/images/project%20Images/todolist.png",
      url: "https://to-do-list-gxu.vercel.app/",
      techStack: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "Blog Dashboard V2",
      desc: "A modern, dark-mode blog dashboard with real-time WebSocket sync, live previews, and smooth animations. Built with React, Zustand, and Tailwind CSS.",
      image: "https://image-source-sk.vercel.app/images/bd2.png",
      url: "https://blogsitegxu.vercel.app/",
      techStack: ["JavaScript", "React", "Tailwind CSS", "Zustand"],
    },
    {
      name: "Max Games Maker",
      desc: `An Android app for building and publishing mini games easily. It lets users customise templates and test their projects online.`,
      image:
        "https://image-source-sk.vercel.app/images/project%20Images/max-games.png",
      url: "https://max-games-maker-site.vercel.app",
      techStack: ["React", "Material UI", "JavaScript"],
    },
    {
      name: "MINI Projects",
      desc: `A set of creative mini web pages and components built with pure HTML and CSS, showing responsive layouts and simple animations.`,
      image:
        "https://image-source-sk.vercel.app/images/project%20Images/html-css.png",
      url: "https://html-css-projects-brown.vercel.app/",
      techStack: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        py: 8,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 80% 20%, rgba(0, 245, 255, 0.05) 0%, transparent 50%)",
          pointerEvents: "none",
        },
      }}
    >
      {/* Section Header */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            mb: 2,
            background:
              "linear-gradient(135deg, #ffffff 0%, #00f5ff 50%, #0096ff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Featured Projects
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
            Check out my recent work
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

      {/* Projects Grid */}
      <Grid
        container
        id="projects"
        sx={{
          justifyContent: "center",
          gap: 2,
          px: { xs: 0, sm: 2 },
        }}
      >
        {projects.map((project, idx) => (
          <Project project={project} key={idx} index={idx} />
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
