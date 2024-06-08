// controllers/userController.js
const data = require("../data/data");

const userController = {
  searchFlight: (req, res) => {
    const { name, date, flightNumber } = req.query;

    // Filter flights based on query parameters
    let flights = data.flights;
    if (name) {
      flights = flights.filter((flight) =>
        flight.name.toLowerCase().includes(name.toLowerCase())
      );
    }
    if (date) {
      flights = flights.filter((flight) => flight.date === date);
    }
    if (flightNumber) {
      flights = flights.filter(
        (flight) => flight.flightNumber === flightNumber
      );
    }

    res.status(200).json({ flights });
  },

  bookTicket: (req, res) => {
    const { flightNumber } = req.body;
    const flight = data.flights.find((f) => f.flightNumber === flightNumber);

    if (!flight) {
      return res.status(404).json({ message: "Flight not found" });
    }

    if (flight.bookedSeats >= 60) {
      return res.status(400).json({ message: "No seats available" });
    }

    flight.bookedSeats += 1;
    data.bookings.push({ userId: req.user.id, flightNumber });

    res.status(200).json({ message: "Ticket booked successfully", flight });
  },

  // Get all users
  getAllUsers: (req, res) => {
    res.status(200).json(data.users);
  },
};

module.exports = userController;
