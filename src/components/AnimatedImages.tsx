import { useEffect, useRef, useState } from "react";
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';

interface AnimatedImagesProps {
    index: number;
}

const AnimatedImages = ({ index }: AnimatedImagesProps) => {
    const images = [image1, image2, image3, image4, image5];
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            setContainerWidth(containerRef.current.offsetWidth);
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            containerRef.current && (containerRef.current.style.transform = `translateX(-${containerWidth * index}px)`);
        }, 2000);

        return () => clearInterval(interval);
    }, [containerWidth, index]);

    return (
        <div className='w-42 h-42 relative overflow-hidden' ref={containerRef}>
            <div className="flex" style={{ transition: 'transform 1s ease' }}>
                {images.map((image, i) => (
                    <img
                        key={i}
                        src={image}
                        alt={`Image ${i + 1}`}
                        className="max-w-[220px] max-h-[280px] mx-4"
                        style={{ width: `${containerWidth}px` }}
                    />
                ))}
            </div>
        </div>
    );
};

export default AnimatedImages;