const getSessionFlash = (req) => {
  const old = req.session ? req.session.old || {} : {};
  const message = req.session ? req.session.message || null : null;
  if (req.session) {
    delete req.session.old;
    delete req.session.message;
  }
  return { old, message };
};

const checkUserAccess = (req, res, user, viewPath, title) => {
  if (user === undefined || user.length === 0) {
    res.render(viewPath, {
      title,
      message: "User not found",
      old: null,
      user: null,
    });
    return false;
  }
  if (req.session.userId !== user.id) {
    res.render(viewPath, {
      title,
      message: "You are not authorized to view this profile",
      old: null,
      user: null,
    });
    return false;
  }
  return true;
};

module.exports = {
  getSessionFlash,
  checkUserAccess,
};
