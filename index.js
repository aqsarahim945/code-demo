const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const message = process.env.MESSAGE || 'Hello World';

app.get('/', (req, res) => {
  res.send(message);
});

app.get('/helloMars', (req, res) => res.send('Hello Mars!'));
app.get('/helloEarth', (req, res) => res.send('Hello Earth!'));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

