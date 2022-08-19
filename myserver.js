//myserver.js

const express = require("express");
const app = express();

const logRequest = function(req, res, next) {
  console.log('Request: ${req.method} for ${req.path}');
  next();
};

app.use(logRequest);

//serve static files from the public dir
app.get(express.static("public"));

//listen for specific GET request
app.get("/hello", function(req, res) {
  const html = '<h1>Hello, ${req.query.userId}</h1><p>You are ${req.query.password} years old.</p>';
  res.send(html);
});

//start the web server
app.listen(3000, function() {
  console.log("Listening on port 3000...");
});

