import React, { useState } from 'react';
import { bookTicket } from '../api';

function BookTicket() {
  const [ticketData, setTicketData] = useState({
    // Define your ticket data structure (e.g., destination, date, number of passengers)
  });

  const handleChange = (e) => {
    setTicketData({ ...ticketData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await bookTicket(ticketData);
      console.log('Ticket booked successfully:', response);
      // Handle success (e.g., show confirmation message)
    } catch (error) {
      console.error('Failed to book ticket:', error);
      // Handle error
    }
  };

  return (
    <div>
      <h2>Book a Ticket</h2>
      <form onSubmit={handleSubmit}>
        {/* Add input fields for ticket data */}
        <button type="submit">Book Ticket</button>
      </form>
    </div>
  );
}

export default BookTicket;
