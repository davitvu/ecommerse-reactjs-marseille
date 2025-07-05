import axios from './axios.customize';


const getProducts = async () => {
    const res = await axios.get('/product');

    return res.data;
}

export { getProducts };