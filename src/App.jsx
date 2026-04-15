import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App({ modoOscuro, setModoOscuro }) {
  return (
    <>
      {/* Navbar fijo con navegación principal */}
      <Navbar modoOscuro={modoOscuro} setModoOscuro={setModoOscuro} />
      {/* Portada del sitio (RF2) */}
      <Hero />

      {/* RF3: cuadrícula responsiva de competencias y talleres */}
    </>
  );
}
