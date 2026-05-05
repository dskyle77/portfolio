import { Box, Typography, Stack, IconButton } from "@mui/material";
import FaceBookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsApp from "@mui/icons-material/WhatsApp";
import { keyframes } from "@mui/system";

const pulse = keyframes`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
`;

const Footer = () => (
  <Box
    sx={{
      bgcolor: "rgba(15, 23, 42, 0.8)",
      borderTop: "1px solid rgba(0, 245, 255, 0.2)",
      color: "text.secondary",
      py: 4,
      px: 2,
      mt: "auto",
      position: "relative",
      overflow: "hidden",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        background: "linear-gradient(90deg, transparent, #00f5ff, transparent)",
        animation: `${pulse} 2s ease-in-out infinite`,
      },
    }}
  >
    <Stack
      spacing={3}
      alignItems="center"
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Social Links */}
      <Stack direction="row" spacing={2}>
        <IconButton
          href="#"
          target="_blank"
          sx={{
            color: "rgba(255, 255, 255, 0.6)",
            border: "1px solid rgba(0, 245, 255, 0.2)",
            transition: "all 0.3s ease",
            "&:hover": {
              color: "#00f5ff",
              borderColor: "#00f5ff",
              transform: "translateY(-3px)",
              boxShadow: "0 5px 20px rgba(0, 245, 255, 0.4)",
            },
          }}
        >
          <FaceBookIcon />
        </IconButton>
        <IconButton
          href="#"
          target="_blank"
          sx={{
            color: "rgba(255, 255, 255, 0.6)",
            border: "1px solid rgba(0, 245, 255, 0.2)",
            transition: "all 0.3s ease",
            "&:hover": {
              color: "#00f5ff",
              borderColor: "#00f5ff",
              transform: "translateY(-3px)",
              boxShadow: "0 5px 20px rgba(0, 245, 255, 0.4)",
            },
          }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          href="https://wa.me/+2348161592059"
          target="_blank"
          sx={{
            color: "rgba(255, 255, 255, 0.6)",
            border: "1px solid rgba(0, 245, 255, 0.2)",
            transition: "all 0.3s ease",
            "&:hover": {
              color: "#00f5ff",
              borderColor: "#00f5ff",
              transform: "translateY(-3px)",
              boxShadow: "0 5px 20px rgba(0, 245, 255, 0.4)",
            },
          }}
        >
          <WhatsApp />
        </IconButton>
      </Stack>

      {/* Copyright */}
      <Typography
        variant="body2"
        sx={{
          color: "rgba(255, 255, 255, 0.5)",
          fontFamily: "monospace",
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} David Onyema.{" "}
        <Box
          component="span"
          sx={{
            color: "#00f5ff",
            fontWeight: 600,
          }}
        >
          Built with React & MUI
        </Box>
      </Typography>

      {/* Decorative line */}
      <Box
        sx={{
          width: "200px",
          height: "2px",
          background:
            "linear-gradient(90deg, transparent, #00f5ff, transparent)",
          opacity: 0.3,
        }}
      />
    </Stack>

    {/* Background pattern */}
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "100%",
        background:
          "radial-gradient(circle at 50% 100%, rgba(0, 245, 255, 0.03) 0%, transparent 50%)",
        pointerEvents: "none",
      }}
    />
  </Box>
);

export default Footer;
