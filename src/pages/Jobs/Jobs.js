import { useMemo, useState } from "react";

import {
  Box,
  Container,
  Typography,
} from "@mui/material";

import SearchOffOutlinedIcon from "@mui/icons-material/SearchOffOutlined";

import jobs from "../../data/jobs";

import JobCard from "../../components/jobs/JobCard";
import JobSearch from "../../components/jobs/JobSearch";
import JobFilters from "../../components/jobs/JobFilters";

function Jobs() {
  const [searchTerm, setSearchTerm] = useState("");

  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [experience, setExperience] = useState("");
  const [category, setCategory] = useState("");

  const [submittedSearch, setSubmittedSearch] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();

    setSubmittedSearch(searchTerm.trim());
  };

  const filteredJobs = useMemo(() => {
    const search = submittedSearch.toLowerCase();

    return jobs.filter((job) => {
      const matchesSearch =
        !search ||
        job.title.toLowerCase().includes(search) ||
        job.company.toLowerCase().includes(search) ||
        job.skills.some((skill) =>
          skill.toLowerCase().includes(search)
        );

      const matchesLocation =
        !location || job.location === location;

      const matchesType =
        !jobType || job.type === jobType;

      const matchesExperience =
        !experience || job.experience === experience;

      const matchesCategory =
        !category || job.category === category;

      return (
        matchesSearch &&
        matchesLocation &&
        matchesType &&
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

  return (
    <Box
      sx={{
        backgroundColor: "#FCFAF5",
        minHeight: "70vh",
      }}
    >
      {/* Hero */}
      <Box
        sx={{
          backgroundColor: "#F5EFE4",
          borderBottom: "1px solid #E8DFD1",
          py: {
            xs: 6,
            md: 7,
          },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              color: "#E88912",
              fontSize: 11,
              fontWeight: 700,
              mb: 1,
            }}
          >
            CAREER OPPORTUNITIES
          </Typography>

          <Typography
            component="h1"
            sx={{
              color: "#171614",
              fontSize: {
                xs: 32,
                sm: 38,
                md: 44,
              },
              fontWeight: 800,
              letterSpacing: "-0.045em",
              lineHeight: 1.05,
              mb: 1.5,
            }}
          >
            Find your perfect job
          </Typography>

          <Typography
            sx={{
              color: "#756F67",
              fontSize: {
                xs: 13,
                md: 14,
              },
              lineHeight: 1.7,
              maxWidth: 560,
              mb: 3,
            }}
          >
            Discover opportunities from leading companies across India
            and take the next step in your career.
          </Typography>

          <JobSearch
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSearch={handleSearch}
          />
        </Container>
      </Box>

      {/* Jobs */}
      <Container
        maxWidth="lg"
        sx={{
          py: {
            xs: 5,
            md: 7,
          },
        }}
      >
        {/* Filters */}
        <Box sx={{ mb: 4 }}>
          <JobFilters
            location={location}
            setLocation={setLocation}
            jobType={jobType}
            setJobType={setJobType}
            experience={experience}
            setExperience={setExperience}
            category={category}
            setCategory={setCategory}
          />
        </Box>

        {/* Results header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 700,
              color: "#292622",
            }}
          >
            {filteredJobs.length}{" "}
            {filteredJobs.length === 1
              ? "job"
              : "jobs"}{" "}
            found
          </Typography>

          {(submittedSearch ||
            location ||
            jobType ||
            experience ||
            category) && (
            <Typography
              component="button"
              onClick={() => {
                setSearchTerm("");
                setSubmittedSearch("");
                setLocation("");
                setJobType("");
                setExperience("");
                setCategory("");
              }}
              sx={{
                border: 0,
                background: "transparent",
                cursor: "pointer",
                color: "#D97706",
                fontSize: 11,
                fontWeight: 700,
              }}
            >
              Clear filters
            </Typography>
          )}
        </Box>

        {/* Results */}
        {filteredJobs.length > 0 ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
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
              border: "1px solid #E1D5C2",
              borderRadius: "10px",
              backgroundColor: "#FFFFFF",
              py: 8,
              px: 3,
              textAlign: "center",
            }}
          >
            <SearchOffOutlinedIcon
              sx={{
                fontSize: 42,
                color: "#C8BBA8",
                mb: 1.5,
              }}
            />

            <Typography
              sx={{
                fontSize: 17,
                fontWeight: 700,
                color: "#292622",
                mb: 0.75,
              }}
            >
              No jobs found
            </Typography>

            <Typography
              sx={{
                fontSize: 13,
                color: "#756F67",
              }}
            >
              Try changing your search or filters.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default Jobs;