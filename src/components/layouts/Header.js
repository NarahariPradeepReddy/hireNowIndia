import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, NavLink } from "react-router-dom";
import siteConfig from "../../config/siteConfig";

const navigation = [
  {
    label: "Jobs",
    path: "/jobs",
  },
  {
    label: "For Employers",
    path: "/employers",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((previous) => !previous);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "#FFFFFF",
          color: "#171614",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 64, md: 72 },
              justifyContent: "space-between",
            }}
          >
            {/* Logo */}
            <Box
              component={Link}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontWeight: 800,
                minWidth: 150,
              }}
            >
              <Box
                sx={{
                  width: 34,
                  height: 34,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "primary.main",
                  fontSize: 24,
                  fontWeight: 800,
                  lineHeight: 1,
                }}
              >
                ✦
              </Box>

              <Box
                component="span"
                sx={{
                  fontSize: 14,
                  fontWeight: 800,
                  display: { xs: "none", sm: "block" },
                }}
              >
                {siteConfig.company.name}
              </Box>
            </Box>

            {/* Desktop Navigation */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 3,
              }}
            >
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  style={({ isActive }) => ({
                    fontSize: 13,
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "#F28C18" : "#49443D",
                    transition: "color 0.2s ease",
                  })}
                >
                  {item.label}
                </NavLink>
              ))}
            </Box>

            {/* Desktop CTA */}
            <Button
              component={Link}
              to="/employers"
              variant="contained"
              sx={{
                display: { xs: "none", md: "inline-flex" },
                backgroundColor: "primary.main",
                "&:hover": {
                  backgroundColor: "primary.dark",
                },
              }}
            >
              Post a Job
            </Button>

            {/* Mobile Menu */}
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                display: { xs: "flex", md: "none" },
                color: "text.primary",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: 280 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              p: 1,
            }}
          >
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {navigation.map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  onClick={handleDrawerToggle}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}

            <ListItem>
              <Button
                fullWidth
                component={Link}
                to="/employers"
                variant="contained"
                onClick={handleDrawerToggle}
              >
                Post a Job
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Header;
