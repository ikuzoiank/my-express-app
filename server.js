const express = require('express');
const dotenv = require('dotenv');
// Added
const exampleRoute = require("./routes/example.routes")
const todoRoutes = require('./routes/todo.routes'); // 1. NEW: Import the Todo routes

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware — parses incoming JSON requests
app.use(express.json());

// Route — responds to GET /
app.get('/', (req, res) => {
  res.json({
    message: 'Server is running!',
    status: 'OK'
  });
});

// Added
app.use("/example", exampleRoute)
app.use("/api/todos", todoRoutes); // 2. NEW: Link the Todo routes to a URL path

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

