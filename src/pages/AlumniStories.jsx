import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'; // Import Slider for image slider
import { testimonialVideos } from '../assets/StoriesData/testimonialVideos'; // Import testimonial videos
import { alumniImages } from '../assets/StoriesData/alumniImages'; // Import alumni images
import { awards } from '../assets/StoriesData/awards'; // Import awards
import ViewAllTestimonials from '../components/ViewAllTestimonials'; // Import ViewAllTestimonials
import ViewAllAlumni from '../components/ViewAllAlumni'; // Import ViewAllAlumni
import ViewAllAwards from '../components/ViewAllAwards'; // Import ViewAllAwards

const AlumniStories = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const truncateText = (text, percentage) => {
        const length = Math.floor(text.length * percentage);
        return text.length > length ? text.substring(0, length) + '...' : text;
    };

    return (
        <div className="overflow-x-hidden">
            {/* First Section */}
            <section className="flex flex-col md:flex-row items-center py-12 bg-gray-100">
                <div className="md:w-1/2 p-4 px-8 md:px-16">
                    <h2 className="text-3xl font-bold mb-4">Welcome to Alumni Stories</h2>
                    <p className="text-gray-700 mb-4">Discover the inspiring stories of our alumni and their journeys after graduation.</p>
                </div>
                <div className="md:w-1/2 p-4">
                    <img src="src/components/Memories/images/cover.png" alt="Alumni Stories" className="w-full h-auto rounded" />
                </div>
            </section>

            {/* Alumni Stories Section */}
            <section className="py-12 bg-white">
                <div className="flex justify-between items-center px-8 md:px-16">
                    <h2 className="text-3xl font-bold text-gray-800">Alumni Stories</h2>
                    <Link to="/all-testimonials" className="text-blue-500 hover:underline">View All</Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-16 mt-8">
                    {testimonialVideos.slice(0, 3).map(({ title, videoUrl, name, batch }, index) => (
                        <div key={index} className="relative bg-gray-200 p-4 rounded-lg shadow-lg">
                            <video src={videoUrl} className="w-full h-auto rounded mb-4" controls />
                            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                            <div className="flex justify-between text-gray-800">
                                <p className="font-bold">{name}</p>
                                <p className="font-bold">{batch}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Meet Our Alumni Section */}
            <section className="relative bg-gray-900 text-white py-12">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(src/components/Memories/images/cover.png)', filter: 'blur(2px) brightness(30%)' }}></div>
                <div className="relative text-center">
                    <h2 className="text-3xl font-bold mb-4">Meet Our Alumni</h2>
                    <p className="mb-8">Success Stories</p>
                    <Slider {...sliderSettings}>
                        {alumniImages.map(({ name, imageUrl, profileUrl }, index) => (
                            <div key={index} className="text-center">
                                <Link to={profileUrl}>
                                    <img src={imageUrl} alt={name} className="w-32 h-32 mx-auto rounded-full border-4 border-gray-700" />
                                    <p className="mt-2">{name}</p>
                                </Link>
                            </div>
                        ))}
                    </Slider>
                </div>
                <ViewAllAlumni />
            </section>

            {/* Alumni Awards Section */}
            <section className="py-12 bg-white">
                <div className="text-center px-8 md:px-16">
                    <h2 className="text-3xl font-bold text-gray-800">Alumni Awards</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-8 md:px-16 mt-8">
                    {awards.slice(0, 4).map(({ title, imageUrl, name, batch, description }, index) => (
                        <div key={index} className="text-center bg-gray-200 p-4 rounded-lg shadow-lg">
                            <img src={imageUrl} alt={title} className="w-32 h-32 mx-auto rounded-full border-4 border-gray-700" />
                            <h3 className="mt-2 text-lg font-semibold text-gray-800">{title}</h3>
                            <div className="flex justify-between text-gray-800">
                                <p className="font-bold">{name}</p>
                                <p className="font-bold">{batch}</p>
                            </div>
                            <p className="text-gray-800 mt-2">{truncateText(description, 0.2)}</p>
                        </div>
                    ))}
                </div>
                <div className="text-right px-8 md:px-16 mt-4">
                    <Link to="/all-awards" className="text-blue-500 hover:underline">View All</Link>
                </div>
            </section>
        </div>
    );
};

export default AlumniStories;