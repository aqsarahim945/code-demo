const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const message = process.env.MESSAGE || 'Hello Universe';

app.get('/', (req, res) => {
  res.send(message);
});

app.get('/hellouniverse', (req, res) => res.send('Hello Universe!'));
app.get('/helloEarth', (req, res) => res.send('Hello Earth!'));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

