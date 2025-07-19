import axios from "./axios.customize";

const createOrder = (data) => {
    return axios.post("/orders", data);
}

const getDetailOrder = (id) => {
    return axios.get(`/orders/${id}`);
}

export { createOrder, getDetailOrder };