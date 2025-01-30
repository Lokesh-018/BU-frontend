import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import memories from '../assets/MemoriesData/data/memoriesData'; // Import memories data
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Memories = () => {
    const navigate = useNavigate();

    const handleMemoryClick = (title) => {
        const encodedTitle = encodeURIComponent(title);
        navigate(`/gallery/${encodedTitle}`);
    };

    // Extract unique categories from the memories data
    const categories = [...new Set(memories.map(memory => memory.category))];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show three slides at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Memories</h1>
            {categories.map(category => (
                <CarouselSection 
                    key={category}
                    title={`${category} Memories`} 
                    memories={memories.filter(memory => memory.category === category)} 
                    settings={settings} 
                    handleMemoryClick={handleMemoryClick} 
                />
            ))}
        </div>
    );
};

const CarouselSection = ({ title, memories, settings, handleMemoryClick }) => (
    <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">{title}</h2>
        <Slider {...settings}>
            {memories.map((memory) => (
                <MemoryCard 
                    key={memory.id} 
                    memory={memory} 
                    handleMemoryClick={handleMemoryClick} 
                />
            ))}
        </Slider>
    </div>
);

const MemoryCard = ({ memory, handleMemoryClick }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div 
            className="p-6 border rounded shadow hover:bg-gray-100 cursor-pointer m-4" 
            onClick={() => handleMemoryClick(memory.title)}
            style={{ height: '300px', overflow: 'hidden' }} // Fixed height for the card
        >
            <img 
                src={memory.coverImage} 
                alt={memory.title} 
                className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-semibold">{memory.title}</h3>
            <p className={`text-gray-700 ${isExpanded ? '' : 'truncate'}`}>
                {memory.description}
            </p>
            {memory.description.length > 100 && (
                <button 
                    className="text-blue-500 hover:underline mt-2"
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsExpanded(!isExpanded);
                    }}
                >
                    {isExpanded ? 'Read Less' : 'Read More'}
                </button>
            )}
        </div>
    );
};

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", right: "10px" }}
            onClick={onClick}
        />
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
            onClick={onClick}
        />
    );
};

export default Memories;