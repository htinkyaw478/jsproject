const http = require("http");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
const host = process.env.HOST;
const user = [
  { id: 1, username: "htet", age: 25 },
  { id: 2, username: "kyaw", age: 26 },
  { id: 3, username: "hlaing", age: 27 },
];

const server = http.createServer((req, res) => {
  const { url, method } = req;
  //   console.log(url, "==>", method);
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>Home Page</h1>`);
  } else if (url === "/users") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(user));
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>About Page</h1>`);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(`<h1>404 Not Found</h1>`);
  }
});

server.listen(port, () =>
  console.log(`Server is running on http://${host}:${port}`),
);
