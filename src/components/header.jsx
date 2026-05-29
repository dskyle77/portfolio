import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { keyframes } from "@mui/system";

const glow = keyframes`
  0%, 100% {
    text-shadow: 0 0 10px rgba(0, 245, 255, 0.5), 0 0 20px rgba(0, 245, 255, 0.3);
  }
  50% {
    text-shadow: 0 0 20px rgba(0, 245, 255, 0.8), 0 0 30px rgba(0, 245, 255, 0.5);
  }
`;

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Header = ({ openMenu }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <header>
      <AppBar
        component="header"
        position="fixed"
        sx={{
          background:
            "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(0, 245, 255, 0.1)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Toolbar sx={{ position: "relative", overflow: "hidden" }}>
          {/* Animated shimmer */}
          <Box
            aria-hidden="true"
            sx={{
              position: "absolute",
              top: 0,
              left: "-100%",
              width: "200%",
              height: "100%",
              background:
                "linear-gradient(90deg, transparent, rgba(0, 245, 255, 0.05), transparent)",
              animation: "slide 3s linear infinite",
              "@keyframes slide": {
                "0%": { left: "-100%" },
                "100%": { left: "100%" },
              },
            }}
          />

          {/* Logo / site name */}
          <Typography
            variant="h6"
            component="a"
            href="#home"
            aria-label="David Onyema — home"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              background: "linear-gradient(45deg, #00f5ff 30%, #0096ff 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: `${glow} 2s ease-in-out infinite`,
              position: "relative",
              zIndex: 1,
              letterSpacing: "0.5px",
              textDecoration: "none",
            }}
          >
            &lt;DavidDev /&gt;
          </Typography>

          {/* Desktop nav */}
          <Box
            component="nav"
            aria-label="Primary navigation"
            sx={{
              display: isMobile ? "none" : "block",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Stack spacing={1} direction="row">
              {navLinks.map(({ label, href }) => (
                <Button
                  key={label}
                  color="inherit"
                  component="a"
                  href={href}
                  aria-label={`Navigate to ${label} section`}
                  sx={{
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      width: 0,
                      height: "2px",
                      background: "linear-gradient(90deg, #00f5ff, #0096ff)",
                      transition: "all 0.3s ease",
                      transform: "translateX(-50%)",
                    },
                    "&:hover": {
                      color: "#00f5ff",
                      "&::before": { width: "80%" },
                    },
                  }}
                >
                  {label}
                </Button>
              ))}
            </Stack>
          </Box>

          {/* Mobile hamburger */}
          {isMobile && (
            <IconButton
              color="inherit"
              edge="end"
              onClick={openMenu}
              aria-label="Open navigation menu"
              aria-expanded={false}
              aria-haspopup="true"
              sx={{
                position: "relative",
                zIndex: 1,
                "&:hover": {
                  color: "#00f5ff",
                  transform: "rotate(90deg)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
