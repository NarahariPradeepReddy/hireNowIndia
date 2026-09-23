import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F28C18",
      dark: "#D97706",
      light: "#F6A544",
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: "#2B2926",
    },

    background: {
      default: "#FCFAF5",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#171614",
      secondary: "#6F6A62",
    },

    divider: "#E5DCCB",
  },

  typography: {
    fontFamily: [
      "Inter",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "sans-serif",
    ].join(","),

    h1: {
      fontWeight: 800,
      letterSpacing: "-0.04em",
    },

    h2: {
      fontWeight: 750,
      letterSpacing: "-0.03em",
    },

    h3: {
      fontWeight: 700,
      letterSpacing: "-0.025em",
    },

    button: {
      fontWeight: 700,
      textTransform: "none",
    },
  },

  shape: {
    borderRadius: 10,
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        root: {
          borderRadius: 6,
          padding: "10px 18px",
          fontWeight: 700,
        },
      },
    },
  },
});

export default theme;