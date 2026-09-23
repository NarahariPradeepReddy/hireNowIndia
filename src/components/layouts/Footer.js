import {
  Box,
  Container,
  Divider,
  Grid,
  Link as MuiLink,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";
import siteConfig from "../../config/siteConfig";

const footerColumns = [
  {
    title: "For Job Seekers",
    links: [
      ["Find Jobs", "/jobs"],
      ["Job Categories", "/jobs"],
      ["Career Tips", "/jobs"],
      ["Resume Guide", "/jobs"],
    ],
  },
  {
    title: "For Employers",
    links: [
      ["Post a Job", "/employers"],
      ["Find Candidates", "/employers"],
      ["Pricing", "/employers"],
      ["Employer FAQ", "/employers"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Us", "/about"],
      ["Contact", "/contact"],
      ["Privacy Policy", "/privacy"],
      ["Terms of Service", "/terms"],
    ],
  },
];

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#191919",
        color: "#FFFFFF",
        mt: 8,
      }}
    >
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              component={Link}
              to="/"
              sx={{
                display: "inline-block",
                fontSize: 18,
                fontWeight: 800,
                color: "#FFFFFF",
                mb: 2,
              }}
            >
              {siteConfig.company.name}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "rgba(255,255,255,0.62)",
                maxWidth: 320,
                lineHeight: 1.8,
              }}
            >
              India's trusted recruitment platform connecting ambitious
              candidates with the right opportunities.
            </Typography>
          </Grid>

          {footerColumns.map((column) => (
            <Grid size={{ xs: 6, md: 2.66 }} key={column.title}>
              <Typography
                sx={{
                  fontSize: 13,
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                {column.title}
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {column.links.map(([label, path]) => (
                  <MuiLink
                    key={label}
                    component={Link}
                    to={path}
                    underline="none"
                    sx={{
                      color: "rgba(255,255,255,0.58)",
                      fontSize: 12,
                      "&:hover": {
                        color: "#F28C18",
                      },
                    }}
                  >
                    {label}
                  </MuiLink>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider
          sx={{
            borderColor: "rgba(255,255,255,0.12)",
            my: 4,
          }}
        />

        <Typography
          sx={{
            fontSize: 11,
            color: "rgba(255,255,255,0.45)",
          }}
        >
          © 2026 Hire Now India. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;