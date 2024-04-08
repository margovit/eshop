import React, {useState, createContext, ReactNode } from 'react';

interface SidebarProviderProps {
    children: ReactNode;
}

export const SidebarContext = createContext<any>(null);

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => {
        setIsOpen(false);
    }
    return <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>{children}</SidebarContext.Provider>
};