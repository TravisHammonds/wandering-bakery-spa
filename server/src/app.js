const express = require("express");
const app = express();
const productsRouter = require("./products/products.router");

app.use(express.json());

app.use("/products", productsRouter);
app.get("/", (req, res) => {
  res.send( "Hello from Express!" );
});
// Not found handler
app.use((req, res, next) => {
  next({ status: 404, message: `Not found: ${req.originalUrl}` });
});

// Error handler
app.use((error, req, res, next) => {
  console.error(error);
  const { status = 500, message = "Something went wrong!" } = error;
  res.status(status).json({ error: message });
});

module.exports = app;