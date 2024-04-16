import { useContext } from "react";
import { ActionIcon, Button, Text } from "@mantine/core";
import { SidebarContext } from '../context/SidebarContext';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { IconArrowRight, IconTrash } from "@tabler/icons-react";


const Sidebar = () => {
    const { isOpen, handleClose } = useContext(SidebarContext);
    const { cart, clearCart, total } = useContext(CartContext);
    return (
        <div className={`${isOpen ? 'right-0' : '-right-full'} 
        w-full bg-white fixed top-0 
        h-full shadow-2xl 
        md:w-[35vw] 
        xl:max-w-[30vw] 
        transition-all 
        duration-300 z-20 px-4 lg:px-[35px]`}
        style={{maxHeight:'100%', overflowY:'auto'}}
        >
            <div className='flex items-center justify-between py-6 border-b border-gray-300  overflow-x-hidden border-b'>
                <div className='uppercase text-sm font-bold text-gray-700'>My shopping Bag</div>
                <div
                    className='cursor-pointer w-8 h-8 flex justify-center items-center flex-col h-[100px]'
                >
                    <Button variant="transparent" color='#eb5e28' justify="center" fullWidth onClick={handleClose} leftSection={<IconArrowRight size={28} />} />
                </div>
            </div>
            <div className='py-4'>
                {cart.map((item) => {
                    return <CartItem item={item} key={item.id} />
                })}
            </div>
            <div className="flex justify-between py-5">
                <div className="flex items-center">
                    <Text className='text-xs font-bold uppercase' style={{ color: '#403d39' }}>
                        Total: {total.toFixed(2).toString()} $
                    </Text>
                </div>
                <div className="flex items-center">
                    <ActionIcon variant="filled" color='#eb5e28' size='xl' onClick={clearCart}>
                        <IconTrash />
                    </ActionIcon>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;