import axios from "axios";

const baseURL = "http://localhost:3001";

export const GetAllProducts = async (searchTerm) => {
    return await axios.get(`${baseURL}/product?name=${searchTerm || ''}`);
};
