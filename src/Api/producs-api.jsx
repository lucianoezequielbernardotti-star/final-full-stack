import axios from "axios";

const baseURL = "http://localhost:3001";

export const GetAllProducts = async (searchTerm) => {
    return await axios.get(`${baseURL}/api/product?name=${searchTerm || ''}`);
};

export const CreateProduct = async (product) => {
    return await axios.post(`${baseURL}/api/product`, product);
};

export const login =  (loginData) => {
    return axios.post(`${baseURL}/api/auth/login`, loginData);
};