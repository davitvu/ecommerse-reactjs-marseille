import { createContext } from "react";
import { toast, ToastContainer } from "react-toastify";

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {

    return (
        <ToastContext.Provider value={{ toast }}>
            {children}
            <ToastContainer />
        </ToastContext.Provider>
    )
}