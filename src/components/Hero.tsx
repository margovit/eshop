import HeroImg from '../images/hero.svg';

const Hero = () => {
    return (
        <section className='bg-hero relative'>
            <img src={HeroImg} className="w-full" />
        </section>
    );
};

export default Hero;