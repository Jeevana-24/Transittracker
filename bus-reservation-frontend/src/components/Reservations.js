import React, { useState, useEffect } from 'react';
import { getReservations, updateReservation, deleteReservation } from '../api';

function Reservations() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await getReservations();
        setReservations(response);
      } catch (error) {
        console.error('Failed to fetch reservations:', error);
      }
    };
    fetchReservations();
  }, []);

  const handleUpdate = async (reservationId, updatedData) => {
    try {
      await updateReservation(reservationId, updatedData);
      // Update the local state or re-fetch the reservations
    } catch (error) {
      console.error('Failed to update reservation:', error);
    }
  };

  const handleDelete = async (reservationId) => {
    try {
      await deleteReservation(reservationId);
      // Update the local state or re-fetch the reservations
    } catch (error) {
      console.error('Failed to delete reservation:', error);
    }
  };

  return (
    <div>
      <h2>Reservations</h2>
      {/* Display reservations and provide options to update or delete */}
    </div>
  );
}

export default Reservations;
