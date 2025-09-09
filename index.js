const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const message = process.env.MESSAGE || 'Hello Devops';

app.get('/', (req, res) => {
  res.send(message);
});

app.get('/hellotech', (req, res) => res.send('Hello Tech!'));
app.get('/helloEarth', (req, res) => res.send('Hello Earth!'));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

