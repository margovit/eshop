import React from "react";
import {Text} from '@mantine/core'

const Footer = () => {
    return (
    <footer className='py-12' style={{background:'#403D38'}}>
        <div className='container mx-auto'>
            <Text className='text-white text-center'>
                Copyright &copy; Ecommerce Shop 2024. All rights rezerved.
            </Text>
        </div>
       </footer>
        );
};

export default Footer;