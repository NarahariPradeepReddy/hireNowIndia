import { Box, Container, Typography } from "@mui/material";

import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "⌁",
    title: "Smart candidate matching",
    description:
      "Our AI-powered engine surfaces the most relevant candidates for your role — saving your team hours of manual screening.",
  },
  {
    icon: "♙",
    title: "Reach across India",
    description:
      "Tap into a network of professionals across Bangalore, Mumbai, Delhi, Hyderabad, Chennai, and every major city.",
  },
  {
    icon: "▤",
    title: "Branded job listings",
    description:
      "Showcase your company culture with rich media job posts that attract top talent and reduce drop-off.",
  },
  {
    icon: "▣",
    title: "Applicant tracking",
    description:
      "Manage applications, schedule interviews, and collaborate with your hiring team — all in one dashboard.",
  },
  {
    icon: "◎",
    title: "Verified candidate profiles",
    description:
      "Every candidate profile is verified for authenticity, so you can spend more time on conversations, not chasing ghosts.",
  },
  {
    icon: "♧",
    title: "Dedicated account support",
    description:
      "A dedicated recruitment consultant is assigned to every account to help you hire faster and more confidently.",
  },
];

function HiringFeatures() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#FCFAF5",
        py: {
          xs: 7,
          md: 9,
        },
      }}
    >
      <Container maxWidth="lg">
        {/* Section heading */}
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 600,
            mx: "auto",
            mb: {
              xs: 4.5,
              md: 5.5,
            },
          }}
        >
          <Typography
            component="h2"
            sx={{
              color: "#171614",
              fontSize: {
                xs: 28,
                sm: 31,
                md: 34,
              },
              fontWeight: 750,
              letterSpacing: "-0.035em",
              lineHeight: 1.2,
              mb: 1.25,
            }}
          >
            Everything you need to hire smarter
          </Typography>

          <Typography
            sx={{
              color: "#777067",
              fontSize: {
              xs: 13,
              md: 14
              },
              lineHeight: 1.7,
              maxWidth: 500,
              mx: "auto",
            }}
          >
            From posting your first job to building a full talent pipeline —
            we've got you covered.
          </Typography>
        </Box>

        {/* Feature grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: {
              xs: 1.5,
              md: 1.75,
            },
          }}
        >
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default HiringFeatures;