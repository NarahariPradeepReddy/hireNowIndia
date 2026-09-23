import {
  Box,
  Button,
  Container,
  Divider,
  Typography,
} from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    description: "For small teams making their first hires.",
    price: "₹2,999",
    period: "/ month",
    features: [
      "Up to 3 active job postings",
      "Candidate applications",
      "Basic applicant tracking",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    description: "For growing companies hiring regularly.",
    price: "₹7,999",
    period: "/ month",
    features: [
      "Up to 10 active job postings",
      "Advanced candidate matching",
      "Applicant tracking",
      "Candidate profile verification",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For organizations with larger hiring needs.",
    price: "Custom",
    period: "",
    features: [
      "Unlimited job postings",
      "Dedicated recruitment support",
      "Advanced hiring workflows",
      "Custom candidate sourcing",
      "Priority account management",
    ],
    highlighted: false,
  },
];

function PricingCard({ plan }) {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        border: "1px solid",
        borderColor: plan.highlighted ? "#EE8B13" : "#E1D5C2",
        borderRadius: "12px",
        backgroundColor: plan.highlighted ? "#FFFFFF" : "#FCFAF5",
        p: {
          xs: 2.75,
          md: 3,
        },

        display: "flex",
        flexDirection: "column",

        boxShadow: plan.highlighted
          ? "0 12px 35px rgba(238, 139, 19, 0.10)"
          : "none",

        transform: {
          md: plan.highlighted ? "translateY(-6px)" : "none",
        },

        transition:
          "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",

        "&:hover": {
          transform: {
            md: plan.highlighted
              ? "translateY(-9px)"
              : "translateY(-3px)",
          },

          boxShadow: "0 14px 35px rgba(61, 45, 25, 0.08)",
        },
      }}
    >
      {/* Popular badge */}
      {plan.highlighted && (
        <Box
          sx={{
            position: "absolute",
            top: 18,
            right: 18,
            backgroundColor: "#FFF0DC",
            color: "#D97706",
            borderRadius: "20px",
            px: 1.2,
            py: 0.5,
            fontSize: 10,
            fontWeight: 700,
          }}
        >
          Most popular
        </Box>
      )}

      {/* Plan name */}
      <Typography
        sx={{
          fontSize: 16,
          fontWeight: 750,
          color: "#211F1C",
          mb: 0.75,
        }}
      >
        {plan.name}
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          fontSize: 12.5,
          lineHeight: 1.6,
          color: "#756F67",
          minHeight: 40,
          pr: plan.highlighted ? 2 : 0,
        }}
      >
        {plan.description}
      </Typography>

      {/* Price */}
      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          mt: 3,
          mb: 2.5,
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: 28,
              md: 32,
            },
            fontWeight: 800,
            letterSpacing: "-0.035em",
            color: "#171614",
          }}
        >
          {plan.price}
        </Typography>

        {plan.period && (
          <Typography
            sx={{
              ml: 0.5,
              fontSize: 12,
              color: "#756F67",
            }}
          >
            {plan.period}
          </Typography>
        )}
      </Box>

      <Divider sx={{ borderColor: "#E8DFD1", mb: 2.5 }} />

      {/* Features */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1.35,
          flex: 1,
        }}
      >
        {plan.features.map((feature) => (
          <Box
            key={feature}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 1,
            }}
          >
            <Box
              sx={{
                width: 18,
                height: 18,
                minWidth: 18,
                borderRadius: "50%",
                backgroundColor: "#FFF0DC",
                color: "#E88912",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: "1px",
              }}
            >
              <CheckIcon sx={{ fontSize: 12 }} />
            </Box>

            <Typography
              sx={{
                fontSize: 12.5,
                lineHeight: 1.5,
                color: "#514C46",
              }}
            >
              {feature}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* CTA */}
      <Button
        component={Link}
        to="/contact"
        variant={plan.highlighted ? "contained" : "outlined"}
        endIcon={<ArrowForwardIcon sx={{ fontSize: 15 }} />}
        sx={{
          mt: 3.5,
          minHeight: 42,
          fontSize: 12,

          ...(plan.highlighted
            ? {
                backgroundColor: "#EE8B13",
                "&:hover": {
                  backgroundColor: "#D97706",
                },
              }
            : {
                borderColor: "#DCCFB9",
                color: "#393530",
                "&:hover": {
                  borderColor: "#C9B99F",
                  backgroundColor: "#FFFDF9",
                },
              }),
        }}
      >
        {plan.name === "Enterprise" ? "Talk to our team" : "Get started"}
      </Button>
    </Box>
  );
}

function PricingSection() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#F5EFE4",
        py: {
          xs: 8,
          md: 10,
        },
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 620,
            mx: "auto",
            mb: {
              xs: 5,
              md: 6,
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
            Simple, transparent pricing
          </Typography>

          <Typography
            sx={{
              color: "#756F67",
              fontSize: {
                xs: 13,
                md: 14,
              },
              lineHeight: 1.7,
            }}
          >
            Choose a plan that fits your hiring needs. Upgrade or change your
            plan whenever your team grows.
          </Typography>
        </Box>

        {/* Pricing cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3, 1fr)",
            },
            gap: {
              xs: 2,
              md: 2.25,
            },
            alignItems: "stretch",
          }}
        >
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              plan={plan}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default PricingSection;