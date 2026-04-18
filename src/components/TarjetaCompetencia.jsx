import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

function TarjetaCompetencia({ title, subtitle, description, image }) {
  return (
    <Card
      className="ui-card"
      sx={{ width: 320, maxWidth: "100%", height: "100%", display: "flex", flexDirection: "column" }}
    >
      {image && (
        <CardMedia
          component="img"
          src={image}
          alt={title}
          sx={{ height: 180, objectFit: "cover" }}
        />
      )}
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 2 }}>
          <Box>
            <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 1 }}>
              Competencia
            </Typography>
            <Typography variant="h6" component="h3" sx={{ fontWeight: 800, mt: 1 }}>
              {title}
            </Typography>
          </Box>
          <Chip label="Reto" size="small" className="card-chip" />
        </Box>

        <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 600 }}>
          {subtitle}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1, flexGrow: 1 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TarjetaCompetencia;
