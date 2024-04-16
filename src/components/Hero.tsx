import React from "react";
import HeroImg from '../images/hero.svg';
import { Link } from 'react-router-dom';
import { Text } from "@mantine/core";

const Hero = () => {
    return (
        <section className='bg-hero relative'>
            <img src={HeroImg} className="w-full" />
        </section>
    );
};

export default Hero;