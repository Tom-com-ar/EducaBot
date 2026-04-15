import React, { useMemo } from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import "./index.css";
import App from "./App.jsx";
import useModoOscuro from "./hooks/useModoOscuro";
import { getAppTheme } from "./theme";

function Root() {
  const [modoOscuro, setModoOscuro] = useModoOscuro();
  const theme = useMemo(() => getAppTheme(modoOscuro), [modoOscuro]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App modoOscuro={modoOscuro} setModoOscuro={setModoOscuro} />
    </ThemeProvider>
  );
}

// Punto de entrada de React: monta toda la app dentro de <div id="root">.
ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
