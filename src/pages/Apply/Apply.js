import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

import jobs from "../../data/jobs";

function Apply() {
  const { jobId } = useParams();

  const job = useMemo(
    () => jobs.find((item) => item.id === jobId),
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

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

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

    setResume(file);

    setErrors((previous) => ({
      ...previous,
      resume: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }

    if (!formData.experience) {
      newErrors.experience = "Please select your experience";
    }

    if (!formData.noticePeriod) {
      newErrors.noticePeriod = "Please select your notice period";
    }

    if (!resume) {
      newErrors.resume = "Please upload your resume";
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

    setSubmitted(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
            The job you are trying to apply for is no longer available.
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

  if (submitted) {
    return (
      <Box
        sx={{
          minHeight: "75vh",
          display: "flex",
          alignItems: "center",
          py: 8,
          backgroundColor: "#FCFAF5",
        }}
      >
        <Container maxWidth="md">
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 7 },
              textAlign: "center",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 3,
            }}
          >
            <CheckCircleOutlineIcon
              sx={{
                fontSize: 64,
                color: "primary.main",
                mb: 2,
              }}
            />

            <Typography variant="h3" sx={{ mb: 2 }}>
              Application Submitted
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.8,
                mb: 1,
              }}
            >
              Thank you for applying for the{" "}
              <strong>{job.title}</strong> position at{" "}
              <strong>{job.company}</strong>.
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                mb: 4,
                lineHeight: 1.8,
              }}
            >
              Our recruitment team will review your application and contact
              you if your profile matches the requirements.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
            >
              <Button
                component={Link}
                to="/jobs"
                variant="contained"
              >
                Browse More Jobs
              </Button>

              <Button
                component={Link}
                to="/"
                variant="outlined"
              >
                Back to Home
              </Button>
            </Stack>
          </Paper>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: "#FCFAF5" }}>
      {/* Page Header */}
      <Box
        sx={{
          background:
            "linear-gradient(180deg, #FCFAF5 0%, #F7F1E6 100%)",
          py: { xs: 5, md: 7 },
        }}
      >
        <Container maxWidth="lg">
          <Button
            component={Link}
            to={`/jobs/${job.id}`}
            startIcon={<ArrowBackIcon />}
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

          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
              fontWeight: 800,
              letterSpacing: "0.12em",
            }}
          >
            Job Application
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: "2rem",
                md: "3rem",
              },
              mt: 1,
              mb: 1.5,
            }}
          >
            Apply for {job.title}
          </Typography>

          <Typography color="text.secondary">
            {job.company} · {job.location}
          </Typography>
        </Container>
      </Box>

      {/* Application */}
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 5, md: 8 },
        }}
      >
        <Grid container spacing={4}>
          {/* Form */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Paper
              elevation={0}
              component="form"
              onSubmit={handleSubmit}
              sx={{
                p: { xs: 3, md: 5 },
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 3,
              }}
            >
              <Typography variant="h5" sx={{ mb: 1 }}>
                Personal Information
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 4 }}
              >
                Please provide your basic information so our recruitment team
                can contact you.
              </Typography>

              <Grid container spacing={2.5}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    error={Boolean(errors.firstName)}
                    helperText={errors.firstName}
                    required
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    error={Boolean(errors.lastName)}
                    helperText={errors.lastName}
                    required
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    type="email"
                    label="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                    required
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    error={Boolean(errors.phone)}
                    helperText={errors.phone}
                    required
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Current Location"
                    name="location"
                    placeholder="e.g. Hyderabad, Telangana"
                    value={formData.location}
                    onChange={handleChange}
                    error={Boolean(errors.location)}
                    helperText={errors.location}
                    required
                  />
                </Grid>
              </Grid>

              <Box sx={{ mt: 5 }}>
                <Typography variant="h5" sx={{ mb: 1 }}>
                  Professional Information
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 4 }}
                >
                  Tell us about your professional background.
                </Typography>

                <Grid container spacing={2.5}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <FormControl
                      fullWidth
                      error={Boolean(errors.experience)}
                      required
                    >
                      <InputLabel>Experience</InputLabel>

                      <Select
                        name="experience"
                        value={formData.experience}
                        label="Experience"
                        onChange={handleChange}
                      >
                        <MenuItem value="Fresher">Fresher</MenuItem>
                        <MenuItem value="0-2 years">0-2 years</MenuItem>
                        <MenuItem value="2-4 years">2-4 years</MenuItem>
                        <MenuItem value="4-6 years">4-6 years</MenuItem>
                        <MenuItem value="6-10 years">6-10 years</MenuItem>
                        <MenuItem value="10+ years">10+ years</MenuItem>
                      </Select>

                      {errors.experience && (
                        <FormHelperText>
                          {errors.experience}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Current Company"
                      name="currentCompany"
                      value={formData.currentCompany}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <FormControl
                      fullWidth
                      error={Boolean(errors.noticePeriod)}
                      required
                    >
                      <InputLabel>Notice Period</InputLabel>

                      <Select
                        name="noticePeriod"
                        value={formData.noticePeriod}
                        label="Notice Period"
                        onChange={handleChange}
                      >
                        <MenuItem value="Immediate">
                          Immediate
                        </MenuItem>

                        <MenuItem value="15 days">
                          15 days
                        </MenuItem>

                        <MenuItem value="30 days">
                          30 days
                        </MenuItem>

                        <MenuItem value="60 days">
                          60 days
                        </MenuItem>

                        <MenuItem value="90 days">
                          90 days
                        </MenuItem>
                      </Select>

                      {errors.noticePeriod && (
                        <FormHelperText>
                          {errors.noticePeriod}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                </Grid>
              </Box>

              {/* Resume */}
              <Box sx={{ mt: 5 }}>
                <Typography variant="h5" sx={{ mb: 1 }}>
                  Resume
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  Upload your latest resume. PDF or DOC/DOCX files are
                  recommended.
                </Typography>

                <Box
                  sx={{
                    border: "1.5px dashed",
                    borderColor: errors.resume
                      ? "error.main"
                      : "divider",
                    borderRadius: 2,
                    p: { xs: 3, md: 4 },
                    textAlign: "center",
                    backgroundColor: "#FEFCF8",
                  }}
                >
                  <CloudUploadOutlinedIcon
                    sx={{
                      fontSize: 42,
                      color: "primary.main",
                      mb: 1,
                    }}
                  />

                  <Typography sx={{ fontWeight: 700, mb: 0.5 }}>
                    Upload your resume
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    Select a file from your computer
                  </Typography>

                  <Button
                    component="label"
                    variant="outlined"
                  >
                    Choose File

                    <input
                      type="file"
                      hidden
                      accept=".pdf,.doc,.docx"
                      onChange={handleResumeChange}
                    />
                  </Button>

                  {resume && (
                    <Typography
                      variant="body2"
                      sx={{
                        mt: 2,
                        fontWeight: 600,
                        wordBreak: "break-word",
                      }}
                    >
                      {resume.name}
                    </Typography>
                  )}

                  {errors.resume && (
                    <Typography
                      variant="body2"
                      color="error"
                      sx={{ mt: 1 }}
                    >
                      {errors.resume}
                    </Typography>
                  )}
                </Box>
              </Box>

              {/* Cover Letter */}
              <Box sx={{ mt: 5 }}>
                <Typography variant="h5" sx={{ mb: 1 }}>
                  Cover Letter
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  Briefly tell us why you are interested in this position.
                </Typography>

                <TextField
                  fullWidth
                  multiline
                  minRows={6}
                  label="Cover Letter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  placeholder="Write a short introduction..."
                />
              </Box>

              {/* Submit */}
              <Box
                sx={{
                  mt: 5,
                  pt: 4,
                  borderTop: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Alert severity="info" sx={{ mb: 3 }}>
                  Your information will be used only for recruitment purposes.
                </Alert>

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                >
                  Submit Application
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Job Summary */}
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
                Applying For
              </Typography>

              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  mb: 1,
                }}
              >
                {job.title}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 3 }}
              >
                {job.company}
              </Typography>

              <Stack spacing={2}>
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    Location
                  </Typography>

                  <Typography sx={{ fontWeight: 600 }}>
                    {job.location}
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="caption" color="text.secondary">
                    Experience
                  </Typography>

                  <Typography sx={{ fontWeight: 600 }}>
                    {job.experience}
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="caption" color="text.secondary">
                    Salary
                  </Typography>

                  <Typography sx={{ fontWeight: 600 }}>
                    {job.salary}
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="caption" color="text.secondary">
                    Job Type
                  </Typography>

                  <Typography sx={{ fontWeight: 600 }}>
                    {job.type}
                  </Typography>
                </Box>
              </Stack>

              <Button
                component={Link}
                to={`/jobs/${job.id}`}
                variant="outlined"
                fullWidth
                sx={{ mt: 4 }}
              >
                View Full Job Details
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Apply;