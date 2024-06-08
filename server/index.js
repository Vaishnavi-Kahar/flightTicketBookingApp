const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const authRoutes = require("./routes/authRoutes");
const authenticateAdmin = require("./middlewares/authenticateAdmin");
const authenticateUser = require("./middlewares/authenticateUser");
const app = express();
const PORT = 3000;
app.use(bodyParser.json());

app.use("/", authRoutes); //for login and signup

app.use("/user", authenticateUser, userRoutes);
app.use("/admin", authenticateAdmin, adminRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
