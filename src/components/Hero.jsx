import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function Hero() {
  return (
    // Box = contenedor principal del Hero (una sección de portada).
    <Box
      id="inicio"
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: { xs: "72vh", md: "78vh" },
        display: "flex",
        alignItems: "center",
        py: { xs: 6, md: 10 },
        px: 2,
        background:
          "linear-gradient(180deg, rgba(5,8,16,0) 0%, rgba(5,8,16,0.85) 100%)," +
          "radial-gradient(ellipse 90% 60% at 50% -10%, rgba(34,211,238,0.22), transparent 55%)," +
          "radial-gradient(ellipse 70% 50% at 100% 20%, rgba(192,132,252,0.12), transparent 50%)",
      }}
    >
      {/* Container limita el ancho para que no se estire demasiado en pantallas grandes */}
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        {/* Stack ordena verticalmente los elementos con espacio uniforme */}
        <Stack spacing={3} alignItems="center" textAlign="center">
          {/* Chip de contexto rápido del evento */}
          <Chip
            label="15 — 17 oct 2026 · Centro de Convenciones Tecnológicas"
            color="primary"
            variant="outlined"
            sx={{
              borderColor: "primary.main",
              color: "primary.light",
              fontWeight: 600,
              letterSpacing: 0.3,
              backdropFilter: "blur(8px)",
            }}
          />

          {/* Título principal con gradiente */}
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontSize: { xs: "2rem", sm: "2.35rem", md: "2.75rem" },
              background: (t) =>
                `linear-gradient(135deg, ${t.palette.common.white} 0%, ${t.palette.primary.light} 55%, ${t.palette.secondary.light} 100%)`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Copa Robótica Educabot 2026
          </Typography>

          {/* Descripción corta del objetivo del evento */}
          <Typography
            variant="h6"
            component="p"
            sx={{
              color: "text.secondary",
              maxWidth: 560,
              fontWeight: 500,
            }}
          >
            Competencias, talleres prácticos y experiencias para futuros
            programadores. Una copa edtech con foco en robótica y desarrollo
            moderno.
          </Typography>

          {/* Botones de acción (CTA principal y secundario) */}
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ pt: 1 }}>
            <Button
              variant="contained"
              size="large"
              href="#inscripcion"
              sx={{
                px: 4,
                py: 1.5,
                boxShadow: "0 0 24px rgba(34, 211, 238, 0.35)",
                "&:hover": {
                  boxShadow: "0 0 36px rgba(34, 211, 238, 0.45)",
                },
              }}
            >
              Quiero inscribirme
            </Button>
            <Button variant="outlined" size="large" href="#competencias" color="secondary">
              Ver competencias
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Hero;
