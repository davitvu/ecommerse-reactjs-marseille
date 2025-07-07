import { createContext, useState } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState('');

    return (
        <SidebarContext.Provider value={{ isOpen, setIsOpen, type, setType }}>
            {children}
        </SidebarContext.Provider>
    )
};