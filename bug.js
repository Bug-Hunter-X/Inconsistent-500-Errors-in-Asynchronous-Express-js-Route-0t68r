const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might fail
  setTimeout(() => {
    // Simulate a random error
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      res.status(500).send('Internal Server Error');
    } else {
      res.send('Hello World!');
    }
  }, 1000);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});