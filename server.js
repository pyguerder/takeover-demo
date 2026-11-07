const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Sert le fichier index.html à la racine
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
