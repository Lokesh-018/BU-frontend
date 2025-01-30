import React from 'react';
import { useNavigate } from 'react-router-dom';
import projects from '../assets/PoojectsData/projectsData.js'; // Import projects data

const BatchSelection = () => {
    const navigate = useNavigate();
    const batchYears = [...new Set(projects.map(project => project.batch))]
        .sort((a, b) => b - a); // Sort in descending order

    const handleBatchSelect = (year) => {
        navigate(`/submitted-projects/${year}`);
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold text-center mb-6">Select Batch Year</h1>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                {batchYears.map((year) => (
                    <button
                        key={year}
                        onClick={() => handleBatchSelect(year)}
                        className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all
                                 flex items-center justify-center text-sm font-semibold
                                 hover:bg-blue-50 border border-blue-100"
                    >
                        Batch {year}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BatchSelection;