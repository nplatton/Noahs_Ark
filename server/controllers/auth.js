require("dotenv").config();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

import User from "../models/User";

async function login(req, res) {
  try {
  } catch (err) {
    res.status(500).json({ err });
  }
}

async function register(req, res) {
  try {
  } catch (err) {
    res.status(500).json({ err });
  }
}

export default { login, register };
