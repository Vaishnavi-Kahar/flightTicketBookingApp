// controllers/userController.js
const data = require("../data/data");

const userController = {
  searchFlight: (req, res) => {
    // Logic to search for flights
    res.status(200).json({ message: "Search for flights" });
  },
  bookTicket: (req, res) => {
    // Logic to book tickets
    res.status(200).json({ message: "Book ticket" });
  },

  // Get all users
  getAllUsers: (req, res) => {
    res.status(200).json(data.users);
  },
};

module.exports = userController;
