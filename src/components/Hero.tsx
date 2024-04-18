import HeroImg from '../images/hero.svg';

const Hero = () => {
    return (
        <section className='bg-hero relative'>
            <img src={HeroImg} className='w-full h-[1200px]absolute top-0 left-0' />
        </section>
    );
};

export default Hero;