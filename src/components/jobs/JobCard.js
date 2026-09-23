import {
  Box,
  Button,
  Chip,
  Typography,
} from "@mui/material";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <Box
      sx={{
        border: "1px solid #E1D5C2",
        borderRadius: "10px",
        backgroundColor: "#FFFFFF",
        p: {
          xs: 2.5,
          md: 3,
        },

        transition:
          "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",

        "&:hover": {
          transform: "translateY(-2px)",
          borderColor: "#D5C2A5",
          boxShadow: "0 10px 28px rgba(61, 45, 25, 0.07)",
        },
      }}
    >
      {/* Top section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: {
            xs: "flex-start",
            sm: "center",
          },
          gap: 2,
          mb: 2,
        }}
      >
        <Box>
          <Typography
            component="h3"
            sx={{
              fontSize: {
                xs: 17,
                md: 18,
              },
              fontWeight: 750,
              lineHeight: 1.35,
              color: "#211F1C",
              mb: 0.6,
            }}
          >
            {job.title}
          </Typography>

          <Typography
            sx={{
              fontSize: 13,
              fontWeight: 600,
              color: "#5F5951",
            }}
          >
            {job.company}
          </Typography>
        </Box>

        <Chip
          label={job.type}
          size="small"
          sx={{
            height: 26,
            backgroundColor: "#FFF0DC",
            color: "#C96F00",
            fontSize: 10.5,
            fontWeight: 700,
            borderRadius: "6px",
          }}
        />
      </Box>

      {/* Job information */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: {
            xs: 1.5,
            md: 2.5,
          },
          mb: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.6,
          }}
        >
          <LocationOnOutlinedIcon
            sx={{
              fontSize: 17,
              color: "#E88912",
            }}
          />

          <Typography
            sx={{
              fontSize: 12,
              color: "#6F6961",
            }}
          >
            {job.location}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.6,
          }}
        >
          <WorkOutlineOutlinedIcon
            sx={{
              fontSize: 16,
              color: "#E88912",
            }}
          />

          <Typography
            sx={{
              fontSize: 12,
              color: "#6F6961",
            }}
          >
            {job.experience}
          </Typography>
        </Box>

        <Typography
          sx={{
            fontSize: 12,
            color: "#5E5850",
            fontWeight: 600,
          }}
        >
          {job.salary}
        </Typography>
      </Box>

      {/* Description */}
      <Typography
        sx={{
          fontSize: {
            xs: 12.5,
            md: 13,
          },
          lineHeight: 1.7,
          color: "#716B63",
          mb: 2.25,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {job.description}
      </Typography>

      {/* Skills */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 0.75,
          mb: 2.5,
        }}
      >
        {job.skills.slice(0, 5).map((skill) => (
          <Box
            key={skill}
            sx={{
              border: "1px solid #E8DFD1",
              borderRadius: "5px",
              px: 1,
              py: 0.45,
              color: "#686159",
              fontSize: 10.5,
              backgroundColor: "#FCFAF5",
            }}
          >
            {skill}
          </Box>
        ))}
      </Box>

      {/* Bottom */}
      <Box
        sx={{
          borderTop: "1px solid #EEE7DB",
          pt: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <AccessTimeOutlinedIcon
            sx={{
              fontSize: 15,
              color: "#92897D",
            }}
          />

          <Typography
            sx={{
              fontSize: 10.5,
              color: "#92897D",
            }}
          >
            Posted {job.postedDate}
          </Typography>
        </Box>

        <Button
          component={Link}
          to={`/jobs/${job.id}`}
          variant="contained"
          endIcon={<ArrowForwardIcon sx={{ fontSize: 15 }} />}
          sx={{
            minHeight: 38,
            px: 1.8,
            fontSize: 11,
            backgroundColor: "#EE8B13",

            "&:hover": {
              backgroundColor: "#D97706",
            },
          }}
        >
          View job
        </Button>
      </Box>
    </Box>
  );
}

export default JobCard;