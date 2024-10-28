// This file is the entry point for the server application. It starts the server and listens on a specified port.
const { PORT = 5000 } = process.env;

// Require the Express application and assign it to a variable named app.
const app = require("./app");

// Create a listener that logs a message to the console when the server is running.
const listener = () => console.log(`Listening on Port ${PORT}!`);

// Tell the app to listen on the specified port and run the listener function.
app.listen(PORT, listener);
