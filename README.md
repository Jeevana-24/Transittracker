# Transit Track - Bus Reservation System Portal

Transit Track is a web application that allows users to book bus tickets, view reservations, and manage their bookings. This project includes both the backend API and the frontend interface.

## Technologies Used

- **Frontend:** React, React Router, Axios
- **Backend:** Java, Spring Boot, Spring Security, JWT
- **Database:** MySQL
- **API Documentation:** Swagger
- **Build Tool:** Maven

## Features

- User Authentication: Register and log in to the system securely.
- Ticket Booking: Book tickets for available bus routes.
- View Reservations: View current and past reservations.
- Admin Panel: Manage bus routes, schedules, and view all reservations.

## Backend

The backend is developed using Java with Spring Boot. It provides RESTful API endpoints for user authentication, ticket booking, and reservation management.

### API Endpoints

- **User Authentication**
  - `POST /api/login`: Authenticate a user and return a JWT token.
  - `POST /api/register`: Register a new user.

- **Ticket Booking**
  - `POST /api/bookTicket`: Book a new ticket.
  - `GET /api/reservations`: Get all reservations for the authenticated user.
  - `PUT /api/reservations/{id}`: Update a reservation.
  - `DELETE /api/reservations/{id}`: Cancel a reservation.

### Database

The backend uses MySQL as the database. The database schema includes tables for users, tickets, and reservations.

### Swagger Documentation

The API is documented using Swagger. You can access the API documentation at `http://localhost:8080/swagger-ui.html` when the backend server is running.

## Frontend

The frontend is developed using React. It provides a user-friendly interface for interacting with the backend API.

### Components

- **Home:** The homepage of the application.
- **Login:** User authentication page.
- **Register:** New user registration page.
- **BookTicket:** Page for booking new tickets.
- **Reservations:** Page for viewing and managing reservations.

### Routing

React Router is used for navigation between different components, enabling a seamless single-page application experience.

## Setup and Installation

1. Clone the repository.
2. Set up the backend by navigating to the `backend` directory and running `mvn spring-boot:run`.
3. Set up the frontend by navigating to the `frontend` directory and running `npm install` followed by `npm start`.
4. Access the application at `http://localhost:3000`.
