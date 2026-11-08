const express = require("express");
const app = express();

const PORT = 3000;
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "[EMAIL_ADDRESS]",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "[EMAIL_ADDRESS]",
  },
  {
    id: 3,
    name: "Jane Doe",
    email: "[EMAIL_ADDRESS]",
  },
];
// routes,params
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});
app.get("/users", (req, res) => {
  res.status(200).send(users);
});
app.get("/users/:userID/posts/:postID/comments/:commentID", (req, res) => {
  //   console.log(req.params);
  const { userID, postID, commentID } = req.params;
  console.log(`UserID:${userID}, PostID:${postID}, CommentID:${commentID}`);
  res.send(`UserID:${userID}, PostID:${postID}, CommentID:${commentID}`);
});
// optional params
app.get("/posts{/:postID}", (req, res) => {
  const { postID } = req.params;
  if (postID) {
    res.send(`<h1>Posts/${postID}</h1>`);
  } else {
    res.send("<h1>All Posts</h1>");
  }
});

// query parameters
app.get("/search", (req, res) => {
  console.log(req.query);
  const { name, age } = req.query;
  res.send(`<h1>Name is ${name ?? "htinkyaw"} , Age is ${age ?? "24"}</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port.http://localhost:${PORT}`);
});
