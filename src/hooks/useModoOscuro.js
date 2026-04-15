import { useEffect, useState } from "react";

function useModoOscuro() {
  const [modoOscuro, setModoOscuro] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("modoOscuro") || "dark";
  });

  useEffect(() => {
    localStorage.setItem("modoOscuro", modoOscuro);
  }, [modoOscuro]);

  return [modoOscuro, setModoOscuro];
}

export default useModoOscuro;
