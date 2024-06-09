const mongoose = require("mongoose");

const FlightSchema = new mongoose.Schema({
  flightNumber: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  date: { type: Date, required: true },
  bookedSeats: { type: Number, default: 0 },
});

module.exports = mongoose.model("Flight", FlightSchema);
