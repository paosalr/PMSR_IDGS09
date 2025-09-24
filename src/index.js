const express = require('express');
const app = express();

const PORT = 3000;

app.get('/evalseg', (req, res) => {
    res.send('¡Hola Mundo!');
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});