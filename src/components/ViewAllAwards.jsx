import React from 'react';
import { awards } from '../assets/StoriesData/awards'; // Import awards data

const ViewAllAwards = () => {
    return (
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">All Awards</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {awards.map(({ title, imageUrl, name, batch, description }, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                        <img src={imageUrl} alt={title} className="w-32 h-32 mx-auto rounded-full border-4 border-gray-700 mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                        <div className="flex justify-between text-gray-600">
                            <p>{name}</p>
                            <p>{batch}</p>
                        </div>
                        <p className="text-gray-600 mt-2">{description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ViewAllAwards;