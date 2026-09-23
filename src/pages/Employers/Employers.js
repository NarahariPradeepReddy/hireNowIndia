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
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

import { Link } from "react-router-dom";

const hiringFeatures = [
  {
    icon: <PeopleAltOutlinedIcon />,
    title: "Reach Qualified Talent",
    description:
      "Connect with candidates whose skills and experience align with your hiring requirements.",
  },
  {
    icon: <SearchOutlinedIcon />,
    title: "Simplify Candidate Search",
    description:
      "Spend less time searching and more time speaking with candidates who fit your roles.",
  },
  {
    icon: <SpeedOutlinedIcon />,
    title: "Hire Faster",
    description:
      "Reduce unnecessary steps in the recruitment process and move qualified candidates forward.",
  },
  {
    icon: <SupportAgentOutlinedIcon />,
    title: "Recruitment Support",
    description:
      "Get support throughout the hiring process when you need help finding the right talent.",
  },
];

const hiringSteps = [
  {
    number: "01",
    title: "Tell us what you need",
    description:
      "Share the role, skills, experience, location, and other requirements for your open position.",
  },
  {
    number: "02",
    title: "We find relevant candidates",
    description:
      "Our recruitment process helps identify candidates who match the requirements of your role.",
  },
  {
    number: "03",
    title: "Review and connect",
    description:
      "Review suitable profiles and connect with candidates who meet your expectations.",
  },
  {
    number: "04",
    title: "Build your team",
    description:
      "Move forward with the candidates who are the right fit for your organization.",
  },
];

const services = [
  "Permanent recruitment",
  "Technology hiring",
  "Cloud and DevOps recruitment",
  "Business and operations hiring",
  "Specialized talent search",
  "Bulk hiring support",
];

const benefits = [
  "Access to a growing candidate network",
  "Recruitment support from experienced professionals",
  "Simple and transparent hiring process",
  "Candidate-focused screening",
  "Support across multiple industries",
  "Flexible hiring solutions for growing businesses",
];

function Employers() {
  return (
    <Box>
      {/* Hero */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(180deg, #FCFAF5 0%, #F7F1E6 100%)",
          py: { xs: 7, md: 10 },
        }}
      >
        {/* Decorative shapes */}
        <Box
          sx={{
            position: "absolute",
            width: 360,
            height: 360,
            borderRadius: "50%",
            backgroundColor: "primary.main",
            opacity: 0.06,
            top: -160,
            right: -100,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: 220,
            height: 220,
            borderRadius: "50%",
            backgroundColor: "primary.main",
            opacity: 0.05,
            bottom: -100,
            left: -70,
          }}
        />

        <Container maxWidth="lg">
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              maxWidth: 900,
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
              FOR EMPLOYERS
            </Typography>

            <Typography
              variant="h1"
              sx={{
                mt: 1.5,
                mb: 2.5,
                fontSize: {
                  xs: "2.4rem",
                  sm: "3.2rem",
                  md: "4.2rem",
                },
                lineHeight: 1.04,
              }}
            >
              Build your team with the right talent
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                maxWidth: 700,
                mx: "auto",
                fontSize: {
                  xs: "1rem",
                  md: "1.1rem",
                },
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              Find skilled professionals, simplify your hiring process, and
              build teams that help your business move forward.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
            >
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
              >
                Post a Job
              </Button>

              <Button
                component={Link}
                to="/contact"
                variant="outlined"
                size="large"
              >
                Talk to Our Team
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Stats */}
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "#FFFFFF",
          py: 4,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
            }}
          >
            {[
              ["2M+", "Active candidates"],
              ["50K+", "Companies hiring"],
              ["10 Days", "Average time to hire"],
              ["95%", "Employer satisfaction"],
            ].map(([value, label]) => (
              <Box
                key={label}
                sx={{
                  textAlign: "center",
                  px: 2,
                  py: { xs: 2, md: 1 },
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "1.6rem",
                      md: "2rem",
                    },
                    fontWeight: 800,
                  }}
                >
                  {value}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "0.82rem",
                    opacity: 0.85,
                  }}
                >
                  {label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Hiring Features */}
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 7, md: 10 },
        }}
      >
        <Box
          sx={{
            maxWidth: 720,
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
            WHY HIRE WITH US
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
            Everything you need to hire smarter
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              lineHeight: 1.8,
            }}
          >
            Our recruitment solutions are designed to reduce hiring
            complexity and help your team connect with relevant talent faster.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
            },
            gap: 3,
          }}
        >
          {hiringFeatures.map((feature) => (
            <Paper
              key={feature.title}
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 3,
                height: "100%",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 12px 30px rgba(30, 25, 20, 0.08)",
                },
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
                {feature.icon}
              </Box>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  mb: 1,
                }}
              >
                {feature.title}
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  fontSize: "0.9rem",
                  lineHeight: 1.75,
                }}
              >
                {feature.description}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>

      {/* How It Works */}
      <Box
        sx={{
          backgroundColor: "#F7F1E6",
          py: { xs: 7, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              maxWidth: 720,
              mb: 6,
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
              HOW IT WORKS
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
              A simpler way to hire
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ lineHeight: 1.8 }}
            >
              From defining your requirement to connecting with candidates,
              our process keeps your hiring journey focused.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: 3,
            }}
          >
            {hiringSteps.map((step) => (
              <Box key={step.number}>
                <Typography
                  sx={{
                    fontSize: "2.4rem",
                    fontWeight: 900,
                    color: "primary.main",
                    mb: 1,
                  }}
                >
                  {step.number}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    mb: 1,
                  }}
                >
                  {step.title}
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    fontSize: "0.88rem",
                    lineHeight: 1.75,
                  }}
                >
                  {step.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Services */}
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 7, md: 10 },
        }}
      >
        <Grid
          container
          spacing={{ xs: 5, md: 8 }}
          alignItems="center"
        >
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              variant="overline"
              sx={{
                color: "primary.main",
                fontWeight: 800,
                letterSpacing: "0.12em",
              }}
            >
              OUR SERVICES
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
              Hiring solutions for growing businesses
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                lineHeight: 1.8,
              }}
            >
              Whether you need one specialist or are building an entire team,
              our recruitment services can be adapted to your hiring needs.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 3,
              }}
            >
              <Stack spacing={2}>
                {services.map((service) => (
                  <Box
                    key={service}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      py: 1,
                    }}
                  >
                    <CheckCircleOutlineOutlinedIcon
                      sx={{
                        color: "primary.main",
                        flexShrink: 0,
                      }}
                    />

                    <Typography
                      sx={{
                        fontWeight: 600,
                      }}
                    >
                      {service}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Benefits */}
      <Box
        sx={{
          backgroundColor: "#F7F1E6",
          py: { xs: 7, md: 10 },
        }}
      >
        <Container maxWidth="lg">
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
                THE DIFFERENCE
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
                Built around your hiring goals
              </Typography>

              <Typography
                color="text.secondary"
                sx={{ lineHeight: 1.8 }}
              >
                We focus on creating a recruitment experience that works for
                your business, your hiring team, and the candidates you want
                to attract.
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
                      backgroundColor: "#FFFFFF",
                      border: "1px solid",
                      borderColor: "divider",
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
      </Box>

      {/* CTA */}
      <Box
        sx={{
          backgroundColor: "secondary.main",
          color: "#FFFFFF",
          py: { xs: 7, md: 9 },
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center" }}>
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
              Ready to hire great talent?
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
              Tell us about your hiring requirements and let's start building
              your team.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
            >
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                endIcon={<ArrowForwardIcon />}
              >
                Post a Job
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
                Contact Our Team
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Employers;