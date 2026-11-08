const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json()); // carry req.body data

const postRoutes = require("./routes/post.route");
const authRoutes = require("./routes/auth.route");

app.use("/api/v1/posts", postRoutes); // localhost:3000/api/v1/posts
app.use("/api/v1/auth", authRoutes); // localhost:3000/api/v1/auth

app.get("/", (req, res) => {
  res.send("API is running");
});

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";
app.listen(PORT, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
