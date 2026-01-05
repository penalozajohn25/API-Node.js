const express = require('express');
const path = require('path');
const { erroLogs, handlerError } = require('./middleware/error.handler');
const apiRouter = require('./server');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hola mundo!');
});

app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/frontend', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

apiRouter(app);
app.use(handlerError);
app.use(erroLogs);

app.listen(port, (req, res) => {
  console.log(`Puerto escuchado en el ${port}`);
})
