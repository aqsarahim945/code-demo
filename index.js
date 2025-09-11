const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const message = process.env.MESSAGE || 'Hello inara';

app.get('/', (req, res) => {
  res.send(message);
});

<<<<<<< HEAD
app.get('/helloinara', (req, res) => res.send('Hello Inara!'));
=======
app.get('/hellotech', (req, res) => res.send('Hello Tech!'));
>>>>>>> 4f50c468a938951b82e6a86ffd1020eaed00abe0
app.get('/helloEarth', (req, res) => res.send('Hello Earth!'));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

