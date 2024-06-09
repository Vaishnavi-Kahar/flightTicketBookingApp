const jwt = require("jsonwebtoken");
require("dotenv").config();
const passKey = process.env.JWT_SECRET;

const authenticateAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1] || req.query.token;

  if (token) {
    jwt.verify(token, passKey, (err, decoded) => {
      if (err) {
        res.status(401).json({ message: "Invalid token" });
      } else if (decoded.role !== "admin") {
        res.status(403).json({ message: "Forbidden: Not an admin" });
      } else {
        req.admin = decoded;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "Token not provided" });
  }
};

module.exports = authenticateAdmin;
