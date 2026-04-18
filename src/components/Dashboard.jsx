import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

const inscripcionesGuardadas = [

];

function Dashboard() {
  return (
    <Box component="section" id="dashboard" sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 4 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" sx={{ color: "secondary.light", letterSpacing: 1.5, mb: 1, display: "block" }}>
          Dashboard de inscripciones
        </Typography>
        <Typography variant="h2" component="h2" sx={{ fontWeight: 800, mb: 2, maxWidth: 720, lineHeight: 1.05 }}>
          Inscripciones guardadas
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 720 }}>
          Esta área mostrará las inscripciones registradas en el sistema. Agrega los datos al arreglo
          `inscripcionesGuardadas` para verlos reflejados en la tabla.
        </Typography>

        {inscripcionesGuardadas.length === 0 ? (
          <Paper
            elevation={0}
            sx={{
              p: 4,
              border: "1px solid rgba(148,163,184,0.18)",
              background: "rgba(15,23,42,0.9)",
            }}
          >
            <Typography variant="h6" sx={{ mb: 1, color: "primary.light" }}>
              No hay inscripciones guardadas aún
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Cuando se carguen registros, aparecerán aquí con nombre, correo, actividad, fecha y estado.
            </Typography>
          </Paper>
        ) : (
          <TableContainer
            component={Paper}
            sx={{ background: "rgba(15,23,42,0.9)", border: "1px solid rgba(148,163,184,0.18)" }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: "primary.light" }}>Nombre</TableCell>
                  <TableCell sx={{ color: "primary.light" }}>Correo</TableCell>
                  <TableCell sx={{ color: "primary.light" }}>Actividad</TableCell>
                  <TableCell sx={{ color: "primary.light" }}>Tipo</TableCell>
                  <TableCell sx={{ color: "primary.light" }}>Fecha</TableCell>
                  <TableCell sx={{ color: "primary.light" }}>Estado</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {inscripcionesGuardadas.map((inscripcion, index) => (
                  <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell>{inscripcion.nombre}</TableCell>
                    <TableCell>{inscripcion.correo}</TableCell>
                    <TableCell>{inscripcion.actividad}</TableCell>
                    <TableCell>{inscripcion.tipo}</TableCell>
                    <TableCell>{inscripcion.fecha}</TableCell>
                    <TableCell>{inscripcion.estado}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
    </Box>
  );
}

export default Dashboard;
