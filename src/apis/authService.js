import axios from "./axios.customize";

const register = async (body) => {
    return await axios.post('/register', body);
}

const signIn = async(body) => {
    return await axios.post('/login', body);
}

const getInfo = async(id) => {
    return await axios.get(`/user/info/${id}`);
}

export {
    register, signIn, getInfo
}