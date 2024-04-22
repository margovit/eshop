import { useEffect, useRef, useState } from 'react';
import HeroImg from '../images/hero.jpg';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import image6 from '../images/6.jpg';
import image7 from '../images/7.jpg';


const imagePaths = [image1, image2, image3, image4, image5, image6, image7];

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [transitioning, setTransitioning] = useState(false); // Přidáme stav pro označení probíhajícího přechodu

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered) {
                setTransitioning(true); // Při spuštění intervalu začneme s přechodem
                setTimeout(() => {
                    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
                    setTransitioning(false); // Po dokončení přechodu ukončíme přechod
                }, 3000); // 1000 ms odpovídá délce přechodu definované v CSS
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [isHovered]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const heroRef = useRef<HTMLDivElement>(null)!;

    return (
        <section className='relative'>
            <div
                ref={heroRef}
                className='w-full h-[500px] relative overflow-hidden flex justify-center items-center'
                style={{
                    backgroundImage: `url(${HeroImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    perspective: '1000px',
                    marginTop: '50px', // Odstup z vrchu
                    marginBottom: '20px', // Odstup zespodu
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {imagePaths.map((path, index) => (
                    <img
                        key={index}
                        src={path}
                        alt={`Image ${index}`}
                        className={`absolute h-full w-[350px] object-cover transition-opacity duration-1000 ${
                            index === currentImageIndex || transitioning ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;