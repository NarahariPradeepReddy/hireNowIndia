import { useMemo } from "react";
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
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";

import { Link, useNavigate, useParams } from "react-router-dom";
import { getJobById } from "../../services/jobService";

function JobDetails() {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const job = useMemo(() => getJobById(jobId), [jobId]);

  if (!job) {
    return (
      <Box
        sx={{
          py: { xs: 7, md: 10 },
        }}
      >
        <Container maxWidth="md">
          <Paper
            elevation={0}
            sx={{
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
              p: { xs: 4, md: 6 },
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                mb: 1.5,
                fontWeight: 750,
              }}
            >
              Job Not Found
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                mb: 3,
                lineHeight: 1.7,
              }}
            >
              The job you are looking for may have been removed or is no longer
              available.
            </Typography>

            <Button
              component={Link}
              to="/jobs"
              variant="contained"
              startIcon={<ArrowBackOutlinedIcon />}
            >
              Back to Jobs
            </Button>
          </Paper>
        </Container>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        py: { xs: 3, md: 5 },
      }}
    >
      <Container maxWidth="lg">
        {/* Back to Jobs */}
        <Button
          onClick={() => navigate("/jobs")}
          startIcon={<ArrowBackOutlinedIcon />}
          sx={{
            mb: 3,
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

        {/* Job Header */}
        <Paper
          elevation={0}
          sx={{
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 2,
            p: {
              xs: 3,
              md: 4,
            },
            mb: 3,
            backgroundColor: "background.paper",
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid
              size={{
                xs: 12,
                md: 8,
              }}
            >
              <Box>
                <Chip
                  label={job.type}
                  size="small"
                  sx={{
                    mb: 1.5,
                    backgroundColor: "rgba(242, 140, 24, 0.10)",
                    color: "primary.dark",
                    fontWeight: 700,
                    borderRadius: 1,
                  }}
                />

                <Typography
                  variant="h3"
                  sx={{
                    fontSize: {
                      xs: "2rem",
                      md: "2.75rem",
                    },
                    lineHeight: 1.15,
                    fontWeight: 800,
                    mb: 1,
                  }}
                >
                  {job.title}
                </Typography>

                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{
                    fontSize: {
                      xs: "1rem",
                      md: "1.1rem",
                    },
                    fontWeight: 500,
                    mb: 2.5,
                  }}
                >
                  {job.company}
                </Typography>

                <Stack direction="row" spacing={2.5} useFlexGap flexWrap="wrap">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.7,
                    }}
                  >
                    <LocationOnOutlinedIcon
                      sx={{
                        fontSize: 18,
                        color: "primary.main",
                      }}
                    />

                    <Typography variant="body2">{job.location}</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.7,
                    }}
                  >
                    <WorkOutlineOutlinedIcon
                      sx={{
                        fontSize: 18,
                        color: "primary.main",
                      }}
                    />

                    <Typography variant="body2">{job.experience}</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.7,
                    }}
                  >
                    <AccessTimeOutlinedIcon
                      sx={{
                        fontSize: 18,
                        color: "primary.main",
                      }}
                    />

                    <Typography variant="body2">
                      Posted {job.postedDate}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>

            <Grid
              size={{
                xs: 12,
                md: 4,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: {
                    xs: "flex-start",
                    md: "flex-end",
                  },
                }}
              >
                <Button
                  component={Link}
                  to={`/apply/${job.id}`}
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardOutlinedIcon />}
                  sx={{
                    minWidth: 165,
                  }}
                >
                  Apply Now
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Main Content */}
        <Grid container spacing={3} alignItems="flex-start">
          {/* Main Job Information */}
          <Grid
            size={{
              xs: 12,
              md: 8,
            }}
          >
            <Stack spacing={3}>
              {/* Description */}
              <Paper
                elevation={0}
                sx={{
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 2,
                  p: {
                    xs: 3,
                    md: 4,
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 750,
                    mb: 2,
                  }}
                >
                  Job Description
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.8,
                  }}
                >
                  {job.description}
                </Typography>
              </Paper>

              {/* Responsibilities */}
              <Paper
                elevation={0}
                sx={{
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 2,
                  p: {
                    xs: 3,
                    md: 4,
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 750,
                    mb: 2.5,
                  }}
                >
                  Responsibilities
                </Typography>

                <Box
                  component="ul"
                  sx={{
                    m: 0,
                    pl: 2.5,
                    color: "text.secondary",
                  }}
                >
                  {job.responsibilities.map((responsibility, index) => (
                    <Box
                      component="li"
                      key={index}
                      sx={{
                        mb: index === job.responsibilities.length - 1 ? 0 : 1.5,
                        pl: 0.5,
                        lineHeight: 1.7,
                      }}
                    >
                      {responsibility}
                    </Box>
                  ))}
                </Box>
              </Paper>

              {/* Requirements */}
              <Paper
                elevation={0}
                sx={{
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 2,
                  p: {
                    xs: 3,
                    md: 4,
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 750,
                    mb: 2.5,
                  }}
                >
                  Requirements
                </Typography>

                <Box
                  component="ul"
                  sx={{
                    m: 0,
                    pl: 2.5,
                    color: "text.secondary",
                  }}
                >
                  {job.requirements.map((requirement, index) => (
                    <Box
                      component="li"
                      key={index}
                      sx={{
                        mb: index === job.requirements.length - 1 ? 0 : 1.5,
                        pl: 0.5,
                        lineHeight: 1.7,
                      }}
                    >
                      {requirement}
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Stack>
          </Grid>

          {/* Sidebar */}
          <Grid
            size={{
              xs: 12,
              md: 4,
            }}
          >
            <Stack spacing={3}>
              {/* Job Overview */}
              <Paper
                elevation={0}
                sx={{
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 2,
                  p: 3,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 750,
                    mb: 2.5,
                  }}
                >
                  Job Overview
                </Typography>

                <Stack spacing={2.2} divider={<Divider flexItem />}>
                  <Box>
                    <Typography variant="caption" color="text.secondary">
                      Job Type
                    </Typography>

                    <Typography
                      sx={{
                        mt: 0.5,
                        fontWeight: 600,
                      }}
                    >
                      {job.type}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="caption" color="text.secondary">
                      Experience
                    </Typography>

                    <Typography
                      sx={{
                        mt: 0.5,
                        fontWeight: 600,
                      }}
                    >
                      {job.experience}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="caption" color="text.secondary">
                      Location
                    </Typography>

                    <Typography
                      sx={{
                        mt: 0.5,
                        fontWeight: 600,
                      }}
                    >
                      {job.location}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="caption" color="text.secondary">
                      Category
                    </Typography>

                    <Typography
                      sx={{
                        mt: 0.5,
                        fontWeight: 600,
                      }}
                    >
                      {job.category}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="caption" color="text.secondary">
                      Salary
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.7,
                        mt: 0.5,
                      }}
                    >
                      <PaymentsOutlinedIcon
                        sx={{
                          fontSize: 18,
                          color: "primary.main",
                        }}
                      />

                      <Typography
                        sx={{
                          fontWeight: 700,
                        }}
                      >
                        {job.salary}
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Paper>

              {/* Skills */}
              <Paper
                elevation={0}
                sx={{
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 2,
                  p: 3,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 750,
                    mb: 2,
                  }}
                >
                  Required Skills
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 0.8,
                    width: "100%",
                    minWidth: 0,
                  }}
                >
                  {job.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      size="small"
                      variant="outlined"
                      sx={{
                        borderColor: "divider",
                        color: "text.secondary",
                        maxWidth: "100%",
                        flexShrink: 0,
                      }}
                    />
                  ))}
                </Box>
              </Paper>

              {/* Apply Card */}
              <Paper
                elevation={0}
                sx={{
                  border: "1px solid",
                  borderColor: "primary.main",
                  borderRadius: 2,
                  p: 3,
                  backgroundColor: "rgba(242, 140, 24, 0.04)",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 750,
                    mb: 1,
                  }}
                >
                  Interested in this role?
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.7,
                    mb: 2.5,
                  }}
                >
                  Submit your application and take the next step in your career.
                </Typography>

                <Button
                  component={Link}
                  to={`/apply/${job.id}`}
                  variant="contained"
                  fullWidth
                  endIcon={<ArrowForwardOutlinedIcon />}
                >
                  Apply for this Job
                </Button>
              </Paper>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default JobDetails;
