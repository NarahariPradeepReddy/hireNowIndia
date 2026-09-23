import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
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
}) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        },
        gap: 1.25,
      }}
    >
      <FormControl size="small">
        <InputLabel>Location</InputLabel>

        <Select
          value={location}
          label="Location"
          onChange={(event) => setLocation(event.target.value)}
          sx={{
            backgroundColor: "#FFFFFF",
            fontSize: 12,
            borderRadius: "7px",
          }}
        >
          <MenuItem value="">All locations</MenuItem>
          <MenuItem value="Bangalore">Bangalore</MenuItem>
          <MenuItem value="Hyderabad">Hyderabad</MenuItem>
          <MenuItem value="Chennai">Chennai</MenuItem>
          <MenuItem value="Pune">Pune</MenuItem>
          <MenuItem value="Mumbai">Mumbai</MenuItem>
        </Select>
      </FormControl>

      <FormControl size="small">
        <InputLabel>Job Type</InputLabel>

        <Select
          value={jobType}
          label="Job Type"
          onChange={(event) => setJobType(event.target.value)}
          sx={{
            backgroundColor: "#FFFFFF",
            fontSize: 12,
            borderRadius: "7px",
          }}
        >
          <MenuItem value="">All types</MenuItem>
          <MenuItem value="Full-time">Full-time</MenuItem>
          <MenuItem value="Part-time">Part-time</MenuItem>
          <MenuItem value="Contract">Contract</MenuItem>
          <MenuItem value="Remote">Remote</MenuItem>
        </Select>
      </FormControl>

      <FormControl size="small">
        <InputLabel>Experience</InputLabel>

        <Select
          value={experience}
          label="Experience"
          onChange={(event) => setExperience(event.target.value)}
          sx={{
            backgroundColor: "#FFFFFF",
            fontSize: 12,
            borderRadius: "7px",
          }}
        >
          <MenuItem value="">Any experience</MenuItem>
          <MenuItem value="0-2 years">0-2 years</MenuItem>
          <MenuItem value="2-4 years">2-4 years</MenuItem>
          <MenuItem value="3-5 years">3-5 years</MenuItem>
          <MenuItem value="3-6 years">3-6 years</MenuItem>
          <MenuItem value="4-6 years">4-6 years</MenuItem>
        </Select>
      </FormControl>

      <FormControl size="small">
        <InputLabel>Category</InputLabel>

        <Select
          value={category}
          label="Category"
          onChange={(event) => setCategory(event.target.value)}
          sx={{
            backgroundColor: "#FFFFFF",
            fontSize: 12,
            borderRadius: "7px",
          }}
        >
          <MenuItem value="">All categories</MenuItem>
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
    </Box>
  );
}

export default JobFilters;