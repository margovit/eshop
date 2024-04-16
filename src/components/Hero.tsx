import React from "react";
import HeroImg from '../images/hero.svg';
import { Link } from 'react-router-dom';
import { Text } from "@mantine/core";

const Hero = () => {
    return (
        <section className='bg-hero relative'>
            <img src={HeroImg} className="w-full" />
            <div 
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 
            -translate-y-1/2 text-[#EB5E28] text-7xl leading-tight font-bold 
            uppercase z-10'  
            style={{ 
                WebkitTextStroke:'1px #252422',
                textShadow: 
                '15px 20px 10px #EB5E28'
            }}
        >
                New collections
            </div>
            <div 
            className='absolute top-1/4 left-1/4 transform -translate-x-1/2 
            -translate-y-1/2 text-[#EB5E28] text-7xl leading-tight font-semibold 
            uppercase z-10'  
            style={{ textShadow: '10px 10px 15px #EB5E28'}}>
                New collections
            </div>
            <div 
            className='absolute top-3/4 left-2/3 transform -translate-x-1/2 
            -translate-y-1/2 text-[#EB5E28] text-7xl leading-tight font-semibold 
            uppercase z-10'  
            style={{ textShadow: '10px 10px 20px #EB5E28'}}>
                New collections
            </div>
        </section>
    );
};

export default Hero;