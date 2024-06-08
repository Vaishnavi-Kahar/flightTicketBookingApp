let users = [
  {
    id: 1,
    username: "user1",
    password: "password1",
  },
  {
    id: 2,
    username: "user2",
    password: "password2",
  },
];

let admins = [
  {
    id: 1,
    username: "admin1",
    password: "adminpassword1",
  },
  {
    id: 2,
    username: "admin2",
    password: "adminpassword2",
  },
];

const flights = [
  {
    flightNumber: "AB123",
    name: "Flight A",
    date: "2024-06-15",
    bookedSeats: 60,
  },
  {
    flightNumber: "CD456",
    name: "Flight B",
    date: "2024-06-16",
    bookedSeats: 0,
  },
  {
    flightNumber: "EF789",
    name: "Flight C",
    date: "2024-06-16",
    bookedSeats: 0,
  },
];

let bookings = [
  // { id: 1, userId: 2, flightId: 1, seats: 2 },
  // { id: 2, userId: 3, flightId: 2, seats: 1 },
];

module.exports = { users, admins, flights, bookings };
