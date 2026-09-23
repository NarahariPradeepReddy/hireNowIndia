import {
  Box,
  Button,
  TextField,
} from "@mui/material";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function JobSearch({
  searchTerm,
  setSearchTerm,
  onSearch,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();

    onSearch();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        gap: 1,
        width: "100%",
        alignItems: "stretch",
      }}
    >
      <TextField
        fullWidth
        size="small"
        placeholder="Search by job title, skill or company"
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />

      <Button
        type="submit"
        variant="contained"
        startIcon={<SearchOutlinedIcon />}
        sx={{
          minWidth: 88,
          whiteSpace: "nowrap",
        }}
      >
        Search
      </Button>
    </Box>
  );
}

export default JobSearch;