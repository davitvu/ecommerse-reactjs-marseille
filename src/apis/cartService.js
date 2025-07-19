import axios from './axios.customize';

const addProductToCart = async (data) => {
    return await axios.post(`/cart`, data);
};

const getCart = async (userId) => {
    return await axios.get(`/cart/${userId}`);
};

const deleteItem = async (data) => {
    return await axios.delete(`/cart/deleteItem`, {data});
};

const deleteAllItem = async (body) => {
    return await axios.delete(`/cart/delete`, {data: body});
};

export { addProductToCart, getCart, deleteItem, deleteAllItem };