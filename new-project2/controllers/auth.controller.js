const bcrypt = require("bcryptjs");
const axios = require("axios");
const { generateToken } = require("../utils/jwt");
const API = "http://localhost:3003/users"; //json-server port
const register = async (req, res) => {
  // console.log(req.body)
  const { username, email, password } = req.body;
  // add validation
  if (!email || !password) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }
  // add password length validation
  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters long" });
  }
  // add email validation
  if (!email.includes("@")) {
    return res.status(400).json({ message: "Invalid email address" });
  }
  // add username validation
  if (username && username.length < 3) {
    return res
      .status(400)
      .json({ message: "Username must be at least 3 characters long" });
  }
  try {
    const existingUsers = await axios.get(API); // check user
    console.log("existingUsers", existingUsers);
    const user = existingUsers.data.find((u) => u.email === email);
    if (user) {
      return res.status(400).json({
        message: "User Already Exist",
        response: "User Registration Failed",
      });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // create user
    const newUser = {
      username: username ?? email.split("@")[0], // ["user123", "gmail.com"]
      email,
      password: hashedPassword,
    };
    await axios.post(API, newUser);
    res.json({ data: newUser, message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user" });
  }
};
// login
const login = async (req, res) => {
  // console.log(req.body)
  const { email, password } = req.body;
  try {
    const existingUsers = await axios.get(API);
    const user = existingUsers.data.find((u) => u.email === email);
    console.log("user", user);
    if (user === undefined) {
      res.status(401).json({ message: "User Not Register" });
    }
    // compare password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      res.status(400).json({ message: "Email And Password Do Not Match" });
    }
    const token = generateToken(user);
    res.send({ token }); // token // jwt-io
  } catch (error) {
    res.status(500).json({ message: "Error logging in" });
  }
};
module.exports = { login, register };
