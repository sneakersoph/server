const express = require('express');
const app = express();
const port = 3000; // You can use any available port

// Route for the homepage
app.get('/', (req, res) => {
  res.send('Hello, World! This is my first Node.js server using Express.');
});

// Listen on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
