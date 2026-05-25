import { useEffect, useState } from "react";
import { Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const scrollOffset = 200;

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > scrollOffset);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () =>
      window.removeEventListener("scroll", handleScroll, { passive: true });
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Zoom in={show}>
      <Fab
        onClick={handleClick}
        aria-label="Scroll back to top"
        size="medium"
        sx={{
          position: "fixed",
          bottom: { xs: 24, md: 36 },
          right: { xs: 24, md: 36 },
          bgcolor: "rgba(0,245,255,0.9)",
          color: "#111",
          zIndex: 1201,
          boxShadow: "0 2px 24px 0 #00f5ff55",
          "&:hover": {
            bgcolor: "#0096ff",
            color: "#fff",
          },
          transition: "all 0.3s",
        }}
      >
        <KeyboardArrowUpIcon fontSize="medium" />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;