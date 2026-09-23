import {
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

function EmployerHero() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#FBF8F1",
        borderBottom: "1px solid #EEE5D7",
      }}
    >
      {/* Decorative background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {/* Large soft shape */}
        <Box
          sx={{
            position: "absolute",
            width: { xs: 420, md: 760 },
            height: { xs: 420, md: 760 },
            right: { xs: -220, md: -150 },
            top: { xs: -60, md: -180 },
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(238,225,203,0.55) 0%, rgba(251,248,241,0) 68%)",
          }}
        />

        {/* Secondary shape */}
        <Box
          sx={{
            position: "absolute",
            width: 420,
            height: 420,
            right: "15%",
            bottom: -300,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(241,228,208,0.35) 0%, rgba(251,248,241,0) 70%)",
          }}
        />

        {/* Very subtle diagonal line */}
        <Box
          sx={{
            position: "absolute",
            width: "80%",
            height: 1,
            right: -100,
            top: "48%",
            background:
              "linear-gradient(90deg, transparent, rgba(220,205,181,0.25), transparent)",
            transform: "rotate(-18deg)",
          }}
        />
      </Box>

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            minHeight: { xs: 460, md: 505 },
            display: "flex",
            alignItems: "center",
            py: { xs: 8, md: 10 },
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: 620,
            }}
          >
            {/* Eyebrow */}
            <Typography
              component="div"
              sx={{
                color: "#E98210",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.02em",
                mb: 1.5,
              }}
            >
              For employers
            </Typography>

            {/* Main heading */}
            <Typography
              component="h1"
              sx={{
                color: "#11100F",
                fontSize: {
                  xs: "2.65rem",
                  sm: "3.25rem",
                  md: "3.65rem",
                },
                lineHeight: 1.02,
                letterSpacing: "-0.045em",
                fontWeight: 800,
                maxWidth: 560,
                mb: 2.5,
              }}
            >
              Hire India's best talent,
              <br />
              faster
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                color: "#716B63",
                fontSize: {
                  xs: 13,
                  md: 14,
                },
                lineHeight: 1.75,
                maxWidth: 540,
                mb: 3.25,
              }}
            >
              Post jobs, reach millions of qualified candidates, and build
              your dream team with Hire Now India's powerful recruitment
              platform.
            </Typography>

            {/* Actions */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 1.25,
              }}
            >
              <Button
                component={Link}
                to="/employers"
                variant="contained"
                endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                sx={{
                  minHeight: 42,
                  px: 2,
                  backgroundColor: "#EE8B13",
                  color: "#FFFFFF",
                  fontSize: 12,
                  "&:hover": {
                    backgroundColor: "#D97706",
                  },
                }}
              >
                Post a job today
              </Button>

              <Button
                component={Link}
                to="/contact"
                variant="outlined"
                sx={{
                  minHeight: 42,
                  px: 2.1,
                  borderColor: "#DCCFB9",
                  color: "#393530",
                  fontSize: 12,
                  backgroundColor: "rgba(255,255,255,0.35)",
                  "&:hover": {
                    borderColor: "#C9B99F",
                    backgroundColor: "#FFFFFF",
                  },
                }}
              >
                Talk to our team
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default EmployerHero;