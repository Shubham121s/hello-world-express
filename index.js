
const express = require("express");
const app = express();

// Define the port number the server will listen on
const port = 3000;

// Define a route for GET requests to /hello
app.get('/hello', (req, res) => {
  // Send a response with status code 200 and the text 'hello world'
  res.status(200).send("hello world");
});

// Start the server and listen on the defined port
app.listen(port, () => {
  // Log a message to the console when the server is running
  console.log("Hello World")
  console.log(`App listening at port no-:${port}`);
});
