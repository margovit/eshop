import { useContext } from "react";
import { ActionIcon, Button, Text } from "@mantine/core";
import { SidebarContext } from '../context/SidebarContext';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { IconArrowRight, IconTrash } from "@tabler/icons-react";


const Sidebar = () => {
    const { isOpen, handleClose } = useContext(SidebarContext);
    const { cart, clearCart } = useContext(CartContext);
    return (
        <div className={`${isOpen ? 'right-0' : '-right-full'} 
        w-full bg-white fixed top-0 
        h-full shadow-2xl 
        md:w-[35vw] 
        xl:max-w-[30vw] 
        transition-all 
        duration-300 z-20 px-4 lg:px-[35px]`}
        >
            <div className='flex items-center justify-between py-6 border-b border-gray-300 '>
                <div className='uppercase text-sm font-bold text-gray-700'>My shopping Bag(0)</div>
                <div
                    className='cursor-pointer w-8 h-8 flex justify-center items-center'
                >
                    <Button variant="transparent" color="yellow" justify="center" fullWidth onClick={handleClose} leftSection={<IconArrowRight size={28} />} />
                </div>
            </div>
            <div className="py-5">
                {cart.map((item) => {
                    return <CartItem item={item} key={item.id} />
                })}
            </div>
            <div className="flex justify-between py-5">
                <div className="flex items-center">
                    <Text size="sm" fw={500} >Total price:</Text> 
                </div>
                <div className="flex items-center">
                    <ActionIcon variant="filled" color="yellow" size='xl' onClick={clearCart}>
                        <IconTrash />
                    </ActionIcon>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;