import React, { useContext } from "react";
import { SidebarContext } from '../context/SidebarContext';
import { CartContext } from '../context/CartContext';

const Header = () => {
    const { isOpen, setIsOpen } = useContext(SidebarContext);
    const { itemAmount } = useContext(CartContext);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
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
                    <div className='bg-red-500 -right-4 -bottom-4 text-[18px] flex items-center'
                    >
                        {itemAmount}
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;