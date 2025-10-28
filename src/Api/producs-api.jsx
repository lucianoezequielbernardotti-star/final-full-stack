import axios from "axios";

const baseURL = "http://localhost:3000";

export const GetAllProducts = async (searchTerm) => {
    return await axios.get(`${baseURL}/product?name=${searchTerm || ''}`);
};
