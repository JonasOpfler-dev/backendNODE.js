const express = require('express');
const app = express();

// Routen-Handler für die Hauptseite
app.get('/', (req, res) => {
  res.status(200).json({ message: "Hallo, Welt!" });
});

// Dynamischen Port von Render verwenden oder Standardport (3000) lokal
const port = process.env.PORT || 3000;

// Server starten und auf den angegebenen Port hören
app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
