import { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Box,
  Typography,
} from "@mui/material";
import useIndexedDB from "../hooks/useIndexedDB";

const actividades = [
  "Sumo",
  "Laberinto",
  "Fútbol",
  "Danza",
  "Arduino",
  "IA con Python",
  "Diseño 3D",
  "Prototipado",
];

function FormularioInscripcion() {
  const { agregarInscripcion } = useIndexedDB();

  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    actividad: "",
    tipo: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.nombre || !form.correo || !form.actividad || !form.tipo) {
      alert("Completá todos los campos");
      return;
    }

    const nuevaInscripcion = {
      ...form,
      fecha: new Date().toLocaleDateString(),
      estado: "Confirmado",
    };

    await agregarInscripcion(nuevaInscripcion);

    alert("Inscripción guardada");

    setForm({
      nombre: "",
      correo: "",
      actividad: "",
      tipo: "",
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      
      <TextField
        label="Nombre"
        name="nombre"
        value={form.nombre}
        onChange={handleChange}
        fullWidth
      />

      <TextField
        label="Correo"
        name="correo"
        type="email"
        value={form.correo}
        onChange={handleChange}
        fullWidth
      />

      <TextField
        select
        label="Actividad"
        name="actividad"
        value={form.actividad}
        onChange={handleChange}
        fullWidth
      >
        {actividades.map((act) => (
          <MenuItem key={act} value={act}>
            {act}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="Tipo"
        name="tipo"
        value={form.tipo}
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value="Competencia">Competencia</MenuItem>
        <MenuItem value="Taller">Taller</MenuItem>
      </TextField>

      <Button type="submit" variant="contained" size="large">
        Inscribirse
      </Button>
    </Box>
  );
}

export default FormularioInscripcion;