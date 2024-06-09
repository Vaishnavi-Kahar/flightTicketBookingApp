const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.get("/allAdmins", adminController.getAllAdmins);
router.get("/allUsers", adminController.getAllUsers);

router.post("/addFlight", adminController.addFlight);
router.get("/viewBookings", adminController.viewBookings);

module.exports = router;
