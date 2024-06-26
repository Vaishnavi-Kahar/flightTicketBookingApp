const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/searchFlight", userController.searchFlight);
router.post("/bookTicket", userController.bookTicket);

module.exports = router;
