// controllers/adminController.js
const data = require("../data/data");

const adminController = {
  addFlight: (req, res) => {
    const { flightNumber, name, date } = req.body;

    // Check if the flight number already exists
    const existingFlight = data.flights.find(
      (f) => f.flightNumber === flightNumber
    );
    if (existingFlight) {
      return res.status(409).json({ message: "Flight number already exists" });
    }

    // Add the new flight
    const newFlight = { flightNumber, name, date, bookedSeats: 0 };
    data.flights.push(newFlight);

    res.status(201).json({ message: "Flight added successfully", newFlight });
  },
  viewBookings: (req, res) => {
    const { flightNumber, name, date } = req.query;

    // Filter bookings based on query parameters
    let filteredBookings = data.bookings;

    if (flightNumber) {
      filteredBookings = filteredBookings.filter(
        (b) => b.flightNumber === flightNumber
      );
    }

    if (name) {
      const flight = data.flights.find(
        (f) => f.name.toLowerCase() === name.toLowerCase()
      );
      if (flight) {
        filteredBookings = filteredBookings.filter(
          (b) => b.flightNumber === flight.flightNumber
        );
      } else {
        return res.status(404).json({ message: "Flight name not found" });
      }
    }

    if (date) {
      const flightsOnDate = data.flights.filter((f) => f.date === date);
      const flightNumbersOnDate = flightsOnDate.map((f) => f.flightNumber);
      filteredBookings = filteredBookings.filter((b) =>
        flightNumbersOnDate.includes(b.flightNumber)
      );
    }

    res.status(200).json({ bookings: filteredBookings });
  },
  getAllAdmins: (req, res) => {
    res.status(200).json(data.admins);
  },
};

module.exports = adminController;
