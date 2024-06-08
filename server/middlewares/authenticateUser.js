const jwt = require("jsonwebtoken");
const passKey = "1234";

const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1] || req.query.token;

  if (token) {
    jwt.verify(token, passKey, (err, decoded) => {
      if (err) {
        res.status(401).json({ message: "Invalid token" });
      } else if (decoded.role !== "user") {
        res.status(403).json({ message: "Forbidden: Not a user" });
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "Token not provided" });
  }
};

module.exports = authenticateUser;
