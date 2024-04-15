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
        <Paper className='header-container text-lg font-bold uppercase text-yellow-400 bg-gray-900 p-4'>
            <div>Header</div>
            <div
                onClick={toggleSidebar}
                className="cursor-pointer"
                style={{ paddingLeft: '10px' }}
            >
                <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'
                >
                    <img
                        src='src/images/myBag.png'
                        alt="Bag Icon"
                        style={{ width: '40px', height: '40px' }}
                    />
                    <div
                        className='text-[18px] font-semibold flex items-center'
                        style={{ marginLeft: '10px', color: 'gray' }}
                    >
                        {itemAmount}
                    </div>
                </div>
            </div>
        </Paper>
    )
};

export default Header;