import React, { useContext } from "react";
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
                        src='src/images/myBag.png'
                        alt="Bag Icon"
                        style={{ width: '40px', height: '40px' }}
                    />
                </div>
            </div>
        </header>

    )

};

export default Header;