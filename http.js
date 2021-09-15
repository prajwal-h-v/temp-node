const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req.url);
  if (req.url === "/") {
    res.end("Hello, Welcome to our home page.");
  } else {
    res.end(`
  <h1>OOPS!!</h1>
  <p>Cannot find page you are looking for.</p>
  <a href="/" style="text-decoration:none; border:1px solid red; color:white; background-color:black; padding:6px; border-radius: 2em;"> Back to home</a>
  `);
  }
});

server.listen(5000);
