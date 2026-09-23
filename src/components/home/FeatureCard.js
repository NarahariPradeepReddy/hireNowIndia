import { Box, Typography } from "@mui/material";

function FeatureCard({ icon, title, description }) {
  return (
    <Box
      sx={{
        height: "100%",
        minHeight: 185,
        border: "1px solid #E1D5C2",
        borderRadius: "10px",
        backgroundColor: "#FCFAF5",
        p: {
          xs: 2.5,
          md: 2.75,
        },

        display: "flex",
        flexDirection: "column",

        transition:
          "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",

        "&:hover": {
          transform: "translateY(-3px)",
          borderColor: "#D6C5AA",
          boxShadow: "0 10px 25px rgba(61, 45, 25, 0.06)",
        },
      }}
    >
      {/* Icon */}
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: "9px",
          backgroundColor: "#FFF0DC",
          color: "#E88912",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          mb: 2,

          fontSize: 18,
          fontWeight: 700,
        }}
      >
        {icon}
      </Box>

      {/* Title */}
      <Typography
        component="h3"
        sx={{
          color: "#24211E",
          fontSize: {
            xs: 14,
            md: 15,
          },
          fontWeight: 700,
          lineHeight: 1.4,
          mb: 1,
        }}
      >
        {title}
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          color: "#756F67",
          fontSize: {
            xs: 12,
            md: 13,
          },
          lineHeight: 1.65,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

export default FeatureCard;