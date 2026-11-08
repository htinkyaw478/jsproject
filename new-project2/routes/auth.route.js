const express = require("express");
const router = express.Router();
const { login, register } = require("../controllers/auth.controller");

// post is a http method(form action)
// (/register) is a route
// register is a handler function
router.post("/register", register); // /api/v1/auth/register
router.post("/login", login); // /api/v1/auth/login

module.exports = router;
