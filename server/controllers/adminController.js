const Flight = require("../models/Flight");
const Booking = require("../models/Booking");
const Admin = require("../models/Admin");
const User = require("../models/User");

const adminController = {
  addFlight: async (req, res) => {
    const { flightNumber, name, date } = req.body;
    try {
      const existingFlight = await Flight.findOne({ flightNumber });
      if (existingFlight) {
        return res
          .status(409)
          .json({ message: "Flight number already exists" });
      }

      const newFlight = new Flight({ flightNumber, name, date });
      await newFlight.save();

      res.status(201).json({ message: "Flight added successfully", newFlight });
    } catch (err) {
      res.status(500).json({ message: "Error fetching users", error: err });
    }
  },
  viewBookings: async (req, res) => {
    const { flightNumber, name, date } = req.body;

    let query = {};
    if (flightNumber) query.flightNumber = flightNumber;

    const flights = await Flight.find(query);

    if (name) {
      const flight = flights.find(
        (f) => f.name.toLowerCase() === name.toLowerCase()
      );
      if (!flight) {
        return res.status(404).json({ message: "Flight name not found" });
      }
      query.flightNumber = flight.flightNumber;
    }

    if (date) query.date = date;

    try {
      const bookings = await Booking.find(query).populate("username");
      res.status(200).json(bookings);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching bookings", error: error });
    }
  },
  getAllAdmins: async (req, res) => {
    try {
      const admins = await Admin.find();
      res.status(200).json(admins);
    } catch (err) {
      res.status(500).json({ message: "Error fetching Admins", error: err });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await User.find().exec();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: "Error fetching users", error: err });
    }
  },
};

module.exports = adminController;
