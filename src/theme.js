import { createTheme } from "@mui/material/styles";

const paletteValues = {
  primary: {
    main: "#f8b538",
    contrastText: "#020617",
  },
  secondary: {
    main: "#ff2626",
    contrastText: "#ffffff",
  },
};

export const getAppTheme = (mode = "dark") =>
  createTheme({
    palette: {
      mode,
      ...paletteValues,
      background: {
        default: mode === "dark" ? "#070b1d" : "#959595",
        paper: mode === "dark" ? "rgba(15, 23, 42, 0.96)" : "#ffffff",
      },
      text: {
        primary: mode === "dark" ? "#ffffff" : "#ffffff",
        secondary: mode === "dark" ? "#ffffff" : "#ffffff",
      },
    },
    typography: {
      fontFamily: '"Plus Jakarta Sans", system-ui, "Segoe UI", Roboto, sans-serif',
      h3: {
        fontWeight: 800,
        letterSpacing: "-0.03em",
        lineHeight: 1.15,
      },
      h6: {
        fontWeight: 500,
        lineHeight: 1.55,
      },
    },
    shape: {
      borderRadius: 14,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontWeight: 700,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
            backgroundColor: mode === "dark" ? "rgba(8, 14, 35, 0.9)" : "rgba(215, 2, 2, 0.82)",
            color: mode === "dark" ? "#f8fafc" : "#0f172a",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: mode === "dark" ? "rgba(11, 20, 45, 0.97)" : "#f8fafc",
            border: mode === "dark" ? "1px solid rgba(96, 165, 250, 0.14)" : "1px solid rgba(148, 163, 184, 0.16)",
          },
        },
      },
    },
  });
