import { useEffect, useRef, useState } from 'react';
import HeroImg from '../images/hero.jpg';
import { ProductDto } from '../types/types';


const imagePaths = [
    '../images/1.jpg',
    '../images/2.jpg',
    '../images/3.jpg',
    '../images/4.jpg',
    '../images/5.jpg',
];

const Hero = () => {
    const [isAnimated, setIsAnimated] = useState(false);
    const [products, setProducts] = useState<ProductDto[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState<'left' | 'right'>('left');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');

                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }

                const data = await response.json();

                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleIntersect: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsAnimated(true);
                }
            });
        };

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver(handleIntersect, options);

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (direction === 'left') {
                setCurrentIndex((prevIndex) => (prevIndex === 0 ? 4 : prevIndex - 1));
            } else {
                setCurrentIndex((prevIndex) => (prevIndex === 4 ? 0 : prevIndex + 1));
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [direction]);

    useEffect(() => {
        if (currentIndex === 4 && direction === 'left') {
            setDirection('right');
        } else if (currentIndex === 0 && direction === 'right') {
            setDirection('left');
        }
    }, [currentIndex]);

    return (
        <section className='relative'>
            <div ref={heroRef} className='w-full h-[800px] relative overflow-hidden'>
                <img src={HeroImg} alt='Hero Image' className='absolute inset-0 w-full h-full object-cover' />
                <div className='absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-center gap-5 mt-4'>
                    {isAnimated && (
                        imagePaths.map((path, index) => (
                            <img
                                key={index}
                                src={path}
                                alt={`Image ${index + 1}`}
                                className={`
                                    ${index === currentIndex ? 'opacity-100' : 'opacity-0'}
                                    transition-opacity duration-500 ease-in-out
                                    absolute left-0 transform transition-transform
                                    ${index !== currentIndex ? 'scale-0' : 'scale-100'}
                                `}
                                style={{ left: `${(index - currentIndex) * 100}%` }}
                            />
                        ))
                    )}
                </div>
            </div>
            {isAnimated && <div className='mt-16 flex flex-col items-center'></div>}
        </section>
    );
};

export default Hero;