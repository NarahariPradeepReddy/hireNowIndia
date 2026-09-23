import { Box, Container, Typography } from "@mui/material";
import siteConfig from "../../config/siteConfig";

function Privacy() {
  return (
    <Box sx={{ py: { xs: 7, md: 10 } }}>
      <Container maxWidth="md">
        <Typography
          variant="overline"
          sx={{
            color: "primary.main",
            fontWeight: 800,
            letterSpacing: "0.12em",
          }}
        >
          LEGAL
        </Typography>

        <Typography
          variant="h2"
          sx={{
            mt: 1,
            mb: 3,
            fontWeight: 800,
          }}
        >
          Privacy Policy
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ lineHeight: 1.8, mb: 4 }}
        >
          This page explains how {siteConfig.company.name} may collect, use,
          store, and protect information provided by candidates, employers,
          and visitors to this website.
        </Typography>

        <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 700 }}>
          Information We Collect
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ lineHeight: 1.8, mb: 4 }}
        >
          Depending on how you use the platform, information may include your
          name, contact details, professional experience, resume, job
          application information, and other information that you voluntarily
          submit through the website.
        </Typography>

        <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 700 }}>
          How We Use Information
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ lineHeight: 1.8, mb: 4 }}
        >
          Information may be used to provide recruitment services, process job
          applications, communicate with users, improve the platform, and
          support employers and candidates.
        </Typography>

        <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 700 }}>
          Data Protection
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ lineHeight: 1.8, mb: 4 }}
        >
          We intend to take reasonable measures to protect information
          submitted through the platform. Detailed data retention, security,
          sharing, and user-rights policies will be finalized before the
          platform is launched for production use.
        </Typography>

        <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 700 }}>
          Contact
        </Typography>

        <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
          For privacy-related questions, contact us at{" "}
          {siteConfig.contact.email}.
        </Typography>
      </Container>
    </Box>
  );
}

export default Privacy;