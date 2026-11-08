// controllers/userController.js
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const { getSessionFlash, checkUserAccess } = require("../helpers/functions");

exports.allUsers = async (_, res) => {
  // local declears(In-Memory Database(Mock Database))
  // get all users from database
  const users = await User.getAll(); // get all users from database
  // console.log(users);
  res.render("user2/user", { users: users ?? [], title: "User Lists" }); // render to view(index.ejs)
};

exports.showRegisterForm = (req, res) => {
  const { old, message } = getSessionFlash(req);
  res.render("user2/register", { title: "Register", message, old });
};

// post
exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || name.trim().length === 0) {
    if (req.session) {
      req.session.old = { name, email, password };
      req.session.message = "Name Required";
      return res.redirect("/users/register");
    }
    return res.render("user2/register", {
      title: "Register",
      message: "Name Required",
      old: { name, email, password },
    });
  }

  if (!email || email.trim().length === 0) {
    if (req.session) {
      req.session.old = { name, email, password };
      req.session.message = "Email Required";
      return res.redirect("/users/register");
    }
    return res.render("user2/register", {
      title: "Register",
      message: "Email Required",
      old: { name, email, password },
    });
  }

  if (!password || password.length < 6) {
    if (req.session) {
      req.session.old = { name, email, password };
      req.session.message = "Password must be at least 6 characters";
      return res.redirect("/users/register");
    }
    return res.render("user2/register", {
      title: "Register",
      message: "Password must be at least 6 characters",
      old: { name, email, password },
    });
  }

  let user = await User.findByEmail(email);
  if (user) {
    if (req.session) {
      req.session.old = { name, email, password };
      req.session.message = "User already exists";
      return res.redirect("/users/register");
    }
    return res.render("user2/register", {
      title: "Register",
      message: "User already exists",
      old: { name, email, password },
    });
  }

  let result = await User.create(name, email, password);
  if (result) {
    if (req.session) {
      delete req.session.old;
      delete req.session.message;
    }
    res.redirect("/users/login");
  }
};

//* go to create page(users->create2.ejs)
exports.showLoginForm = (req, res) => {
  const { old, message } = getSessionFlash(req);
  res.render("user2/login", { title: "Login", message, old });
};

// login process
exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || email.trim().length === 0) {
    if (req.session) {
      req.session.old = { email, password };
      req.session.message = "Email Required";
      return res.redirect("/users/login");
    }
    return res.render("user2/login", {
      title: "Login",
      message: "Email Required",
      old: { email, password },
    });
  }

  if (!password || password.length < 6) {
    if (req.session) {
      req.session.old = { email, password };
      req.session.message = "Password must be at least 6 characters";
      return res.redirect("/users/login");
    }
    return res.render("user2/login", {
      title: "Login",
      message: "Password must be at least 6 characters",
      old: { email, password },
    });
  }
  let user = await User.findByEmail(email);
  if (!user) {
    if (req.session) {
      req.session.old = { email, password };
      req.session.message = "Email Not Registered";
      return res.redirect("/users/login");
    }
    return res.render("user2/login", {
      title: "Login",
      message: "Email Not Registered",
      old: { email, password },
    });
  }
  if (user) {
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      if (req.session) {
        req.session.old = { email, password };
        req.session.message = "Invalid password";
        return res.redirect("/users/login");
      }
      return res.render("user2/login", {
        title: "Login",
        message: "Invalid password",
        old: { email, password },
      });
    }
    if (req.session) {
      delete req.session.old;
      delete req.session.message;
      req.session.userId = user.id;
      req.session.userName = user.name;
      req.session.isLoggedIn = true;
    }
    return res.redirect("/");
  }
};

exports.showProfile = async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId);
  // console.log('user :>> ', user);

  if (!checkUserAccess(req, res, user, "user2/profile", "Profile")) {
    return;
  }

  const { old, message } = getSessionFlash(req);
  // console.log('user', user);
  res.render("user2/profile", { user, title: "Profile", message, old });
};
exports.showEditForm = async (req, res) => {
  const userId = req.params.id;
  // console.log('userId',userId);
  const user = await User.findById(userId);

  if (!checkUserAccess(req, res, user, "user2/edit", "Edit User")) {
    return;
  }

  const { old } = getSessionFlash(req);
  // console.log('user', user);
  res.render("user2/edit", { user, title: "Edit User", message: null, old });
};

exports.update = async (req, res) => {
  const userId = req.params.id;
  // console.log("userId", userId);
  const { name, email } = req.body;
  console.log("first", name, email, userId);
  await User.update(userId, name, email);
  res.redirect("/");
};

exports.delete = async (req, res) => {
  const userId = req.params.id;
  await User.delete(userId);
  return exports.logout(req, res);
};
exports.logout = async (req, res) => {
  if (req.session) {
    delete req.session.userId;
    delete req.session.userName;
    delete req.session.isLoggedIn;
  }
  res.redirect("/");
};
