import { useMemo, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

import { Link, useParams } from "react-router-dom";
import { getJobById } from "../../services/jobService";

function Apply() {
  const { jobId } = useParams();

  const job = useMemo(
    () => getJobById(jobId),
    [jobId]
  );

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    currentCompany: "",
    noticePeriod: "",
    coverLetter: "",
  });

  const [resume, setResume] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
  const { name, value } = event.target;

  if (name === "phone") {
    const numericValue = value.replace(/\D/g, "").slice(0, 10);

    setFormData((previous) => ({
      ...previous,
      [name]: numericValue,
    }));
  } else {
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  setErrors((previous) => ({
    ...previous,
    [name]: "",
  }));
};

  const handleResumeChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      setResume(null);

      setErrors((previous) => ({
        ...previous,
        resume:
          "Please upload a PDF, DOC, or DOCX file.",
      }));

      return;
    }

    setResume(file);

    setErrors((previous) => ({
      ...previous,
      resume: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
  newErrors.phone = "Phone number is required.";
} else if (!/^\d{10}$/.test(formData.phone)) {
  newErrors.phone =
    "Please enter a valid 10-digit phone number.";
}

    if (!formData.location.trim()) {
      newErrors.location = "Current location is required.";
    }

    if (!formData.experience.trim()) {
      newErrors.experience =
        "Experience is required.";
    }

    if (!formData.noticePeriod.trim()) {
      newErrors.noticePeriod =
        "Notice period is required.";
    }

    if (!resume) {
      newErrors.resume =
        "Please upload your resume.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    /*
      Phase 1:
      Application submission is frontend-only.

      Later this will become:

      POST /api/applications
    */

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 700);
  };

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
              The job you are trying to apply for is no
              longer available.
            </Typography>

            <Button
              component={Link}
              to="/jobs"
              variant="contained"
              startIcon={<ArrowBackOutlinedIcon />}
            >
              Browse Jobs
            </Button>
          </Paper>
        </Container>
      </Box>
    );
  }

  if (submitted) {
    return (
      <Box
        sx={{
          py: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="md">
          <Paper
            elevation={0}
            sx={{
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
              p: { xs: 4, md: 7 },
              textAlign: "center",
              backgroundColor: "background.paper",
            }}
          >
            <Box
              sx={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                backgroundColor:
                  "rgba(242, 140, 24, 0.10)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 2.5,
              }}
            >
              <CheckCircleOutlineOutlinedIcon
                sx={{
                  fontSize: 42,
                  color: "primary.main",
                }}
              />
            </Box>

            <Typography
              variant="h4"
              sx={{
                mb: 1,
                fontWeight: 800,
              }}
            >
              Application Submitted
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.7,
                mb: 1,
              }}
            >
              Thank you for applying for the{" "}
              <strong>{job.title}</strong> position at{" "}
              <strong>{job.company}</strong>.
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mb: 4,
              }}
            >
              Your application has been recorded
              successfully.
            </Typography>

            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={1.5}
              justifyContent="center"
            >
              <Button
                component={Link}
                to={`/jobs/${job.id}`}
                variant="outlined"
                startIcon={<ArrowBackOutlinedIcon />}
              >
                Back to Job
              </Button>

              <Button
                component={Link}
                to="/jobs"
                variant="contained"
                endIcon={<ArrowForwardOutlinedIcon />}
              >
                Browse More Jobs
              </Button>
            </Stack>
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
      <Container maxWidth="md">
        {/* Back */}
        <Button
          component={Link}
          to={`/jobs/${job.id}`}
          startIcon={<ArrowBackOutlinedIcon />}
          sx={{
            mb: 3,
            px: 0,
            color: "text.secondary",

            "&:hover": {
              backgroundColor: "transparent",
              color: "primary.main",
            },
          }}
        >
          Back to Job
        </Button>

        {/* Header */}
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: {
                xs: "2rem",
                md: "2.7rem",
              },
              fontWeight: 800,
              lineHeight: 1.2,
              mb: 1,
            }}
          >
            Apply for this Job
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              lineHeight: 1.7,
            }}
          >
            Applying for{" "}
            <strong>{job.title}</strong> at{" "}
            <strong>{job.company}</strong>
          </Typography>
        </Box>

        {/* Application Form */}
        <Paper
          component="form"
          onSubmit={handleSubmit}
          elevation={0}
          sx={{
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          {/* Job Summary */}
          <Box
            sx={{
              p: { xs: 3, md: 4 },
              backgroundColor:
                "rgba(242, 140, 24, 0.04)",
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 0.5 }}
            >
              Applying for
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 750,
              }}
            >
              {job.title}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              {job.company} · {job.location}
            </Typography>
          </Box>

          <Divider />

          <Box
            sx={{
              p: { xs: 3, md: 4 },
            }}
          >
            <Alert
              severity="info"
              sx={{
                mb: 4,
                borderRadius: 1.5,
              }}
            >
              Please provide accurate and up-to-date
              information. Your resume should contain
              your latest professional details.
            </Alert>

            {/* Personal Information */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: 750,
                mb: 0.5,
              }}
            >
              Personal Information
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mb: 2.5,
              }}
            >
              Tell us how we can contact you.
            </Typography>

            <Grid container spacing={2.5}>
              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                }}
              >
                <TextField
                  fullWidth
                  required
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  error={Boolean(errors.firstName)}
                  helperText={errors.firstName}
                />
              </Grid>

              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                }}
              >
                <TextField
                  fullWidth
                  required
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  error={Boolean(errors.lastName)}
                  helperText={errors.lastName}
                />
              </Grid>

              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                }}
              >
                <TextField
                  fullWidth
                  required
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                />
              </Grid>

              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                }}
              >
                <TextField
                  fullWidth
                  required
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  inputProps={{
    inputMode: "numeric",
    pattern: "[0-9]*",
    maxLength: 10,
  }}
                  error={Boolean(errors.phone)}
                  helperText={errors.phone}
                />
              </Grid>

              <Grid
                size={{
                  xs: 12,
                }}
              >
                <TextField
                  fullWidth
                  required
                  label="Current Location"
                  name="location"
                  placeholder="Example: Hyderabad"
                  value={formData.location}
                  onChange={handleChange}
                  error={Boolean(errors.location)}
                  helperText={errors.location}
                />
              </Grid>
            </Grid>

            <Divider sx={{ my: 4 }} />

            {/* Professional Information */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: 750,
                mb: 0.5,
              }}
            >
              Professional Information
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mb: 2.5,
              }}
            >
              Help the employer understand your current
              professional situation.
            </Typography>

            <Grid container spacing={2.5}>
              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                }}
              >
                <TextField
                  fullWidth
                  required
                  label="Total Experience"
                  name="experience"
                  placeholder="Example: 4 years"
                  value={formData.experience}
                  onChange={handleChange}
                  error={Boolean(errors.experience)}
                  helperText={errors.experience}
                />
              </Grid>

              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                }}
              >
                <TextField
                  fullWidth
                  label="Current Company"
                  name="currentCompany"
                  value={formData.currentCompany}
                  onChange={handleChange}
                />
              </Grid>

              <Grid
                size={{
                  xs: 12,
                }}
              >
                <TextField
                  fullWidth
                  required
                  label="Notice Period"
                  name="noticePeriod"
                  placeholder="Example: Immediate / 30 days"
                  value={formData.noticePeriod}
                  onChange={handleChange}
                  error={Boolean(errors.noticePeriod)}
                  helperText={errors.noticePeriod}
                />
              </Grid>
            </Grid>

            <Divider sx={{ my: 4 }} />

            {/* Resume */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: 750,
                mb: 0.5,
              }}
            >
              Resume
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mb: 2.5,
              }}
            >
              Upload your latest resume in PDF, DOC, or
              DOCX format.
            </Typography>

            <Box
              sx={{
                border: "1px dashed",
                borderColor: errors.resume
                  ? "error.main"
                  : "divider",
                borderRadius: 2,
                p: {
                  xs: 2.5,
                  md: 3,
                },
                textAlign: "center",
                backgroundColor:
                  "background.default",
              }}
            >
              <CloudUploadOutlinedIcon
                sx={{
                  fontSize: 38,
                  color: "primary.main",
                  mb: 1,
                }}
              />

              <Typography
                variant="body2"
                sx={{
                  mb: 1.5,
                  fontWeight: 600,
                }}
              >
                Upload your resume
              </Typography>

              <Button
                component="label"
                variant="outlined"
                startIcon={<CloudUploadOutlinedIcon />}
              >
                Choose File

                <input
                  hidden
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResumeChange}
                />
              </Button>

              {resume && (
                <Box
                  sx={{
                    mt: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  <DescriptionOutlinedIcon
                    sx={{
                      fontSize: 18,
                      color: "primary.main",
                    }}
                  />

                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      wordBreak: "break-word",
                    }}
                  >
                    {resume.name}
                  </Typography>
                </Box>
              )}

              {errors.resume && (
                <Typography
                  variant="caption"
                  color="error"
                  display="block"
                  sx={{
                    mt: 1.5,
                  }}
                >
                  {errors.resume}
                </Typography>
              )}
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Cover Letter */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: 750,
                mb: 0.5,
              }}
            >
              Cover Letter
              <Typography
                component="span"
                variant="body2"
                color="text.secondary"
                sx={{ ml: 1 }}
              >
                Optional
              </Typography>
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mb: 2.5,
              }}
            >
              Briefly explain why you are a good fit for
              this position.
            </Typography>

            <TextField
              fullWidth
              multiline
              minRows={6}
              label="Cover Letter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              placeholder="Tell the employer about your relevant experience, skills, and interest in this role."
            />

            {/* Submit */}
            <Box
              sx={{
                mt: 4,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={isSubmitting}
                endIcon={
                  !isSubmitting && (
                    <ArrowForwardOutlinedIcon />
                  )
                }
                sx={{
                  minWidth: 210,
                }}
              >
                {isSubmitting
                  ? "Submitting..."
                  : "Submit Application"}
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Apply;