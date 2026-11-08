// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const { protect } = require("../middleware/auth.middleware");
//*prefix -> users/
//*method

router.get("/", userController.allUsers); //users
router.get("/register", userController.showRegisterForm); // /users/register (GET)
router.post("/register", userController.register); // users/register (POST)
router.get("/login", userController.showLoginForm); // /users/login (GET)
router.post("/login", userController.login); // users/login (POST)
router.get("/logout", userController.logout);
router.get("/profile/:id", protect, userController.showProfile);
router.get("/edit/:id", protect, userController.showEditForm); // /users/edit/2
router.post("/update/:id", userController.update); // /users/update/2/
router.post("/delete/:id", userController.delete); // /users/delete/2

module.exports = router;
