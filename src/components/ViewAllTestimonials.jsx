import React from 'react';
import { testimonialVideos } from '../assets/StoriesData/testimonialVideos'; // Import testimonial videos

const ViewAllTestimonials = () => {
    return (
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">All Testimonials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonialVideos.map(({ title, videoUrl, name, batch }, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                        <video src={videoUrl} className="w-full h-auto rounded mb-4" controls />
                        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                        <div className="flex justify-between text-gray-600">
                            <p>{name}</p>
                            <p>{batch}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ViewAllTestimonials;