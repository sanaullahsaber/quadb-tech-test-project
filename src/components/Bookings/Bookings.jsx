import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Bookings = () => {
  // Fetch booking data from localStorage
  const bookingsData = localStorage.getItem("userDetails");
  const bookings = bookingsData ? JSON.parse(bookingsData) : [];

  return (
    <Container>
      <h2>Bookings: {bookings.length}</h2>
      {bookings.map((booking, index) => (
        <Card key={index} className="mb-3">
          <Card.Body>
            <Card.Title>{booking.movieName}</Card.Title>
            <Card.Text>
              <strong>Name:</strong> {booking.name}
              <br />
              <strong>Email:</strong> {booking.email}
              <br />
              <strong>Phone:</strong> {booking.phone}
              <br />
              <strong>Date:</strong> {booking.date}
              <br />
              <strong>Message:</strong> {booking.message}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Bookings;
