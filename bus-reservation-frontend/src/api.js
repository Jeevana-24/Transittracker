import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Replace with your backend API URL

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const bookTicket = async (ticketData) => {
    try {
      const response = await axios.post(`${API_URL}/bookTicket`, ticketData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  export const getReservations = async () => {
    try {
      const response = await axios.get(`${API_URL}/reservations`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  export const updateReservation = async (reservationId, updatedData) => {
    try {
      const response = await axios.put(`${API_URL}/reservations/${reservationId}`, updatedData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  export const deleteReservation = async (reservationId) => {
    try {
      const response = await axios.delete(`${API_URL}/reservations/${reservationId}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  