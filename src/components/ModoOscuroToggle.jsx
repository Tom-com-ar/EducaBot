import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

function ModoOscuroToggle({ modoOscuro, onToggle }) {
  return (
    <Tooltip title={modoOscuro === "dark" ? "Activar modo claro" : "Activar modo oscuro"}>
      <IconButton color="inherit" onClick={onToggle} aria-label="cambiar modo oscuro">
        {modoOscuro === "dark" ? "☀️" : "🌙"}
      </IconButton>
    </Tooltip>
  );
}

export default ModoOscuroToggle;
