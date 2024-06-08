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

let flights = [
  { id: 1, name: "Flight 1", date: "2024-06-10", availableSeats: 60 },
  { id: 2, name: "Flight 2", date: "2024-06-12", availableSeats: 60 },
  { id: 3, name: "Flight 3", date: "2024-06-15", availableSeats: 60 },
];

let bookings = [
  // { id: 1, userId: 2, flightId: 1, seats: 2 },
  // { id: 2, userId: 3, flightId: 2, seats: 1 },
];

module.exports = { users, admins, flights, bookings };
