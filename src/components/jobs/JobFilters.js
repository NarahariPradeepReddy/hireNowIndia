import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

function JobFilters({
  location,
  setLocation,
  jobType,
  setJobType,
  experience,
  setExperience,
  category,
  setCategory,
  onClear,
}) {
  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        p: 2.5,
        position: {
          md: "sticky",
        },
        top: {
          md: 90,
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          mb: 2.5,
        }}
      >
        Filter Jobs
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {/* Location */}
        <FormControl fullWidth size="small">
          <InputLabel id="location-label">
            Location
          </InputLabel>

          <Select
            labelId="location-label"
            value={location}
            label="Location"
            onChange={(event) =>
              setLocation(event.target.value)
            }
          >
            <MenuItem value="">
              All Locations
            </MenuItem>

            <MenuItem value="Hyderabad">
              Hyderabad
            </MenuItem>

            <MenuItem value="Bangalore">
              Bangalore
            </MenuItem>

            <MenuItem value="Chennai">
              Chennai
            </MenuItem>

            <MenuItem value="Pune">
              Pune
            </MenuItem>

            <MenuItem value="Mumbai">
              Mumbai
            </MenuItem>
          </Select>
        </FormControl>

        {/* Job Type */}
        <FormControl fullWidth size="small">
          <InputLabel id="job-type-label">
            Job Type
          </InputLabel>

          <Select
            labelId="job-type-label"
            value={jobType}
            label="Job Type"
            onChange={(event) =>
              setJobType(event.target.value)
            }
          >
            <MenuItem value="">
              All Job Types
            </MenuItem>

            <MenuItem value="Full-time">
              Full-time
            </MenuItem>

            <MenuItem value="Part-time">
              Part-time
            </MenuItem>

            <MenuItem value="Contract">
              Contract
            </MenuItem>

            <MenuItem value="Internship">
              Internship
            </MenuItem>
          </Select>
        </FormControl>

        {/* Experience */}
        <FormControl fullWidth size="small">
          <InputLabel id="experience-label">
            Experience
          </InputLabel>

          <Select
            labelId="experience-label"
            value={experience}
            label="Experience"
            onChange={(event) =>
              setExperience(event.target.value)
            }
          >
            <MenuItem value="">
              All Experience
            </MenuItem>

            <MenuItem value="0-2 years">
              0-2 years
            </MenuItem>

            <MenuItem value="2-4 years">
              2-4 years
            </MenuItem>

            <MenuItem value="3-5 years">
              3-5 years
            </MenuItem>

            <MenuItem value="3-6 years">
              3-6 years
            </MenuItem>

            <MenuItem value="4-6 years">
              4-6 years
            </MenuItem>

            <MenuItem value="5+ years">
              5+ years
            </MenuItem>
          </Select>
        </FormControl>

        {/* Category */}
        <FormControl fullWidth size="small">
          <InputLabel id="category-label">
            Category
          </InputLabel>

          <Select
            labelId="category-label"
            value={category}
            label="Category"
            onChange={(event) =>
              setCategory(event.target.value)
            }
          >
            <MenuItem value="">
              All Categories
            </MenuItem>

            <MenuItem value="IT & Software">
              IT & Software
            </MenuItem>

            <MenuItem value="Cloud & DevOps">
              Cloud & DevOps
            </MenuItem>

            <MenuItem value="Human Resources">
              Human Resources
            </MenuItem>
          </Select>
        </FormControl>

        {/* Clear */}
        <Button
          variant="outlined"
          onClick={onClear}
          fullWidth
          sx={{
            mt: 0.5,
          }}
        >
          Clear Filters
        </Button>
      </Box>
    </Box>
  );
}

export default JobFilters;