import {
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

function EmployerCTA() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#191816",
        color: "#FFFFFF",
        py: {
          xs: 7,
          md: 9,
        },
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 680,
            mx: "auto",
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontSize: {
                xs: 28,
                sm: 34,
                md: 40,
              },
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              mb: 2,
            }}
          >
            Ready to build your dream team?
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.62)",
              fontSize: {
                xs: 13,
                md: 14,
              },
              lineHeight: 1.75,
              maxWidth: 520,
              mx: "auto",
              mb: 3.5,
            }}
          >
            Start hiring smarter today. Post your first job and connect with
            qualified candidates across India.
          </Typography>

          <Button
            component={Link}
            to="/employers"
            variant="contained"
            endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
            sx={{
              backgroundColor: "#EE8B13",
              color: "#FFFFFF",
              minHeight: 44,
              px: 2.5,
              fontSize: 12,

              "&:hover": {
                backgroundColor: "#D97706",
              },
            }}
          >
            Start hiring today
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default EmployerCTA;