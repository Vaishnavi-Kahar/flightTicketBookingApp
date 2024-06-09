require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const authRoutes = require("./routes/authRoutes");
const authenticateAdmin = require("./middlewares/authenticateAdmin");
const authenticateUser = require("./middlewares/authenticateUser");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

//mongoDB connection
mongoose.connect(MONGO_URL);

app.use(bodyParser.json());

app.use("/", authRoutes); //for login and signup

app.use("/user", authenticateUser, userRoutes);
app.use("/admin", authenticateAdmin, adminRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
