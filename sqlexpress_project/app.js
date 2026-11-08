const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const helmet = require("helmet");
const session = require("express-session");
app.use(
  helmet({
    contentSecurityPolicy: false,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("./public"));
const Post = require("./models/post.model");
app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret_key_123",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
    },
  }),
);
app.use((req, res, next) => {
  res.locals.userId = req.session.userId; //important session key
  res.locals.userName = req.session.userName; //important session key
  res.locals.isLoggedIn = req.session.isLoggedIn; //important session key
  next();
});
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// route middleware
// prefix all user routes with /users
const userRoutes = require("./routes/user.routes");
app.use("/users", userRoutes);

const postRoutes = require("./routes/post.routes");
app.use("/posts", postRoutes);

app.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 3;
    const offset = (page - 1) * limit;
    const posts = await Post.getAll(limit, offset);
    const totalPosts = await Post.countAll();
    const totalPages = Math.ceil(totalPosts / limit);
    //   res.send("Welcome to Express with MySQL2 Pooling");
    res.render("index", {
      title: "Home",
      posts,
      currentPage: page,
      totalPages,
      baseUrl: "/",
    });
  } catch (error) {
    console.error("Error loading home page:", error);
    res.status(500).send("Server Error");
  }
});

const PORT = process.env.PORT || 3070;
const HOST = process.env.HOST || "localhost";
const END_POINT = process.env.END_POINT || `http://${HOST}:${PORT}`;

app.listen(PORT, () => {
  console.log(`Server is running on ${END_POINT}`);
});
// // user RESTApi
// const userApi = require("./api/UserApi");
// app.use("/api/v1/users", userApi)

// // // post RESTApi
// const postApi = require("./api/PostApi");
// app.use("/api/v1/posts", postApi)

// app.get("/", (req, res) => {
//   res.render("index2", { title: "Home", name:"John Doe" });// index.ejs
// });
// app.get("/about", (req, res) => {
//   res.render("about", { title: "About" });// about.ejs
// });
// Start the server
