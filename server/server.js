const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors("*"));
server.use(express.json());

server.get("/", (req, res) => res.send("Welcome to Noahs-Ark"));

// Test route
const User = require("./models/User");
server.get("/users/:name", (req, res) => {
  const user = User.findByUsername(req.params.name);
  res.json(user);
});

const authRoutes = require("./routes/auth");
server.use("/auth", authRoutes);

module.exports = server;
