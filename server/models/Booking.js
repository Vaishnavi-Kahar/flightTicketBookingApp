const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  username: { type: String, required: true },
  flightNumber: { type: String, required: true },
  seats: { type: Number, required: true, default: 0 },
});

module.exports = mongoose.model("Booking", BookingSchema);
