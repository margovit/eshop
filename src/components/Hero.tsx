import { useEffect, useRef, useState } from 'react';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import image6 from '../images/6.jpg';
import image7 from '../images/7.jpg';

const imagePaths = [image1, image2, image3, image4, image5, image6, image7];
const reverseImagePaths = [...imagePaths].reverse();

const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
};

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [transitioning, setTransitioning] = useState(false);
    const [leftImages, setLeftImages] = useState([...reverseImagePaths]);
    const [rightImages, setRightImages] = useState([...imagePaths]);
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    useEffect(() => {
        const showPhotoInterval = 6000;
        const hidePhotoInterval = 2000;

        const showPhotoTimer = setInterval(() => {
            if (!isHovered && isMouseOver) {
                setTransitioning(true);
                setTimeout(() => {
                    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
                    setTransitioning(false);
                }, hidePhotoInterval);
            }
        }, showPhotoInterval);

        const initialPhotoTimer = setInterval(() => {
            if (!isHovered && !isMouseOver) {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
            }
        }, hidePhotoInterval);

        return () => {
            clearInterval(showPhotoTimer);
            clearInterval(initialPhotoTimer);
        };
    }, [isHovered, isMouseOver]);

    const handleMouseEnter = () => {
        setIsHovered(true);
        setIsMouseOver(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setIsMouseOver(false);
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { clientX, clientY } = event;
        const { left, top, width, height } = heroRef.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };
        const offsetX = clientX - left;
        const offsetY = clientY - top;
        const normalizedX = Math.min(Math.max(offsetX / width, 0), 1);
        const normalizedY = Math.min(Math.max(offsetY / height, 0), 1);
        setMouseX(normalizedX);
        setMouseY(normalizedY);
    };

    const heroRef = useRef<HTMLDivElement>(null)!;

    return (
        <section className="relative">
            <div
                ref={heroRef}
                className='w-full h-[500px] relative overflow-hidden flex justify-center items-center'
                style={{
                    perspective: '900px',
                    marginTop: '50px',
                    marginBottom: '20px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
            >
                <div className='absolute inset-0 flex items-center justify-center text-white text-center bg-[#252422]'>
                    <div>
                        <h1 className='z-20 text-4xl font-bold mb-4'>Vítejte na našem webu</h1>
                        <p className='z-20 text-lg mb-8'>Najděte si ten nejlepší produkt právě pro vás.</p>
                    </div>
                </div>
                <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between items-center">
                    <div className="w-1/3 h-full flex flex-wrap justify-center items-center">
                        {leftImages.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Image ${index}`}
                                className={`w-32 h-auto object-cover absolute transition-all duration-1000 ${isMouseOver ? 'opacity-100' : 'opacity-0'
                                    }`}
                                style={{
                                    top: `${getRandomInt(800)}px`,
                                    left: `${getRandomInt(800)}px`,
                                    transform: `translate(${mouseX * 0.05}px, ${mouseY * 0.05}px)`,
                                }}
                            />
                        ))}
                    </div>
                    <div className='w-1/3 h-px bg-[#eb5e28] mb-5'/>
                    <div className="w-1/3 h-full flex flex-wrap justify-center items-center">
                        {rightImages.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Image ${index}`}
                                className={`w-32 h-auto object-cover absolute transition-all duration-1000 ${isMouseOver ? 'opacity-100' : 'opacity-0'
                                    }`}
                                style={{ top: `${getRandomInt(800)}px`, right: `${getRandomInt(800)}px`, transform: `translate(${mouseX * 0.1}px, ${mouseY * 0.1}px)` }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;