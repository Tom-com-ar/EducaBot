import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import "./index.css";
import App from "./App.jsx";
import { appTheme } from "./theme";

// Punto de entrada de React: monta toda la app dentro de <div id="root">.
ReactDOM.createRoot(document.getElementById("root")).render(
  // ThemeProvider comparte el tema de MUI a todos los componentes hijos.
  <ThemeProvider theme={appTheme}>
    {/* CssBaseline aplica una base de estilos consistente entre navegadores. */}
    <CssBaseline />
    <App />
  </ThemeProvider>,
);
