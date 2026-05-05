import { Box, Typography, TextField, Button, Stack, Grid } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import { keyframes } from "@mui/system";

const pulse = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
`;

const Contact = ({ submitForm }) => {
  return (
    <Box
      id="contact"
      sx={{
        bgcolor: "transparent",
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 6 },
        maxWidth: "1000px",
        width: "90%",
        mx: "auto",
        mb: 4,
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "100%",
          background:
            "radial-gradient(ellipse at center, rgba(0, 245, 255, 0.05) 0%, transparent 70%)",
          pointerEvents: "none",
          animation: `${pulse} 4s ease-in-out infinite`,
        },
      }}
    >
      {/* Section Header */}
      <Box sx={{ textAlign: "center", mb: 8, position: "relative" }}>
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
          Get In Touch
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            mb: 3,
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
            Let's build something amazing
          </Typography>
          <Box
            sx={{
              width: 60,
              height: 2,
              background: "linear-gradient(90deg, #00f5ff, transparent)",
            }}
          />
        </Box>
        <Typography variant="body1" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
          Have a question or want to work together? Drop me a message or reach
          out directly.
        </Typography>
      </Box>

      <Grid container spacing={4} width="100%">
        {/* Contact Info */}
        <Grid item size={{ xs: 12, md: 3 }}>
          <Stack spacing={3}>
            {/* Email */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                p: 2,
                bgcolor: "rgba(15, 23, 42, 0.6)",
                borderRadius: "12px",
                border: "1px solid rgba(0, 245, 255, 0.2)",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                animation: `${float} 3s ease-in-out infinite`,
                "&:hover": {
                  borderColor: "rgba(0, 245, 255, 0.6)",
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 30px rgba(0, 245, 255, 0.2)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: "10px",
                  background:
                    "linear-gradient(135deg, rgba(0, 245, 255, 0.2), rgba(0, 150, 255, 0.2))",
                  mr: 2,
                }}
              >
                <EmailIcon sx={{ color: "#00f5ff" }} />
              </Box>
              <Box>
                <Typography
                  variant="caption"
                  sx={{ color: "rgba(255, 255, 255, 0.5)" }}
                >
                  Email
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#fff", fontWeight: 600 }}
                >
                  dskyle77@gmail.com
                </Typography>
              </Box>
            </Box>

            {/* Phone */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                p: 2,
                bgcolor: "rgba(15, 23, 42, 0.6)",
                borderRadius: "12px",
                border: "1px solid rgba(0, 245, 255, 0.2)",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                animation: `${float} 3s ease-in-out infinite`,
                animationDelay: "0.2s",
                "&:hover": {
                  borderColor: "rgba(0, 245, 255, 0.6)",
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 30px rgba(0, 245, 255, 0.2)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: "10px",
                  background:
                    "linear-gradient(135deg, rgba(0, 245, 255, 0.2), rgba(0, 150, 255, 0.2))",
                  mr: 2,
                }}
              >
                <PhoneIcon sx={{ color: "#00f5ff" }} />
              </Box>
              <Box>
                <Typography
                  variant="caption"
                  sx={{ color: "rgba(255, 255, 255, 0.5)" }}
                >
                  Phone
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#fff", fontWeight: 600 }}
                >
                  +234 816 159 2059
                </Typography>
              </Box>
            </Box>

            {/* Location */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                p: 2,
                bgcolor: "rgba(15, 23, 42, 0.6)",
                borderRadius: "12px",
                border: "1px solid rgba(0, 245, 255, 0.2)",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                animation: `${float} 3s ease-in-out infinite`,
                animationDelay: "0.4s",
                "&:hover": {
                  borderColor: "rgba(0, 245, 255, 0.6)",
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 30px rgba(0, 245, 255, 0.2)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: "10px",
                  background:
                    "linear-gradient(135deg, rgba(0, 245, 255, 0.2), rgba(0, 150, 255, 0.2))",
                  mr: 2,
                }}
              >
                <LocationOnIcon sx={{ color: "#00f5ff" }} />
              </Box>
              <Box>
                <Typography
                  variant="caption"
                  sx={{ color: "rgba(255, 255, 255, 0.5)" }}
                >
                  Location
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#fff", fontWeight: 600 }}
                >
                  Lagos, Nigeria
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Grid>

        {/* Contact Form */}
        <Grid item size={{ xs: 12, md: 9 }}>
          <Box
            component="form"
            onSubmit={submitForm}
            sx={{
              bgcolor: "rgba(15, 23, 42, 0.6)",
              borderRadius: "16px",
              border: "1px solid rgba(0, 245, 255, 0.2)",
              backdropFilter: "blur(10px)",
              p: 4,
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: "linear-gradient(90deg, #00f5ff, #0096ff)",
              },
            }}
          >
            <Stack spacing={3} sx={{ width: "100%" }}>
              <TextField
                label="Name"
                name="name"
                variant="outlined"
                fullWidth
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "#fff",
                    borderRadius: "12px",
                    "& fieldset": {
                      borderColor: "rgba(0, 245, 255, 0.3)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(0, 245, 255, 0.5)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#00f5ff",
                      boxShadow: "0 0 20px rgba(0, 245, 255, 0.3)",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "rgba(255, 255, 255, 0.6)",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#00f5ff",
                  },
                }}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                required
                type="email"
                name="email"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "#fff",
                    borderRadius: "12px",
                    "& fieldset": {
                      borderColor: "rgba(0, 245, 255, 0.3)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(0, 245, 255, 0.5)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#00f5ff",
                      boxShadow: "0 0 20px rgba(0, 245, 255, 0.3)",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "rgba(255, 255, 255, 0.6)",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#00f5ff",
                  },
                }}
              />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                required
                multiline
                rows={5}
                name="message"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "#fff",
                    borderRadius: "12px",
                    "& fieldset": {
                      borderColor: "rgba(0, 245, 255, 0.3)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(0, 245, 255, 0.5)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#00f5ff",
                      boxShadow: "0 0 20px rgba(0, 245, 255, 0.3)",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "rgba(255, 255, 255, 0.6)",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#00f5ff",
                  },
                }}
              />
              <Button
                variant="contained"
                size="large"
                type="submit"
                endIcon={<SendIcon />}
                sx={{
                  alignSelf: "flex-start",
                  px: 6,
                  py: 1.5,
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #00f5ff, #0096ff)",
                  color: "#000",
                  fontWeight: 700,
                  fontSize: "1rem",
                  textTransform: "none",
                  boxShadow: "0 8px 30px rgba(0, 245, 255, 0.4)",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
                    transition: "left 0.5s",
                  },
                  "&:hover": {
                    background: "linear-gradient(135deg, #00d4ff, #0080ff)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 40px rgba(0, 245, 255, 0.6)",
                    "&::before": {
                      left: "100%",
                    },
                  },
                }}
              >
                Send Message
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
