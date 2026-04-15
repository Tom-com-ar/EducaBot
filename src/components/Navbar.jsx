import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import SvgIcon from "@mui/material/SvgIcon";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import ModoOscuroToggle from "./ModoOscuroToggle";

// Lista de enlaces de navegación. Se reutiliza en desktop y móvil.
const enlaces = [
  { label: "Inicio", href: "#inicio" },
  { label: "Competencias", href: "#competencias" },
  { label: "Talleres", href: "#talleres" },
  { label: "Inscripción", href: "#inscripcion" },
  { label: "Dashboard", href: "#dashboard" },
];

export default function Navbar({ modoOscuro, setModoOscuro }) {
  // Estado del Drawer (menú lateral en mobile).
  const [movilAbierto, setMovilAbierto] = useState(false);

  const cerrarMenu = () => setMovilAbierto(false);

  return (
    <>
      {/* Barra superior principal */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          borderBottom: "1px solid",
          borderColor: "divider",
          backgroundColor: "rgba(5, 8, 16, 0.75)",
          backdropFilter: "blur(14px)",
          color: "#ffffff",
        }}
      >
        {/* Toolbar centra y da padding interno al contenido del navbar */}
        <Toolbar sx={{ maxWidth: 1200, width: "100%", mx: "auto", px: { xs: 2, sm: 3 } }}>
          <Typography
            variant="h6"
            component="a"
            href="#inicio"
            sx={{
              fontWeight: 800,
              letterSpacing: "-0.03em",
              textDecoration: "none",
              color: "primary.main",
              flexGrow: { xs: 1, md: 0 },
            }}
          >
            Educabot
          </Typography>

          

          {/* Menú de desktop: visible desde md en adelante */}
          <Box sx={{ display: { xs: "none", md: "flex" }, ml: 2, gap: 0.5, flexGrow: 1 }}>
            {enlaces.map((item) => (
              <Button key={item.href} color="inherit" href={item.href} sx={{ fontWeight: 600 }}>
                {item.label}
              </Button>
            ))}
          </Box>

          <ModoOscuroToggle
            modoOscuro={modoOscuro}
            onToggle={() => setModoOscuro((prev) => (prev === "dark" ? "light" : "dark"))}
          />

          {/* Botón hamburguesa: solo visible en pantallas chicas */}
          <IconButton
            color="inherit"
            edge="end"
            aria-label="abrir menú"
            onClick={() => setMovilAbierto(true)}
            sx={{ display: { xs: "inline-flex", md: "none" } }}
          >
            <SvgIcon fontSize="medium" aria-hidden>
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </SvgIcon>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer (panel lateral) para navegación mobile */}
      <Drawer anchor="right" open={movilAbierto} onClose={cerrarMenu} PaperProps={{ sx: { width: 280 } }}>
        <Box sx={{ p: 2 }}>
          <Typography variant="subtitle1" fontWeight={800} color="primary">
            Menú
          </Typography>
        </Box>
        <Divider />
        <List>
          {enlaces.map((item) => (
            // Al tocar un link, navegamos y cerramos el menú.
            <ListItemButton key={item.href} component="a" href={item.href} onClick={cerrarMenu}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}
