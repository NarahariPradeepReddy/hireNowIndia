import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

import { Link } from "react-router-dom";

const services = [
  {
    icon: <PeopleOutlineIcon />,
    title: "For Job Seekers",
    description:
      "Discover relevant opportunities, explore companies, and apply for jobs that match your skills and career goals.",
  },
  {
    icon: <BusinessCenterOutlinedIcon />,
    title: "For Employers",
    description:
      "Connect with qualified candidates and simplify your hiring process with a recruitment platform built around your needs.",
  },
  {
    icon: <HandshakeOutlinedIcon />,
    title: "Recruitment Support",
    description:
      "Our recruitment approach helps businesses identify, evaluate, and connect with talent for their growing teams.",
  },
];

const benefits = [
  "Access to a growing talent network",
  "Simple and transparent recruitment process",
  "Opportunities across multiple industries",
  "Focus on relevant candidate-job matching",
  "Support for both employers and candidates",
  "A recruitment experience designed for modern businesses",
];

function About() {
  return (
    <Box>
      {/* Hero */}
      <Box
        sx={{
          background:
            "linear-gradient(180deg, #FCFAF5 0%, #F7F1E6 100%)",
          py: { xs: 7, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              maxWidth: 850,
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
              ABOUT US
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
              Connecting great people with great opportunities
            </Typography>

            <Typography
              sx={{
                maxWidth: 700,
                mx: "auto",
                color: "text.secondary",
                fontSize: {
                  xs: "1rem",
                  md: "1.1rem",
                },
                lineHeight: 1.8,
              }}
            >
              We are building a modern recruitment platform that makes it
              easier for talented professionals to find meaningful
              opportunities and for businesses to discover the people they
              need to grow.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Our Story */}
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 7, md: 10 },
        }}
      >
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="overline"
              sx={{
                color: "primary.main",
                fontWeight: 800,
                letterSpacing: "0.12em",
              }}
            >
              OUR STORY
            </Typography>

            <Typography
              variant="h2"
              sx={{
                mt: 1,
                mb: 3,
                fontSize: {
                  xs: "2rem",
                  md: "2.8rem",
                },
              }}
            >
              Recruitment should be simpler
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                lineHeight: 1.85,
                mb: 2,
              }}
            >
              Finding the right opportunity or the right candidate can often
              become complicated. Too many platforms, too much information,
              and not enough focus on what actually matters.
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                lineHeight: 1.85,
                mb: 2,
              }}
            >
              Our platform is designed to bring candidates and employers
              together through a straightforward recruitment experience.
              Candidates can discover opportunities that match their
              ambitions, while businesses can focus on finding people who can
              contribute to their teams.
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                lineHeight: 1.85,
              }}
            >
              As we grow, our goal is to create a trusted recruitment
              ecosystem where technology and human expertise work together.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                minHeight: { xs: 320, md: 430 },
                borderRadius: 4,
                overflow: "hidden",
                background:
                  "linear-gradient(135deg, #FFF4E2 0%, #FBE4BF 100%)",
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              {/* Decorative shapes */}
              <Box
                sx={{
                  position: "absolute",
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  backgroundColor: "primary.main",
                  opacity: 0.12,
                  top: -70,
                  right: -50,
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  width: 160,
                  height: 160,
                  borderRadius: "50%",
                  backgroundColor: "primary.main",
                  opacity: 0.1,
                  bottom: -50,
                  left: -40,
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 4,
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    width: "100%",
                    maxWidth: 380,
                    p: { xs: 3, md: 4 },
                    borderRadius: 3,
                    backgroundColor: "#FFFFFF",
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <TrendingUpOutlinedIcon
                    sx={{
                      fontSize: 42,
                      color: "primary.main",
                      mb: 2,
                    }}
                  />

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      mb: 1,
                    }}
                  >
                    Building better connections
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.7,
                    }}
                  >
                    Bringing employers and candidates together through a
                    simpler, more focused hiring experience.
                  </Typography>
                </Paper>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* What We Do */}
      <Box
        sx={{
          backgroundColor: "#F7F1E6",
          py: { xs: 7, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              maxWidth: 700,
              mb: 5,
            }}
          >
            <Typography
              variant="overline"
              sx={{
                color: "primary.main",
                fontWeight: 800,
                letterSpacing: "0.12em",
              }}
            >
              WHAT WE DO
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
              One platform. Two sides of recruitment.
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                lineHeight: 1.8,
              }}
            >
              We bring together the people looking for their next opportunity
              and the companies looking for their next great hire.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(3, 1fr)",
              },
              gap: 3,
            }}
          >
            {services.map((service) => (
              <Paper
                key={service.title}
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  border: "1px solid",
                  borderColor: "divider",
                  backgroundColor: "#FFFFFF",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#FFF0D9",
                    color: "primary.main",
                    mb: 2.5,
                  }}
                >
                  {service.icon}
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    mb: 1.5,
                  }}
                >
                  {service.title}
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    fontSize: "0.9rem",
                    lineHeight: 1.75,
                  }}
                >
                  {service.description}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Why Choose Us */}
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 7, md: 10 },
        }}
      >
        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              variant="overline"
              sx={{
                color: "primary.main",
                fontWeight: 800,
                letterSpacing: "0.12em",
              }}
            >
              WHY US
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
              Focused on better hiring experiences
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                lineHeight: 1.8,
              }}
            >
              Whether you are searching for your next role or building your
              next team, our platform is designed to keep the recruitment
              experience straightforward and focused.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={2}>
              {benefits.map((benefit) => (
                <Box
                  key={benefit}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1.5,
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: "#FCFAF5",
                  }}
                >
                  <CheckCircleOutlineOutlinedIcon
                    sx={{
                      color: "primary.main",
                      mt: "2px",
                      flexShrink: 0,
                    }}
                  />

                  <Typography
                    sx={{
                      fontWeight: 600,
                      lineHeight: 1.6,
                    }}
                  >
                    {benefit}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* CTA */}
      <Box
        sx={{
          backgroundColor: "secondary.main",
          color: "#FFFFFF",
          py: { xs: 7, md: 9 },
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "#FFFFFF",
                fontSize: {
                  xs: "2rem",
                  md: "2.8rem",
                },
                mb: 2,
              }}
            >
              Ready for your next opportunity?
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.8,
                maxWidth: 620,
                mx: "auto",
                mb: 4,
              }}
            >
              Explore our latest job opportunities or connect with us to
              understand how we can help your business hire great talent.
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
                to="/contact"
                variant="outlined"
                sx={{
                  color: "#FFFFFF",
                  borderColor: "rgba(255,255,255,0.35)",
                  "&:hover": {
                    borderColor: "#FFFFFF",
                    backgroundColor: "rgba(255,255,255,0.06)",
                  },
                }}
              >
                Contact Us
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default About;