import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import projects from '../assets/PoojectsData/projectsData.js'; // Import projects data

const StarRating = ({ rating, onRating, averageRating = 0, ratingCount = 0 }) => {
    const [hover, setHover] = useState(null);

    return (
        <div className="flex items-center justify-end mt-2">
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;

                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => onRating(ratingValue)}
                            className="hidden"
                        />
                        <FaStar
                            className="cursor-pointer"
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            size={16}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
            <span className="ml-2 text-gray-700 text-sm">{averageRating.toFixed(1)} ({ratingCount} ratings)</span>
        </div>
    );
};

const SubmittedProjects = () => {
 

    useEffect(() => {
        // Fetch projects data or use imported data
        setProjectList(projects);
    }, []);

    const handleRating = (id, rating) => {
        setProjectList(prevList =>
            prevList.map(project =>
                project.id === id ? { ...project, rating, averageRating: rating } : project
            )
        );
    };
    const { batchYear } = useParams();
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        const filteredProjects = projects.filter(project => project.batch === batchYear);
        setProjectList(filteredProjects);
    }, [batchYear]);


    return (
        <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {projectList.map((project, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg p-4 flex flex-col h-[28rem]">
                    <div className="flex justify-center items-center h-32">
                        <img src={project.image} alt={project.name} className="w-full h-full object-contain rounded-lg" />
                    </div>
                    <div className="mt-2 flex-grow">
                        <h2 className="text-lg font-bold mb-1">{project.name}</h2>
                        <p className="text-gray-700 text-xs mb-1"><strong>Description:</strong> {project.description}</p>
                        <p className="text-gray-700 text-xs mb-1"><strong>Tools Used:</strong> {project.tools}</p>
                        <p className="text-gray-700 text-xs mb-1"><strong>Developer:</strong> {project.owner}</p>
                        <p className="text-gray-700 text-xs mb-1"><strong>Batch:</strong> {project.batch}</p>
                        <p className="text-gray-700 text-xs mb-1"><strong>Email:</strong> {project.email}</p>
                    </div>
                        <div className="flex justify-between items-center mt-2">
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-sm mr-2">GitHub</a>
                            <a href={project.linkedinLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-sm mr-2">LinkedIn</a>
                            <StarRating
                                rating={project.rating}
                                onRating={(rating) => handleRating(project.id, rating)}
                                averageRating={project.averageRating}
                                ratingCount={project.ratingCount}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SubmittedProjects;