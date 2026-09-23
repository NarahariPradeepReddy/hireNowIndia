import { useMemo, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import JobSearch from "../../components/jobs/JobSearch";
import JobFilters from "../../components/jobs/JobFilters";
import JobCard from "../../components/jobs/JobCard";
import { getJobs } from "../../services/jobService";

function Jobs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [experience, setExperience] = useState("");
  const [category, setCategory] = useState("");

  const [submittedSearch, setSubmittedSearch] = useState("");

  const filteredJobs = useMemo(() => {
    const search = submittedSearch.toLowerCase();

    return getJobs().filter((job) => {
      const matchesSearch =
        !search ||
        job.title.toLowerCase().includes(search) ||
        job.company.toLowerCase().includes(search) ||
        job.skills.some((skill) =>
          skill.toLowerCase().includes(search)
        );

      const matchesLocation =
        !location ||
        job.location
          .toLowerCase()
          .includes(location.toLowerCase());

      const matchesJobType =
        !jobType || job.type === jobType;

      const matchesExperience =
        !experience || job.experience === experience;

      const matchesCategory =
        !category || job.category === category;

      return (
        matchesSearch &&
        matchesLocation &&
        matchesJobType &&
        matchesExperience &&
        matchesCategory
      );
    });
  }, [
    submittedSearch,
    location,
    jobType,
    experience,
    category,
  ]);

  const handleSearch = () => {
    setSubmittedSearch(searchTerm);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setSubmittedSearch("");
    setLocation("");
    setJobType("");
    setExperience("");
    setCategory("");
  };

  return (
    <Box>
      {/* Page Header */}
      <Box
        sx={{
          backgroundColor: "background.paper",
          borderBottom: "1px solid",
          borderColor: "divider",
          py: {
            xs: 5,
            md: 7,
          },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontSize: {
                xs: "2rem",
                md: "3rem",
              },
              mb: 1,
            }}
          >
            Find Your Next Job
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 650,
            }}
          >
            Explore job opportunities from companies
            looking for talented professionals like you.
          </Typography>
        </Container>
      </Box>

      {/* Search Section */}
      <Box
        sx={{
          py: 3,
          backgroundColor: "background.default",
        }}
      >
        <Container maxWidth="lg">
          <JobSearch
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSearch={handleSearch}
          />
        </Container>
      </Box>

      {/* Jobs Section */}
      <Container
        maxWidth="lg"
        sx={{
          pb: 8,
        }}
      >
        <Grid
          container
          spacing={{
            xs: 3,
            md: 4,
          }}
          alignItems="flex-start"
        >
          {/* Filters */}
          <Grid
            size={{
              xs: 12,
              md: 3,
            }}
          >
            <JobFilters
              location={location}
              setLocation={setLocation}
              jobType={jobType}
              setJobType={setJobType}
              experience={experience}
              setExperience={setExperience}
              category={category}
              setCategory={setCategory}
              onClear={handleClearFilters}
            />
          </Grid>

          {/* Results */}
          <Grid
            size={{
              xs: 12,
              md: 9,
            }}
          >
            {/* Results Header */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2.5,
                gap: 2,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                }}
              >
                {filteredJobs.length}{" "}
                {filteredJobs.length === 1
                  ? "Job"
                  : "Jobs"}{" "}
                Found
              </Typography>

              {(searchTerm ||
                location ||
                jobType ||
                experience ||
                category) && (
                <Button
                  variant="text"
                  size="small"
                  onClick={handleClearFilters}
                >
                  Clear All
                </Button>
              )}
            </Box>

            {/* Job List */}
            {filteredJobs.length > 0 ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                {filteredJobs.map((job) => (
                  <JobCard
                    key={job.id}
                    job={job}
                  />
                ))}
              </Box>
            ) : (
              <Box
                sx={{
                  backgroundColor: "background.paper",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 2,
                  p: {
                    xs: 4,
                    md: 6,
                  },
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    mb: 1,
                  }}
                >
                  No jobs found
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mb: 3,
                  }}
                >
                  Try changing your search or filters to
                  find more opportunities.
                </Typography>

                <Button
                  variant="contained"
                  onClick={handleClearFilters}
                >
                  Clear Filters
                </Button>
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Jobs;