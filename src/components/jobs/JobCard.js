import {
  Box,
  Button,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";

import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        p: {
          xs: 2.5,
          sm: 3,
        },
        transition:
          "border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",

        "&:hover": {
          borderColor: "primary.main",
          boxShadow: "0 8px 24px rgba(23, 22, 20, 0.07)",
          transform: "translateY(-2px)",
        },
      }}
    >
      {/* Top Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 2,
        }}
      >
        <Box sx={{ minWidth: 0 }}>
          <Typography
            variant="h6"
            component={Link}
            to={`/jobs/${job.id}`}
            sx={{
              display: "inline-block",
              color: "text.primary",
              fontSize: {
                xs: "1.05rem",
                sm: "1.15rem",
              },
              fontWeight: 750,
              lineHeight: 1.3,
              mb: 0.5,

              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            {job.title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontWeight: 500,
            }}
          >
            {job.company}
          </Typography>
        </Box>

        <Chip
          label={job.type}
          size="small"
          sx={{
            flexShrink: 0,
            backgroundColor: "rgba(242, 140, 24, 0.10)",
            color: "primary.dark",
            fontWeight: 700,
            borderRadius: 1,
          }}
        />
      </Box>

      {/* Job Information */}
      <Stack
        direction="row"
        spacing={2.5}
        useFlexGap
        flexWrap="wrap"
        sx={{
          mt: 2,
          color: "text.secondary",
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
              color: "primary.main",
            }}
          />

          <Typography variant="body2">
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
              fontSize: 17,
              color: "primary.main",
            }}
          />

          <Typography variant="body2">
            {job.experience}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.6,
          }}
        >
          <BusinessCenterOutlinedIcon
            sx={{
              fontSize: 17,
              color: "primary.main",
            }}
          />

          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
            }}
          >
            {job.salary}
          </Typography>
        </Box>
      </Stack>

      {/* Description */}
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          mt: 2,
          lineHeight: 1.7,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {job.description}
      </Typography>

      {/* Skills */}
      <Stack
        direction="row"
        spacing={0.8}
        useFlexGap
        flexWrap="wrap"
        sx={{
          mt: 2,
        }}
      >
        {job.skills.slice(0, 6).map((skill) => (
          <Chip
            key={skill}
            label={skill}
            size="small"
            variant="outlined"
            sx={{
              borderColor: "divider",
              color: "text.secondary",
              backgroundColor: "background.default",
              fontSize: "0.72rem",
              height: 26,
            }}
          />
        ))}
      </Stack>

      {/* Bottom Section */}
      <Divider
        sx={{
          my: 2.5,
        }}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,

          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
      >
        {/* Posted Date */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.7,
            alignSelf: {
              xs: "flex-start",
              sm: "auto",
            },
          }}
        >
          <AccessTimeOutlinedIcon
            sx={{
              fontSize: 16,
              color: "text.secondary",
            }}
          />

          <Typography
            variant="caption"
            color="text.secondary"
          >
            Posted {job.postedDate}
          </Typography>
        </Box>

        {/* CTA */}
        <Button
          component={Link}
          to={`/jobs/${job.id}`}
          variant="contained"
          endIcon={<ArrowForwardOutlinedIcon />}
          sx={{
            minWidth: 115,

            alignSelf: {
              xs: "stretch",
              sm: "auto",
            },
          }}
        >
          View Job
        </Button>
      </Box>
    </Box>
  );
}

export default JobCard;