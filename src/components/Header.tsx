import { useContext, useEffect, useState } from "react";
import { SidebarContext } from '../context/SidebarContext';
import { CartContext } from '../context/CartContext';
import { Paper } from "@mantine/core";
import MalfiniLogo from '../images/Malfini.png';
import { Link } from "react-router-dom";


const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const { isOpen, setIsOpen } = useContext(SidebarContext);
    const { itemAmount } = useContext(CartContext);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsActive(window.scrollY > 60);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Paper className='fixed top-0 left-0 right-0 w-full z-10 transition-all'
            style={{ padding: '1rem 2rem', background: isActive ? '#252422' : '#403d39', height: '85px' }}
        >
            <div className='flex justify-between items-center'>
                <div className='ml-4 flex items-center'>
                    <Link to='/'>
                        <img src={MalfiniLogo} className='h-10 w-10' alt='logo' />
                    </Link>
                    <div onClick={toggleSidebar} className='cursor-pointer ml-5'>
                        <div className='flex items-center relative'>
                            <div className='text-[16px] font-semibold flex items-center' style={{ color: '#eb5e28', marginRight: '10px' }}>
                                {itemAmount}
                            </div>
                            <div className="w-8 h-8" onClick={toggleSidebar}>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    id='Outline'
                                    viewBox='0 0 24 24'
                                    width='20'
                                    height='20'
                                    style={{fill: '#eb5e28' }}
                                >
                                    <path d="M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077ZM21.4,6.178l-.786,4.354A3,3,0,0,1,17.657,13H5.419L4.478,5H20.41A1,1,0,0,1,21.4,6.178Z" />
                                    <circle cx="7" cy="22" r="2" />
                                    <circle cx="17" cy="22" r="2" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Paper>
    )
};

export default Header;