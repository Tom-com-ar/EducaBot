import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import TarjetaCompetencia from "./components/TarjetaCompetencia";
import TarjetaTaller from "./components/TarjetaTaller";
import DashboardPage from "./pages/Dashboard";

const competencias = [
  {
    title: "Sumo",
    subtitle: "Choque y estrategia autónoma",
    description:
      "Robots diseñados para empujar al rival fuera del ring usando sensores y control preciso.",
    image: "/img/sumo.png",
  },
  {
    title: "Laberinto",
    subtitle: "Navegación inteligente",
    description:
      "Encuentra la salida con lógica, sensores y mapas mentales programados para el recorrido.",
    image: "/img/laberinto.png",
  },
  {
    title: "Fútbol",
    subtitle: "Partido de precisión móvil",
    description:
      "Pases, goles y defensa robótica en un reto donde la velocidad y la coordinación cuentan.",
    image: "/img/futbol.png",
  },
  {
    title: "Danza",
    subtitle: "Coreografía motriz y luces",
    description:
      "Presenta un show creativo con movimientos sincronizados, música y efectos visuales.",
    image: "/img/danza.png",
  },
];

const talleres = [
  {
    title: "Arduino",
    subtitle: "Electrónica práctica",
    description:
      "Aprende a conectar sensores, motores y pantallas para construir prototipos reales.",
    image: "/img/arduino.png",
  },
  {
    title: "IA con Python",
    subtitle: "Modelos inteligentes",
    description:
      "Crea tus primeros algoritmos de visión y clasificación con Python y aprendizaje automático.",
    image: "/img/python.png",
  },
  {
    title: "Diseño 3D",
    subtitle: "Modelado y fabricación",
    description:
      "Diseña piezas digitales y prepáralas para impresión 3D usando herramientas intuitivas.",
    image: "/img/dise%C3%B1o%203D.png",
  },
  {
    title: "Prototipado",
    subtitle: "Idea al producto",
    description:
      "Convierte un concepto en un prototipo funcional usando materiales, electrónica y pruebas.",
    image: "/img/prototipado.png",
  },
];

function getHashView() {
  if (typeof window === "undefined") return "home";
  const hash = window.location.hash.toLowerCase();
  return hash === "#dashboard" ? "dashboard" : "home";
}

export default function App({ modoOscuro, setModoOscuro }) {
  const [view, setView] = useState(getHashView);

  useEffect(() => {
    const onHashChange = () => setView(getHashView());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  if (view === "dashboard") {
    return <DashboardPage modoOscuro={modoOscuro} setModoOscuro={setModoOscuro} />;
  }

  return (
    <>
      <Navbar modoOscuro={modoOscuro} setModoOscuro={setModoOscuro} />
      <Hero />

      <Box component="section" id="catalogo" sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 4 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="overline"
            sx={{ color: "primary.light", letterSpacing: 1.4, mb: 1, display: "block" }}
          >
            Catálogos Educabot
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{ fontWeight: 800, mb: 2, maxWidth: 680, lineHeight: 1.05 }}
          >
            Competencias y talleres.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 5, maxWidth: 680 }}>
            Explora el catálogo completo de pruebas y experiencias educativas.
          </Typography>

          <Box component="section" id="competencias" className="grid-section">
            <Box sx={{ mb: 4 }}>
              <Typography variant="h3" component="h3" sx={{ fontWeight: 700, mb: 1 }}>
                Catálogo de competencias
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 640 }}>
                Cuatro pruebas diseñadas para desafiar la creatividad y el pensamiento técnico de cada
                equipo: Sumo, Laberinto, Fútbol y Danza.
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {competencias.map((item) => (
                <Grid item xs={12} sm={6} md={3} key={item.title}>
                  <Box className="fade-in-card" sx={{ height: "100%" }}>
                    <TarjetaCompetencia {...item} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Divider sx={{ my: { xs: 6, md: 8 }, borderColor: "rgba(148,163,184,0.18)" }} />

          <Box component="section" id="talleres" className="grid-section">
            <Box sx={{ mb: 4 }}>
              <Typography variant="h3" component="h3" sx={{ fontWeight: 700, mb: 1 }}>
                Catálogo de talleres
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 640 }}>
                Talleres prácticos para aprender Arduino, inteligencia artificial, diseño 3D y prototipado
                rápido con herramientas reales.
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {talleres.map((item) => (
                <Grid item xs={12} sm={6} md={3} key={item.title}>
                  <Box className="fade-in-card" sx={{ height: "100%" }}>
                    <TarjetaTaller {...item} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
