const Flight = require("../models/Flight");
const Booking = require("../models/Booking");
const User = require("../models/User");

const userController = {
  searchFlight: async (req, res) => {
    const { name, date, flightNumber } = req.body;
    let query = {};

    if (name) query.name = name;
    if (date) query.date = new Date(date);
    if (flightNumber) query.flightNumber = flightNumber;

    try {
      const flights = await Flight.find(query);
      res.status(200).json(flights);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Error searching for flights", error: err });
    }
  },

  bookTicket: async (req, res) => {
    const { flightNumber, seats } = req.body;
    const username = req.user.username;

    try {
      const flight = await Flight.findOne({ flightNumber });
      if (!flight) {
        return res.status(404).json({ message: "Flight not found" });
      }

      if (flight.bookedSeats + seats > 60) {
        return res.status(400).json({ message: "Not enough available seats" });
      }

      const newBooking = new Booking({ username, flightNumber, seats });
      await newBooking.save();

      flight.bookedSeats += seats;
      await flight.save();

      res
        .status(201)
        .json({ message: "Ticket booked successfully", booking: newBooking });
    } catch (err) {
      res.status(500).json({ message: "Error booking ticket", error: err });
    }
  },
};

module.exports = userController;
