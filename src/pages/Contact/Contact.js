import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import siteConfig from "../../config/siteConfig";

const contactItems = [
  {
    icon: <EmailOutlinedIcon />,
    title: "Email Us",
    value: siteConfig.contact.email,
    description: "Send us your questions anytime.",
  },
  {
    icon: <PhoneOutlinedIcon />,
    title: "Call Us",
    value: siteConfig.contact.phone,
    description: "Monday to Saturday.",
  },
  {
    icon: <LocationOnOutlinedIcon />,
    title: "Our Office",
    value: siteConfig.contact.location,
    description: "Serving businesses across India.",
  },
  {
    icon: <AccessTimeOutlinedIcon />,
    title: "Working Hours",
    value: siteConfig.contact.workingHours,
    description: "Monday to Saturday.",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    /*
      Phase 1:
      Contact form is frontend-only.

      Later this will become something like:
      POST /api/contact
    */

    setSubmitted(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (submitted) {
    return (
      <Box
        sx={{
          minHeight: "75vh",
          display: "flex",
          alignItems: "center",
          py: 8,
          backgroundColor: "#FCFAF5",
        }}
      >
        <Container maxWidth="md">
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 7 },
              textAlign: "center",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 3,
            }}
          >
            <CheckCircleOutlineOutlinedIcon
              sx={{
                fontSize: 64,
                color: "primary.main",
                mb: 2,
              }}
            />

            <Typography variant="h3" sx={{ mb: 2 }}>
              Message Sent
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              Thank you for contacting us. Our team will review your message
              and get back to you as soon as possible.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
            >
              <Button
                component={Link}
                to="/jobs"
                variant="contained"
                endIcon={<ArrowForwardIcon />}
              >
                Explore Jobs
              </Button>

              <Button
                component={Link}
                to="/"
                variant="outlined"
              >
                Back to Home
              </Button>
            </Stack>
          </Paper>
        </Container>
      </Box>
    );
  }

  return (
    <Box>
      {/* Hero */}
      <Box
        sx={{
          background:
            "linear-gradient(180deg, #FCFAF5 0%, #F7F1E6 100%)",
          py: { xs: 7, md: 9 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              maxWidth: 780,
              mx: "auto",
              textAlign: "center",
            }}
          >
            <Typography
              variant="overline"
              sx={{
                color: "primary.main",
                fontWeight: 800,
                letterSpacing: "0.14em",
              }}
            >
              GET IN TOUCH
            </Typography>

            <Typography
              variant="h1"
              sx={{
                mt: 1.5,
                mb: 2.5,
                fontSize: {
                  xs: "2.3rem",
                  sm: "3rem",
                  md: "4rem",
                },
                lineHeight: 1.05,
              }}
            >
              Let's start a conversation
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                maxWidth: 650,
                mx: "auto",
                fontSize: {
                  xs: "1rem",
                  md: "1.1rem",
                },
                lineHeight: 1.8,
              }}
            >
              Whether you are looking for your next opportunity or searching
              for great talent, our team is here to help.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Contact Information */}
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 6, md: 8 },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 2,
          }}
        >
          {contactItems.map((item) => (
            <Paper
              key={item.title}
              elevation={0}
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 3,
                height: "100%",
              }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#FFF0D9",
                  color: "primary.main",
                  mb: 2,
                }}
              >
                {item.icon}
              </Box>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  mb: 0.8,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  mb: 0.8,
                  wordBreak: "break-word",
                }}
              >
                {item.value}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ lineHeight: 1.6 }}
              >
                {item.description}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>

      {/* Contact Form */}
      <Box
        sx={{
          backgroundColor: "#F7F1E6",
          py: { xs: 7, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 5, md: 8 }}>
            {/* Left */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                variant="overline"
                sx={{
                  color: "primary.main",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                }}
              >
                CONTACT US
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  mt: 1,
                  mb: 2,
                  fontSize: {
                    xs: "2rem",
                    md: "2.8rem",
                  },
                }}
              >
                Have a question?
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  lineHeight: 1.8,
                  mb: 4,
                }}
              >
                Tell us what you need help with and our team will get back to
                you. Whether it's about hiring, job opportunities, or our
                recruitment services, we'd be happy to hear from you.
              </Typography>

              <Stack spacing={2}>
                <Box
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    alignItems: "flex-start",
                  }}
                >
                  <CheckCircleOutlineOutlinedIcon
                    sx={{
                      color: "primary.main",
                      mt: "2px",
                    }}
                  />

                  <Typography
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    Quick response from our team
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    alignItems: "flex-start",
                  }}
                >
                  <CheckCircleOutlineOutlinedIcon
                    sx={{
                      color: "primary.main",
                      mt: "2px",
                    }}
                  />

                  <Typography
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    Support for candidates and employers
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    alignItems: "flex-start",
                  }}
                >
                  <CheckCircleOutlineOutlinedIcon
                    sx={{
                      color: "primary.main",
                      mt: "2px",
                    }}
                  />

                  <Typography
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    Clear and straightforward communication
                  </Typography>
                </Box>
              </Stack>
            </Grid>

            {/* Form */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Paper
                component="form"
                onSubmit={handleSubmit}
                elevation={0}
                sx={{
                  p: { xs: 3, md: 5 },
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 3,
                  backgroundColor: "#FFFFFF",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    mb: 1,
                  }}
                >
                  Send us a message
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 4 }}
                >
                  Fill in the details below and we'll get back to you.
                </Typography>

                <Grid container spacing={2.5}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      error={Boolean(errors.name)}
                      helperText={errors.name}
                      required
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      type="email"
                      label="Email Address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={Boolean(errors.email)}
                      helperText={errors.email}
                      required
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      error={Boolean(errors.phone)}
                      helperText={errors.phone}
                      required
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      error={Boolean(errors.subject)}
                      helperText={errors.subject}
                      required
                    />
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      multiline
                      minRows={6}
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      error={Boolean(errors.message)}
                      helperText={errors.message}
                      placeholder="Tell us how we can help..."
                      required
                    />
                  </Grid>
                </Grid>

                <Alert
                  severity="info"
                  sx={{
                    mt: 3,
                    mb: 3,
                  }}
                >
                  We respect your privacy and will use your information only
                  to respond to your enquiry.
                </Alert>

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  endIcon={<ArrowForwardIcon />}
                >
                  Send Message
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Bottom CTA */}
      <Box
        sx={{
          backgroundColor: "secondary.main",
          color: "#FFFFFF",
          py: { xs: 7, md: 8 },
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h3"
              sx={{
                color: "#FFFFFF",
                mb: 2,
                fontSize: {
                  xs: "2rem",
                  md: "2.6rem",
                },
              }}
            >
              Looking for your next opportunity?
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.8,
                mb: 3.5,
              }}
            >
              Explore our latest job openings and find a role that matches
              your skills and ambitions.
            </Typography>

            <Button
              component={Link}
              to="/jobs"
              variant="contained"
              endIcon={<ArrowForwardIcon />}
            >
              Browse Jobs
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Contact;