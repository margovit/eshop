import React, { useContext } from "react";
import {BsBag} from 'react-icons/bs';
import { SidebarContext } from '../context/SidebarContext';

const Header = () => {
    const { isOpen, setIsOpen } = useContext(SidebarContext);
    return (
        <div>
            <div>Header</div>
            <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'
            >
                <BsBag className='text-2xl' />
            </div>
        </div>

    )

};

export default Header;