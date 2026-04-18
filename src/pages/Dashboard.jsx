import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Dashboard from "../components/Dashboard";

export default function DashboardPage({ modoOscuro, setModoOscuro }) {
  return (
    <>
      <Navbar modoOscuro={modoOscuro} setModoOscuro={setModoOscuro} />
      <Container maxWidth="xl" sx={{ mt: 4, mb: 6 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 800, mb: 3 }}>
          Panel de inscripciones
        </Typography>
        <Dashboard />
      </Container>
      <Footer />
    </>
  );
}
