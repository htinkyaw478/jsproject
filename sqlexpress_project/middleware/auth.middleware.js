// middleware/auth.middleware.js
const protect = (req, res, next) => {
  if (req.session.isLoggedIn) {
    next();
  } else {
    res.redirect("/users/login");
  }
};

module.exports = { protect };
