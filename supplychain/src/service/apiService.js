import axios from 'axios';

const API_URL = 'http://192.168.254.41:8080'; // Adjust the URL based on your backend
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
const apiService = {
    getAllUsers: () => axios.get(`${API_URL}/users`),
    getUserById: (id) => axios.get(`${API_URL}/users/${id}`),
    createUser: (user) => axios.post(`${API_URL}/users/create`, user),
    deleteUser: (id) => axios.delete(`${API_URL}/users/${id}`),
    verifyOtp: (user) => axios.post(`${API_URL}/users/otpverification`, user),
    login: (user) => axios.post(`${API_URL}/users/login`, user),
    checktoken: (token) => axios.post(`${API_URL}/users/checktoken`, token),
    createcategory: (category) => axios.post(`${API_URL}/categories/create`, category,config),
    createProduct: (product) => axios.post(`${API_URL}/products/create`,product,config),
    deleteProduct:(id) => axios.delete(`${API_URL}/products/${id}`,config),
    getproducts: () => {
       

        return axios.get(`${API_URL}/products/all`);
    },

    getcategories: () => {
       
        return axios.get(`${API_URL}/categories/all`);
    }
};

export default apiService;
