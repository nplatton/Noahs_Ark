require("dotenv").config();

const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

// For the time being assume user logs in with username
async function login(req, res) {
  try {
    // Find user based on username/password
    const user = await User.findByUsername(req.body.username);
    if (!user) {
      throw new Error("No user with given username");
    }
    // We need to verify password
    const userPswrd = await user.getPassword();
    const authed = bcryptjs.compare(req.body.password, userPswrd);
    // Once verified log user in with JWT
    if (!!authed) {
      const payload = { username: user.username };
      // Sign token payload using secret from .env
      const token = jwt.sign(payload, process.env.SECRET, { expiresIn: 1000 });
      if (!token) {
        throw new Error("Error in token generation");
      }
      res.status(200).json({
        success: true,
        token: "Bearer " + token,
      });
    } else {
      throw new Error("User could not be authenticated");
    }
  } catch (err) {
    res.status(401);
  }
}

async function register(req, res) {
  try {
    // Encrypt new user's password
    const salt = await bcryptjs.genSalt();
    const hash = await bcryptjs.hash(req.body.password, salt);
    // Add user to the database
    await User.create({ ...req.body, password: hash });
    res.status(201).json({ msg: "User created!" });
  } catch (err) {
    res.status(500);
  }
}

module.exports = {
  login,
  register,
};
