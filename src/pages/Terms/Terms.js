import { Box, Container, Typography } from "@mui/material";
import siteConfig from "../../config/siteConfig";

function Terms() {
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
          Terms of Service
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ lineHeight: 1.8, mb: 4 }}
        >
          These terms describe the general conditions for using the{" "}
          {siteConfig.company.name} website and recruitment platform.
        </Typography>

        <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 700 }}>
          Using the Platform
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ lineHeight: 1.8, mb: 4 }}
        >
          Users are expected to provide accurate information and use the
          platform for legitimate recruitment and employment-related purposes.
        </Typography>

        <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 700 }}>
          Job Applications
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ lineHeight: 1.8, mb: 4 }}
        >
          Submitting an application does not guarantee employment. Recruitment
          decisions remain subject to the relevant employer's hiring process
          and requirements.
        </Typography>

        <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 700 }}>
          Employer Services
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ lineHeight: 1.8, mb: 4 }}
        >
          Employers using recruitment services are responsible for providing
          accurate job information and complying with applicable employment
          and data-protection requirements.
        </Typography>

        <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 700 }}>
          Changes to These Terms
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ lineHeight: 1.8, mb: 4 }}
        >
          These terms may be updated as the platform, services, and business
          requirements evolve.
        </Typography>

        <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 700 }}>
          Contact
        </Typography>

        <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
          For questions regarding these terms, contact us at{" "}
          {siteConfig.contact.email}.
        </Typography>
      </Container>
    </Box>
  );
}

export default Terms;