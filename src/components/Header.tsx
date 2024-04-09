import React, { useContext } from "react";
import { BsBag } from 'react-icons/bs';
import { SidebarContext } from '../context/SidebarContext';

const Header = () => {
    const { isOpen, setIsOpen } = useContext(SidebarContext);

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
                        src="./shopping-bag.png"
                        alt="Bag Icon"
                        style={{ width: '35px', height: '35px' }}
                    />
                </div>
            </div>
        </header>

    )

};

export default Header;