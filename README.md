# Flight Ticket Booking App

This is a flight ticket booking application backend built using Node.js, Express, and MongoDB. The application allows users to search for flights, book tickets. Admins can add new flights, view all bookings,view all the admins or users.

## Base URL

I have deployed the backend on Render. The base URL for the deployed application is: [link](https://flightticketbookingapp.onrender.com)

---

## Installation and Running the application

1. **Cloning the repository:**

```sh
    git clone https://github.com/Vaishnavi-Kahar/flightTicketBookingApp.git
    cd flight-ticket-booking-app
    cd server
```

2. **Install dependencies:**

```sh
    npm install
```

3. Create a .env file in the root directory of your project and add these variables:

```makefile
    MONGO_URL = your_mongodb_connection_string
    JWT_SECRET = your_secret_key
    PORT = port_number
```

4. **Start the server:**

```sh
    node index.js
```

## API Endpoints

### Authentication

#### User Signup

- **Endpoint:** `/signup`
- **Method:** `POST`
- **Description:** Allows a new user to sign up.
- **Request Body:**

  ```json
  {
    "username": "exampleUser",
    "password": "examplePass"
  }
  ```

- **Response:**

  ```json
  {
    "message": "User signup successful",
    "newUser": {
      "username": "exampleUser",
      "password": "examplePass",
      "_id": "exampleId",
      "__v": 0
    }
  }
  ```

#### User/Admin Login

- **Endpoint:** `/login`
- **Method:** `POST`
- **Description:** Allows existing user/admin to login.
- **Request Body:**
  ```json
  {
    "username": "exampleUser",
    "password": "examplePass"
  }
  ```
- **Response:**

  ```json
  {
    "message": "Login successful",
    "token": "jwt_token"
  }
  ```

---

### User Routes

Note: Need to provide the jwt_token in the headers

```json
{
  "Authorization": "Bearer jwt_token"
}
```

#### Search Flights

- **Endpoint:** `/user/searchFlight`
- **Method:** `GET`
- **Description:** Allows users to search for flights using either of Flight name/ Date /Flight Number.
- **Request Body:**

  ```json
  {
    "flightNumber": "AB123",
    "name": "Flight A",
    "date":"2024-06-16"
  }
  ```

- **Response:**

  ```json
  [
    {
      "flightNumber": "AB123",
      "name": "Flight A",
      "date": "2023-06-16T00:00:00.000Z",
      "bookedSeats": 20
    }
  ]
  ```

#### Book Tickets

- **Endpoint:** `/user/bookTicket`
- **Method:** `POST`
- **Description:** Allow users to book tickets based on availability, assuming maximum capacity of seats is 60.

- **Request Body:**

  ```json
  {
    "flightNumber": "FN123",
    "seats": 2
  }
  ```

- **Response:**

  ```json
  {
    "message": "Ticket booked successfully",
    "booking": {
      "username": "exampleUser",
      "flightNumber": "FN123",
      "seats": 2,
      "_id": "booking_id",
      "__v": 0
    }
  }
  ```

---

### Admin Routes

Note: need to provide the jwt_token in the headers

```json
{
  "Authorization": "Bearer jwt_token"
}
```

#### Add Flight

- **Endpoint:** `/admin/addFlight`
- **Method:** `POST`
- **Description:** Allows Admins to add new flights to the system.
- **Request Body:**

  ```json
  {
    "flightNumber": "FN123",
    "name": "Flight Name",
    "date": "2023-06-15"
  }
  ```

- **Response:**

  ```json
  {
    "message": "Flight added successfully",
    "newFlight": {
      "flightNumber": "FN123",
      "name": "Flight Name",
      "date": "2023-06-15T00:00:00.000Z",
      "bookedSeats": 0,
      "_id": "flight_id",
      "__v": 0
    }
  }
  ```

#### View Bookings

- **Endpoint:** `/admin/viewBookings`
- **Method:** `GET`
- **Description:** Allow Admins to view bookings with the option to filter based on either of: Flight Number/Flight Name/ Date

- **Request Body:**

  ```json
  {
    "flightNumber": "FN123",
    "name": "Flight Name",
    "date": "2023-06-15"
  }
  ```

- **Response:**

  ```json
  [
    {
      "username": "exampleUser",
      "flightNumber": "FN123",
      "seats": 2,
      "_id": "booking_id"
    }
  ]
  ```

#### View Users

- **Endpoint:** `/admin/allUsers`
- **Method:** `GET`
- **Description:** Allow Admins to view all users

- **Response:**

  ```json
  [
    {
      "_id": "66656f504e2409368785a444",
      "username": "user1",
      "password": "password1",
      "__v": 0
    },
    {
      "_id": "66656f7b4e2409368785a448",
      "username": "user2",
      "password": "password2",
      "__v": 0
    }
  ]
  ```

  #### View Admins

- **Endpoint:** `/admin/allAdmins`
- **Method:** `GET`
- **Description:** Allow Admins to view all admins.

- **Response:**

  ```json
  [
    {
      "_id": "66656f504e2409368785a444",
      "username": "admin1",
      "password": "password1",
      "__v": 0
    }
  ]
  ```

---

## Test Cases

### User Signup

- Valid signup
- Signup with existing username (returns an error)

### User Login

- Valid login
- Invalid login (returns an error)

### Search Flights

- Search by either flight number or name or date
- Search with no parameters (returns all flights)
- Searching flight with invalid token (returns an error)

### Book Tickets

- Valid booking
- Booking with invalid flight number (returns an error)
- Booking more seats than maximum capacity (60) (returns an error)
- Booking with invalid token (returns an error)

### Add Flight (Admin)

- Valid flight addition
- Adding flight with existing flight number (returns an error)
- Adding flight with missing fields (returns an error)
- Adding flight with invalid token (returns an error)

### View Bookings (Admin)

- View all bookings
- View bookings by either flight number or name or date
- View booking with no parameters (returns all bookings)
- View bookings with invalid token (returns an error)

---

Thank You

Vaishnavi Kahar
