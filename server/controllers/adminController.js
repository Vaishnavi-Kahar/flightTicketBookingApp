const data = require("../data/data");

const adminController = {
  addFlight: (req, res) => {
    // Logic to add a new flight
    res.status(200).json({ message: "Add flight" });
  },
  viewBookings: (req, res) => {
    // Logic to view bookings
    res.status(200).json({ message: "View bookings" });
  },
  getAllAdmins: (req, res) => {
    res.status(200).json(data.admins);
  },
};

module.exports = adminController;
