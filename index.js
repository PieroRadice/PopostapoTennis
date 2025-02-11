const express = require("express");
const app = express();
const path = require("path");

// Imposta la cartella 'public' come directory per i file statici
app.use(express.static(path.join(__dirname, "public")));
// Restituisce il file index.html quando si visita la root (/)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
// Avvia il server
app.listen(3000, () => {
  console.log("Server in ascolto sulla porta 3000");
});
