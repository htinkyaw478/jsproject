// routes/postRoutes.js
const express = require("express");
const postController = require("../controllers/post.controller");
const { protect } = require("../middleware/auth.middleware");

const router = express.Router();
// prefix-> /posts
router.get("/", protect, postController.index); //!posts
router.get("/create", protect, postController.showCreateForm); //! /posts/create (GET)
router.post("/create", protect, postController.create); //! posts/create (POST)
router.get("/edit/:id", protect, postController.showEditForm); // /posts/edit/2
router.post("/update/:id", protect, postController.update); // /posts/update/2
router.post("/delete/:id", protect, postController.delete); // /posts/delete/2
router.get("/search", postController.search); // /posts/search?q=xxx
// router.get('/:id', postController.details); // /posts/:id
// router.post('/upload-image', postController.uploadImage); // for QuillJS image upload

module.exports = router;
