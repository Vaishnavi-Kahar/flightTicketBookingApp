const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Admin = require("../models/Admin");
const passKey = process.env.JWT_SECRET;

const authController = {
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username, password });
      const admin = await Admin.findOne({ username, password });

      if (user || admin) {
        const payload = { username, role: user ? "user" : "admin" };
        const token = jwt.sign(payload, passKey);

        res.status(200).json({ message: "Login successful", token });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "An error occurred", error: error.message });
    }
  },
  signup: async (req, res) => {
    try {
      const { username, password } = req.body;

      const existingUser = await User.findOne({ username });
      const existingAdmin = await Admin.findOne({ username });
      if (existingUser || existingAdmin) {
        res.status(409).json({ message: "Username already exists" });
      } else {
        const newUser = new User({ username, password });
        await newUser.save();
        res.status(201).json({ message: "User signup successful", newUser });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "An error occurred", error: error.message });
    }
  },
};

module.exports = authController;
