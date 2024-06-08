const jwt = require("jsonwebtoken");
const passKey = "1234";
//in-memory data
let users = require("../data/data").users;
let admins = require("../data/data").admins;

const authController = {
  login: (req, res) => {
    const { username, password } = req.body;
    // Check if user or admin exists and credentials are correct
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    const admin = admins.find(
      (u) => u.username === username && u.password === password
    );

    if (user || admin) {
      // Generate JWT token with user or admin information
      const payload = { username, role: user ? "user" : "admin" };
      const token = jwt.sign(payload, passKey);

      res.status(200).json({ message: "Login successful", token });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  },
  signup: (req, res) => {
    const { username, password } = req.body;
    const existingUser = users.find((u) => u.username === username);
    const existingAdmin = admins.find((a) => a.username === username);

    if (existingUser || existingAdmin) {
      res.status(409).json({ message: "Username already exists" });
    } else {
      const newUser = { id: users.length + 1, username, password };
      users.push(newUser);
      res.status(201).json({ message: "User signup successful", newUser });
    }
  },
};

module.exports = authController;
