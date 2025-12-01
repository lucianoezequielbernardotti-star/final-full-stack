import axios from "axios";

const baseURL = "http://localhost:3001";
export const GetAllProducts = async (searchTerm) => {
    return await axios.get(`${baseURL}/api/product?name=${searchTerm || ''}`);
};

export const CreateProduct = async (product) => {
    const token = localStorage.getItem('token');
    return await axios.post(`${baseURL}/api/product`, product, {
        headers: {
            'Authorization': `${token}`
        }
    });
};

export const RemoveProduct = async (_id) => {
    const token = localStorage.getItem('token');
    return await axios.delete(`${baseURL}/api/product/${_id}`, {
        headers: {
            'Authorization': `${token}`
        },
        data: { _id }
    });
};
export const UpdateProduct = async (productId, product) => {
    const token = localStorage.getItem('token');
    return await axios.put(`${baseURL}/api/product/${productId}`, product, {
        headers: {
            'Authorization': `${token}`
        }
    });
};

export const login =  (loginData) => {
    return axios.post(`${baseURL}/api/auth/login`, loginData);
};