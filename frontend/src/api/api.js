import axios from 'axios';

const API_URL = 'http://localhost:5000';

// Axios instance for authenticated requests
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Include token in requests using interceptors
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  // Attach Authorization token if available
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  // Make sure to return the config object
  return config;
}, (error) => {
  // Handle the error
  return Promise.reject(error);
});

// Booking API using the `api` instance
export const createBooking = async (bookingData) => {
    return await api.post('/booking', bookingData); // Use `api` instance here
};

export const getBookings = async () => {
    return await api.get('/booking'); // Use `api` instance here
};

// Review API using the `api` instance
export const createReview = async (reviewData) => {
    return await api.post('/review', reviewData); // Use `api` instance here
};

export const getReviews = async (pgId) => {
    return await api.get(`/review/${pgId}`); // Use `api` instance here
};

export default api;
