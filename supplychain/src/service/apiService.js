import axios from 'axios';
import Rawmaterials from '../rawmaterials';

const API_URL = 'http://192.168.254.77:8080'; // Adjust the URL based on your backend
const token = localStorage.getItem('token');
if (!token) {
    console.log('No token found');
}

const config = {
    headers: {
        'Bearer': token,
        'Content-Type': 'application/json', 
    },
};
const apiService = {
    getProductRawMaterials: (product) => {
        console.log("id: "+product)
       return  axios.get(`${API_URL}/rawmaterialproportion/getbyproduct/${product}`);
       
    },
    getAllUsers: () => axios.get(`${API_URL}/users`),
    getUserById: (id) => axios.get(`${API_URL}/users/${id}`),
    createUser: (user) => axios.post(`${API_URL}/users/create`, user),
    deleteUser: (id) => axios.delete(`${API_URL}/users/${id}`),
    verifyOtp: (user) => axios.post(`${API_URL}/users/otpverification`, user),
    login: (user) => axios.post(`${API_URL}/users/login`, user),
    checktoken: (token) => axios.post(`${API_URL}/users/checktoken`, token),
    createcategory: (category) => axios.post(`${API_URL}/categories/create`, category),
    createProduct: (product) => axios.post(`${API_URL}/products/create`,product),
    deleteProduct:(id) => axios.delete(`${API_URL}/products/${id}`),
    getRawMaterials:() => axios.get(`${API_URL}/rawmaterials/all`),
    createRawMaterials:(rawMaterial) => axios.post(`${API_URL}/rawmaterials/create`,rawMaterial),
    deleterawmaterials:(id) => axios.delete(`${API_URL}/rawmaterials/${id}`),
    updaterawmaterials:(stock) => axios.post(`${API_URL}/rawmaterials/updatestock`,stock),
    getproducts: () => {
        return axios.get(`${API_URL}/products/all`);
    },

    getcategories: () => {
       
        return axios.get(`${API_URL}/categories/all`);
    }
};

export default apiService;
