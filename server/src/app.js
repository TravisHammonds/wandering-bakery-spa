const morgan = require("morgan");

//You require the Express package and assign it to a variable.
const express = require("express");

//The Express package exports a function. When you invoke that function, you get a new Express application
// and assign it to a variable.
const app = express();

//You export the Express application to be used in the server.js file.
module.exports = app;

app.use(morgan("dev"));

//This is a route handler that listens for GET requests made to the /hello path.
app.get("/hello", (req, res) => {
  console.log(req.query);
  const name = req.query.name;
  const content = name ? `Hello, ${name}!` : "Hello!";
  res.send(content);
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.send(err);
});
