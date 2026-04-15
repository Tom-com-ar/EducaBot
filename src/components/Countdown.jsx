import { useEffect, useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Countdown() {
  const targetDate = useMemo(() => new Date(2026, 9, 15, 10, 0, 0), []); // 15 oct 2026 10:00
  const [remaining, setRemaining] = useState(() => targetDate.getTime() - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setRemaining(targetDate.getTime() - Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (remaining <= 0) {
    return (
      <Box sx={{ mt: 3 }}>
        <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 700 }}>
          ¡El evento ya comenzó!
        </Typography>
      </Box>
    );
  }

  const seconds = Math.floor((remaining / 1000) % 60);
  const minutes = Math.floor((remaining / 1000 / 60) % 60);
  const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));

  const pad = (value) => String(value).padStart(2, "0");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 0.5,
        alignItems: "center",
        justifyContent: "center",
        mt: 2,
        px: { xs: 2, sm: 4 },
        py: { xs: 1, sm: 1.5 },
        borderRadius: 999,
        backgroundColor: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.18)",
      }}
    >
      <Typography variant="body1" sx={{ color: "primary.light", fontWeight: 700, fontSize: { xs: "0.95rem", sm: "1.1rem" } }}>
        Faltan
      </Typography>
      <Typography
        sx={{
          color: "text.primary",
          fontWeight: 800,
          letterSpacing: "0.05em",
          fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
          whiteSpace: "nowrap",
        }}
      >
        {days}d {pad(hours)}h {pad(minutes)}m {pad(seconds)}s
      </Typography>
    </Box>
  );
}

export default Countdown;
