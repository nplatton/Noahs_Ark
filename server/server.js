const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => res.send("Welcome to Noahs-Ark"));

const authRoutes = require("./routes/auth");
server.use("/", authRoutes);

module.exports = server;
