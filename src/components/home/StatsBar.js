import { Box, Container, Grid, Typography } from "@mui/material";

const stats = [
  {
    value: "2M+",
    label: "Active candidates",
  },
  {
    value: "50K+",
    label: "Companies hiring",
  },
  {
    value: "10 days",
    label: "Average time to hire",
  },
  {
    value: "95%",
    label: "Employer satisfaction",
  },
];

function StatsBar() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#EE8B13",
        color: "#FFFFFF",
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          {stats.map((stat) => (
            <Grid
              item
              xs={6}
              md={3}
              key={stat.label}
            >
              <Box
                sx={{
                  textAlign: "center",
                  py: {
                    xs: 2.8,
                    md: 3.3,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: 24,
                      md: 28,
                    },
                    lineHeight: 1,
                    fontWeight: 800,
                    letterSpacing: "-0.025em",
                    mb: 0.65,
                  }}
                >
                  {stat.value}
                </Typography>

                <Typography
                  sx={{
                    fontSize: 9.5,
                    lineHeight: 1.4,
                    opacity: 0.95,
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default StatsBar;