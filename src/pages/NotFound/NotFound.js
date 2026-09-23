import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function NotFound() {
  return (
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FCFAF5",
        px: 2,
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: {
                xs: "5rem",
                md: "8rem",
              },
              lineHeight: 1,
              fontWeight: 900,
              color: "primary.main",
              mb: 2,
            }}
          >
            404
          </Typography>
          <Typography
            variant="h3"
            sx={{
              mb: 2,
              fontSize: {
                xs: "1.8rem",
                md: "2.5rem",
              },
            }}
          >
            Page not found
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            The page you're looking for doesn't exist or may have been moved.
          </Typography>

          <Button
            component={Link}
            to="/"
            variant="contained"
            startIcon={<ArrowBackIcon />}
          >
            Back to Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default NotFound;
