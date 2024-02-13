const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const movieRouter = require('./routes/movie-router');
const client = require('prom-client');

const app = express();
const apiPort = 8000;

// Inicia la colección de métricas y las expone en el path /metrics
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ prefix: 'myapp_' });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Ruta para exponer las métricas
app.get('/metrics', async (req, res) => {
    res.set('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
});

app.use('/api', movieRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
