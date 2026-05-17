import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Container,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
  const submitForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const text = `
Hello David,

Name: ${name}
Email: ${email}

Message:
${message}
    `;

    const whatsappUrl = `https://wa.me/2348161592059?text=${encodeURIComponent(
      text,
    )}`;

    window.open(whatsappUrl, "_blank");
    e.currentTarget.reset();
  };

  const cardStyle = {
    display: "flex",
    alignItems: "center",
    gap: 2,
    p: 2.2,
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: "18px",
    transition: "all 0.25s ease",

    "&:hover": {
      transform: "translateY(-3px)",
      borderColor: "rgba(255,255,255,0.15)",
    },
  };

  const iconWrap = {
    width: 44,
    height: 44,
    borderRadius: "14px",
    background: "rgba(255,255,255,0.04)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const inputStyles = {
    "& .MuiOutlinedInput-root": {
      color: "#fff",
      borderRadius: "14px",
      background: "rgba(255,255,255,0.02)",

      "& fieldset": {
        borderColor: "rgba(255,255,255,0.08)",
      },

      "&:hover fieldset": {
        borderColor: "rgba(255,255,255,0.18)",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#fff",
      },
    },

    "& .MuiInputLabel-root": {
      color: "rgba(255,255,255,0.45)",
    },

    "& .MuiInputLabel-root.Mui-focused": {
      color: "#fff",
    },
  };

  // Responsive styles for replacement of MUI Grid
  const contactSectionStyle = {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    gap: { xs: 4, md: 4 },
    width: "100%",
  };

  const leftColumnStyle = {
    flex: { md: "0 0 340px" },
    minWidth: 0,
    width: { xs: "100%", md: "34%" },
    mb: { xs: 4, md: 0 },
    mr: { md: 4, xs: 0 },
  };

  const rightColumnStyle = {
    flex: 1,
    minWidth: 0,
    width: { xs: "100%", md: "66%" },
  };

  return (
    <Box id="contact" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "2.4rem", sm: "3rem", md: "3.7rem" },
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
            Let’s Work Together
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.55)",
              maxWidth: 600,
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            // Got an idea or project? Send a message and I’ll get back to you.
          </Typography>
        </Box>

        <Box sx={contactSectionStyle}>
          {/* Left */}
          <Box sx={leftColumnStyle}>
            <Stack spacing={2.2}>
              <Box sx={cardStyle}>
                <Box sx={iconWrap}>
                  <EmailIcon sx={{ color: "#fff", fontSize: 20 }} />
                </Box>
                <Box>
                  <Typography
                    sx={{ color: "rgba(255,255,255,0.45)", fontSize: 12 }}
                  >
                    Email
                  </Typography>
                  <Typography sx={{ color: "#fff", fontWeight: 500 }}>
                    dskyle77@gmail.com
                  </Typography>
                </Box>
              </Box>

              <Box sx={cardStyle}>
                <Box sx={iconWrap}>
                  <PhoneIcon sx={{ color: "#fff", fontSize: 20 }} />
                </Box>
                <Box>
                  <Typography
                    sx={{ color: "rgba(255,255,255,0.45)", fontSize: 12 }}
                  >
                    Phone
                  </Typography>
                  <Typography sx={{ color: "#fff", fontWeight: 500 }}>
                    +234 816 159 2059
                  </Typography>
                </Box>
              </Box>

              <Box sx={cardStyle}>
                <Box sx={iconWrap}>
                  <LocationOnIcon sx={{ color: "#fff", fontSize: 20 }} />
                </Box>
                <Box>
                  <Typography
                    sx={{ color: "rgba(255,255,255,0.45)", fontSize: 12 }}
                  >
                    Location
                  </Typography>
                  <Typography sx={{ color: "#fff", fontWeight: 500 }}>
                    Lagos, Nigeria
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Box>

          {/* Right */}
          <Box sx={rightColumnStyle}>
            <Box
              component="form"
              onSubmit={submitForm}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: "24px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Stack spacing={3}>
                <TextField
                  label="Name"
                  name="name"
                  fullWidth
                  required
                  sx={inputStyles}
                />
                <TextField
                  label="Email"
                  name="email"
                  fullWidth
                  required
                  sx={inputStyles}
                />
                <TextField
                  label="Message"
                  name="message"
                  fullWidth
                  required
                  multiline
                  rows={5}
                  sx={inputStyles}
                />

                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    alignSelf: "flex-start",
                    px: 4,
                    py: 1.4,
                    borderRadius: "12px",
                    background: "#fff",
                    color: "#000",
                    fontWeight: 600,
                    textTransform: "none",
                    boxShadow: "none",

                    "&:hover": {
                      background: "#eaeaea",
                    },
                  }}
                >
                  Send Message
                </Button>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
