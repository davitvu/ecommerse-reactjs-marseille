import { getCart } from "@/apis/cartService";
import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState('');
    const [listProductsCart, setListProductsCart] = useState([]);
    const [productDetail, setProductDetail] = useState(null);
    const [isLoading, setIsLoading] = useState([]);
    const userId = Cookies.get('userId');

    const handleGetListProductsCart = (userId, type) => {
        if (userId && type === 'cart') {
            setIsLoading(true);
            getCart(userId).then((res) => {
                setListProductsCart(res.data.data);
                setIsLoading(false);
            }).catch((error) => {
                setListProductsCart([]);
                setIsLoading(false);
            });
        }
    }

    useEffect(() => {
        handleGetListProductsCart(userId, 'cart');
    }, []);

    const value = { isOpen, setIsOpen, isLoading, type, setType, listProductsCart, handleGetListProductsCart, setIsLoading, userId, productDetail, setProductDetail }

    return (
        <SidebarContext.Provider value={value}>
            {children}
        </SidebarContext.Provider>
    )
};