import React from 'react';
import { Link } from 'react-router-dom';

const ViewAllAlumni = () => {
    return (
        <div className="relative text-right px-8 md:px-16 mt-4">
            <Link to="/alumni-directory" className="text-blue-500 hover:underline">View All</Link>
        </div>
    );
};

export default ViewAllAlumni;