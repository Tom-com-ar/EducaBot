import { createTheme } from "@mui/material/styles";

/**
 * Este archivo define el "tema global" de Material UI.
 * Pensalo como la identidad visual base: colores, tipografías y formas.
 */
export const appTheme = createTheme({
  palette: {
    // Modo general del tema. Todos los componentes MUI se adaptan a esto.
    mode: "dark",
    primary: {
      // Color principal (botones, links destacados, chips, etc.).
      main: "#22d3ee",
    },
    secondary: {
      // Color secundario para acciones/acentos alternativos.
      main: "#c084fc",
    },
    background: {
      // Fondo global y fondo de "superficies" (cards, appbar, drawer).
      default: "#050810",
      paper: "rgba(15, 23, 42, 0.72)",
    },
    text: {
      // Contraste de texto principal y secundario.
      primary: "#f1f5f9",
      secondary: "#a8b7d4",
    },
  },
  typography: {
    // Fuente global de los componentes MUI.
    fontFamily: '"Plus Jakarta Sans", system-ui, "Segoe UI", Roboto, sans-serif',
    h3: {
      // Estilo base para títulos grandes (ej: hero).
      fontWeight: 800,
      letterSpacing: "-0.03em",
      lineHeight: 1.15,
    },
    h6: {
      // Estilo base para subtítulos.
      fontWeight: 500,
      lineHeight: 1.55,
    },
  },
  shape: {
    // Redondeo por defecto para botones, cards, inputs, etc.
    borderRadius: 14,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // Evita MAYUSCULAS automáticas en botones de MUI.
          textTransform: "none",
          fontWeight: 700,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          // Quita el degradado por defecto del AppBar.
          backgroundImage: "none",
        },
      },
    },
  },
});
