import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#c96f12" },
    secondary: { main: "#163046" },
    background: {
      default: "#f4efe7",
      paper: "#fffaf4",
    },
    text: {
      primary: "#1f2933",
      secondary: "#5b6670",
    },
  },
  shape: { borderRadius: 14 },
  typography: {
    fontFamily: "'Manrope', 'Segoe UI', sans-serif",
    h2: {
      fontFamily: "'Space Grotesk', 'Manrope', sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.04em",
      lineHeight: 1,
    },
    h4: {
      fontFamily: "'Space Grotesk', 'Manrope', sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.03em",
    },
    h5: {
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h6: {
      fontWeight: 700,
    },
    body1: {
      lineHeight: 1.75,
      fontSize: "1rem",
    },
    button: {
      fontWeight: 700,
      letterSpacing: "0.01em",
      textTransform: "none",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            "radial-gradient(circle at top left, rgba(201,111,18,0.12), transparent 30%), linear-gradient(180deg, #fbf6ef 0%, #f2ece3 100%)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 22,
          paddingBlock: 10,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

export default theme;
