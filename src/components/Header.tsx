import React, { useContext } from "react";
import { SidebarContext } from '../context/SidebarContext';
import { CartContext } from '../context/CartContext';
import { Paper } from "@mantine/core";


const Header = () => {
    const { isOpen, setIsOpen } = useContext(SidebarContext);
    const { itemAmount } = useContext(CartContext);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Paper className='header-container text-lg font-bold uppercase text-yellow-400 bg-neutral-800 p-4'>
            <div onClick={toggleSidebar} className="cursor-pointer" style={{ paddingLeft: '96%' }}>
                <div className='flex items-center relative'>
                    <div className='text-[18px] font-semibold flex items-center' style={{ color: 'rgba(245, 222, 179)' }}>
                        {itemAmount}
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Outline"
                        viewBox="0 0 24 24"
                        width="40"
                        height="40"
                        style={{ marginLeft: '10px', fill: 'rgba(255, 165, 0)'}}
                    >
                        <path d="M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077ZM21.4,6.178l-.786,4.354A3,3,0,0,1,17.657,13H5.419L4.478,5H20.41A1,1,0,0,1,21.4,6.178Z" />
                        <circle cx="7" cy="22" r="2" />
                        <circle cx="17" cy="22" r="2" />
                    </svg>
                </div>
            </div>
        </Paper>
    )
};

export default Header;