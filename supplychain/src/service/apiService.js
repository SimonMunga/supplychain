import axios from 'axios';

const API_URL = 'http://192.168.254.143:8080'; // Adjust the URL based on your backend
const apiService = {
    getAllUsers: () => axios.get(`${API_URL}/users`),
    getUserById: (id) => axios.get(`${API_URL}/users/${id}`),
    createUser: (user) => axios.post(`${API_URL}/users/create`, user),
    deleteUser: (id) => axios.delete(`${API_URL}/users/${id}`),
    verifyOtp: (user) => axios.post(`${API_URL}/users/otpverification`,user),
    login:(user) => axios.post(`${API_URL}/users/login`,user),
    checktoken:(token) => axios.post(`${API_URL}/users/checktoken`,token),
    
    getproducts: () => {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }
    
        const config = {
          headers: {
            'Bearer': token,
            'Content-Type': 'application/json',
          },
        };
    
        return axios.get(`${API_URL}/products/all`, config);
      },
    }

export default apiService;
