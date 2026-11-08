const http = require("http");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5600;
const HOST = process.env.HOST || "localhost";
const users = [
  { id: 1, name: "bobo", email: "bobo@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "rose", email: "rose@example.com" },
];
const server = http.createServer((req, res) => {
  console.log(`Requested URL: ${req.url}`);
  console.log(`Requested Host: ${req.headers.host}`);
  // Normalize the URL
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  // console.log("parsedUrl =>", parsedUrl)
  const pathname = parsedUrl.pathname;
  console.log("pathname =>", pathname);
  switch (pathname) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.createReadStream(path.join(__dirname, "views", "index.html")).pipe(
        res,
      );
      break;
    case "/about":
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.createReadStream(path.join(__dirname, "views", "about.html")).pipe(
        res,
      );
      break;
    case "/login":
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.createReadStream(path.join(__dirname, "views", "login.html")).pipe(
        res,
      );
      break;
    case "/register":
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.createReadStream(path.join(__dirname, "views", "register.html")).pipe(
        res,
      );
      break;
    case "/users":
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(users));
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      fs.createReadStream(path.join(__dirname, "views", "404.html")).pipe(res);
      break;
  }
});
server.listen(PORT, console.log(`server running at http://${HOST}:${PORT}`));
