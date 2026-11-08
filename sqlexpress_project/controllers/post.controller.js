const Post = require("../models/post.model");
const User = require("../models/user.model");
const multer = require("multer");
const path = require("path"); // Add this to handle file extensions
const storage = multer.diskStorage({
  destination: "./public/uploads/", // fixed
  filename: (_req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname),
    );
  },
});
// cat.png
// cat_5345645646.png

const upload = multer({
  storage: storage,
}).single("photo"); // photo is file name(table column name)

exports.index = async (req, res) => {
  try {
    const userId = req.session.userId;
    const page = parseInt(req.query.page) || 1;
    console.log("page :>> ", page);
    const limit = 3;
    const offset = (page - 1) * limit;
    const posts = await Post.getAuthorPosts(userId, limit, offset);
    const totalPosts = await Post.countAuthorPosts(userId);
    const totalPages = Math.ceil(totalPosts / limit);

    res.render("posts/list", {
      posts: posts || [],
      title: "Post List",
      currentPage: page,
      totalPages,
      baseUrl: "/posts",
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).send("Server Error");
  }
};

exports.showCreateForm = async (_req, res) => {
  try {
    // const users = await User.getAll(); // get from db
    // console.log("users for create post", users);
    res.render("posts/create", { title: "Create New Post" });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Server Error");
  }
};

exports.create = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error("Error uploading photo:", err);
      return res.status(500).send("Error uploading photo");
    }
    const { user_id, title, content } = req.body;
    const photo = req.file ? req.file.filename : null;
    try {
      await Post.create(user_id, title, content, photo);
      res.redirect("/posts");
    } catch (error) {
      console.error("Error creating post:", error);
      res.status(500).send("Server Error");
    }
  });
};

exports.showEditForm = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    console.log("post", post);
    if (!post) {
      return res.status(404).send("Post not found");
    }
    const users = await User.getAll();
    res.render("posts/edit", { post, users, title: "Edit Post" });
  } catch (error) {
    console.error("Error fetching post:", error);
    res.status(500).send("Server Error");
  }
};
exports.update = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error("Error uploading photo:", err);
      return res.status(500).send("Error uploading photo");
    }
    const { title, content, user_id, oldPhoto } = req.body;
    const photo = req.file ? req.file.filename : oldPhoto;
    try {
      await Post.update(req.params.id, title, content, photo, user_id);

      res.redirect("/posts");
    } catch (error) {
      console.error("Error updating post:", error);
      res.status(500).send("Server Error");
    }
  });
};
exports.delete = async (req, res) => {
  try {
    await Post.delete(req.params.id);
    res.redirect("/posts");
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).send("Server Error");
  }
};
// Post Search
exports.search = async (req, res) => {
  try {
    const q = req.query.q || "";
    const page = parseInt(req.query.page) || 1;
    const limit = 3;
    const offset = (page - 1) * limit;
    const posts = await Post.search(q, limit, offset);
    const totalPosts = await Post.countSearch(q);
    const totalPages = Math.ceil(totalPosts / limit);
    res.render("posts/list", {
      posts,
      title: `Search Results for '${q}'`,
      currentPage: page,
      totalPages,
      baseUrl: `/posts/search?q=${encodeURIComponent(q)}`,
    });
  } catch (error) {
    console.error("Error searching posts:", error);
    res.status(500).send("Server Error");
  }
};

exports.details = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).send("Post not found");
    res.render("posts/details", { post, title: post.title });
  } catch (error) {
    console.error("Error fetching post details:", error);
    res.status(500).send("Server Error");
  }
};

exports.uploadImage = (req, res) => {
  const imageUpload = multer({
    storage: storage,
  }).single("image");
  imageUpload(req, res, function (err) {
    if (err) {
      return res.status(500).json({ error: "Image upload failed" });
    }
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    const imageUrl = `/uploads/${req.file.filename}`;
    res.status(200).json({ url: imageUrl });
  });
};
