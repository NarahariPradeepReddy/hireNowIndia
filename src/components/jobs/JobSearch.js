import {
  Box,
  Button,
  TextField,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

function JobSearch({
  searchTerm,
  setSearchTerm,
  onSearch,
}) {
  return (
    <Box
      component="form"
      onSubmit={onSearch}
      sx={{
        display: "flex",
        gap: 1,
        width: "100%",
      }}
    >
      <TextField
        fullWidth
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search by job title, skill or company"
        size="small"
        InputProps={{
          startAdornment: (
            <SearchIcon
              sx={{
                color: "#92897D",
                mr: 1,
                fontSize: 20,
              }}
            />
          ),
        }}
        sx={{
          backgroundColor: "#FFFFFF",

          "& .MuiOutlinedInput-root": {
            minHeight: 46,
            borderRadius: "7px",

            "& fieldset": {
              borderColor: "#DDD2C1",
            },

            "&:hover fieldset": {
              borderColor: "#CBB99F",
            },

            "&.Mui-focused fieldset": {
              borderColor: "#EE8B13",
            },
          },

          "& input": {
            fontSize: 12,
          },
        }}
      />

      <Button
        type="submit"
        variant="contained"
        startIcon={<SearchIcon sx={{ fontSize: 17 }} />}
        sx={{
          minWidth: {
            xs: 48,
            sm: 110,
          },
          minHeight: 46,
          backgroundColor: "#EE8B13",
          fontSize: 12,

          "&:hover": {
            backgroundColor: "#D97706",
          },
        }}
      >
        <Box
          component="span"
          sx={{
            display: {
              xs: "none",
              sm: "inline",
            },
          }}
        >
          Search
        </Box>
      </Button>
    </Box>
  );
}

export default JobSearch;