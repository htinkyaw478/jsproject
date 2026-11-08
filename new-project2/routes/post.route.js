const express = require("express");
const router = express.Router();
const postController = require("../controllers/posts.controller");
const auth = require("../middleware/auth.middleware");

router.get("/", postController.allPosts); // /api/v1/posts (get)
router.get("/:id", postController.postById); // /api/v1/posts/5
router.post("/", auth, postController.createPost); // /api/v1/posts (post)
// // to edit (PUT || PATCH )
// // put for full data
// // patch for partial data
router.put("/:id", auth, postController.updatePost); // /api/v1/posts/:id (put)
router.delete("/:id", auth, postController.deletePost); // /api/v1/posts/:id (delete)

module.exports = router;
