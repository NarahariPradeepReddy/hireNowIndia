import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import jobs from "../../data/jobs";

function JobDetails() {
  const { jobId } = useParams();

  const job = useMemo(
    () => jobs.find((item) => item.id === jobId),
    [jobId]
  );

  if (!job) {
    return (
      <Box
        sx={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Job not found
          </Typography>

          <Typography color="text.secondary" sx={{ mb: 3 }}>
            The job you are looking for may have been removed or is no longer
            available.
          </Typography>

          <Button
            component={Link}
            to="/jobs"
            variant="contained"
            startIcon={<ArrowBackIcon />}
          >
            Back to Jobs
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Box>
      {/* Hero */}
      <Box
        sx={{
          background:
            "linear-gradient(180deg, #FCFAF5 0%, #F7F1E6 100%)",
          py: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Button
            component={Link}
            to="/jobs"
            startIcon={<ArrowBackIcon />}
            sx={{
              mb: 4,
              color: "text.secondary",
              px: 0,
              "&:hover": {
                backgroundColor: "transparent",
                color: "primary.main",
              },
            }}
          >
            Back to Jobs
          </Button>

          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }}>
              <Chip
                label={job.category}
                sx={{
                  mb: 2,
                  backgroundColor: "#FFF0D9",
                  color: "primary.dark",
                  fontWeight: 700,
                }}
              />

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2rem", sm: "2.6rem", md: "3.4rem" },
                  lineHeight: 1.08,
                  mb: 2,
                }}
              >
                {job.title}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "text.secondary",
                  fontWeight: 500,
                  mb: 3,
                }}
              >
                {job.company}
              </Typography>

              <Stack
                direction="row"
                spacing={2}
                flexWrap="wrap"
                useFlexGap
              >
                <Stack direction="row" spacing={0.7} alignItems="center">
                  <LocationOnOutlinedIcon
                    fontSize="small"
                    color="action"
                  />
                  <Typography variant="body2">
                    {job.location}
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={0.7} alignItems="center">
                  <WorkOutlineOutlinedIcon
                    fontSize="small"
                    color="action"
                  />
                  <Typography variant="body2">
                    {job.type}
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={0.7} alignItems="center">
                  <BusinessCenterOutlinedIcon
                    fontSize="small"
                    color="action"
                  />
                  <Typography variant="body2">
                    {job.experience}
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={0.7} alignItems="center">
                  <AccessTimeOutlinedIcon
                    fontSize="small"
                    color="action"
                  />
                  <Typography variant="body2">
                    Posted {job.posted}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 3,
                  backgroundColor: "#FFFFFF",
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  Salary
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                  }}
                >
                  {job.salary}
                </Typography>

                <Button
                  component={Link}
                  to={`/apply/${job.id}`}
                  variant="contained"
                  fullWidth
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                >
                  Apply Now
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Main Content */}
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 6, md: 8 },
        }}
      >
        <Grid container spacing={5}>
          {/* Left */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Job Description
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                lineHeight: 1.8,
                mb: 5,
              }}
            >
              {job.description}
            </Typography>

            <Typography variant="h4" sx={{ mb: 2 }}>
              Responsibilities
            </Typography>

            <Box component="ul" sx={{ pl: 3, mb: 5 }}>
              {job.responsibilities?.map((item, index) => (
                <Box component="li" key={index} sx={{ mb: 1.5 }}>
                  <Typography
                    color="text.secondary"
                    sx={{ lineHeight: 1.7 }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Typography variant="h4" sx={{ mb: 2 }}>
              Requirements
            </Typography>

            <Box component="ul" sx={{ pl: 3, mb: 5 }}>
              {job.requirements?.map((item, index) => (
                <Box component="li" key={index} sx={{ mb: 1.5 }}>
                  <Typography
                    color="text.secondary"
                    sx={{ lineHeight: 1.7 }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Typography variant="h4" sx={{ mb: 2 }}>
              Skills
            </Typography>

            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {job.skills?.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  variant="outlined"
                  sx={{
                    borderColor: "divider",
                    mb: 1,
                  }}
                />
              ))}
            </Stack>
          </Grid>

          {/* Right */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 3,
                position: { md: "sticky" },
                top: { md: 100 },
              }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}>
                Job Overview
              </Typography>

              <Stack spacing={2.5}>
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    Location
                  </Typography>
                  <Typography sx={{ fontWeight: 600 }}>
                    {job.location}
                  </Typography>
                </Box>

                <Divider />

                <Box>
                  <Typography variant="caption" color="text.secondary">
                    Job Type
                  </Typography>
                  <Typography sx={{ fontWeight: 600 }}>
                    {job.type}
                  </Typography>
                </Box>

                <Divider />

                <Box>
                  <Typography variant="caption" color="text.secondary">
                    Experience
                  </Typography>
                  <Typography sx={{ fontWeight: 600 }}>
                    {job.experience}
                  </Typography>
                </Box>

                <Divider />

                <Box>
                  <Typography variant="caption" color="text.secondary">
                    Category
                  </Typography>
                  <Typography sx={{ fontWeight: 600 }}>
                    {job.category}
                  </Typography>
                </Box>

                <Divider />

                <Box>
                  <Typography variant="caption" color="text.secondary">
                    Salary
                  </Typography>
                  <Typography sx={{ fontWeight: 600 }}>
                    {job.salary}
                  </Typography>
                </Box>
              </Stack>

              <Button
                component={Link}
                to={`/apply/${job.id}`}
                variant="contained"
                fullWidth
                size="large"
                sx={{ mt: 4 }}
              >
                Apply for this job
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default JobDetails;