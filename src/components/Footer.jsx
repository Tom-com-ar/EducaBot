import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid rgba(148,163,184,0.16)",
        background: "rgba(5,8,16,0.98)",
        py: 5,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
            Educabot
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 360 }}>
            Plataforma de competencias y talleres educativos. Resultados y registro en un solo lugar.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="#inicio" color="inherit" underline="hover">
            Inicio
          </Link>
          <Link href="#competencias" color="inherit" underline="hover">
            Competencias
          </Link>
          <Link href="#talleres" color="inherit" underline="hover">
            Talleres
          </Link>
          <Link href="#dashboard" color="inherit" underline="hover">
            Dashboard
          </Link>
        </Box>

        <Typography variant="body2" color="text.secondary">
          © 2026 Educabot. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
