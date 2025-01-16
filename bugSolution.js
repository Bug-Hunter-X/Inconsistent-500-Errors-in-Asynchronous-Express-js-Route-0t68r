const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    try {
      // Simulate a random error
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        throw new Error('Simulated Random Error');
      } 
      res.send('Hello World!');
    } catch (error) {
      console.error('Error occurred:', error);
      res.status(500).send('Internal Server Error');
    }
  }, 1000);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});