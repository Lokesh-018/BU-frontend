import React from 'react';
import { useParams } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { FaDownload } from 'react-icons/fa'; // Import the download icon
import memories from '../assets/MemoriesData/data/memoriesData'; // Import memories data

const Gallery = () => {
    const { title } = useParams();
    const decodedTitle = decodeURIComponent(title);
    const memory = memories.find(memory => memory.title === decodedTitle);

    if (!memory) {
        return <div className="text-center text-red-500">Memory not found. Please check the URL.</div>;
    }

    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1
    };

    const downloadImage = (url) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = url.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const downloadAllImages = async () => {
        const zip = new JSZip();
        const folder = zip.folder(memory.title);

        for (const image of memory.images) {
            const response = await fetch(image);
            const blob = await response.blob();
            folder.file(image.split('/').pop(), blob);
        }

        zip.generateAsync({ type: 'blob' }).then((content) => {
            saveAs(content, `${memory.title}.zip`);
        });
    };

    return (
        <div className="container mx-auto p-4">
            <style>
                {`
                .my-masonry-grid {
                    display: flex;
                    margin-left: -30px; /* gutter size offset */
                    width: auto;
                }
                .my-masonry-grid_column {
                    padding-left: 30px; /* gutter size */
                    background-clip: padding-box;
                }
                .my-masonry-grid img {
                    margin-bottom: 30px;
                }
                `}
            </style>
            <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">{memory.title}</h1>
            <button
                onClick={downloadAllImages}
                className="bg-blue-600 text-white px-4 py-2 rounded mb-4 hover:bg-blue-800"
            >
                Download All Images
            </button>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {memory.images.map((image, index) => (
                    <div key={index} className="relative">
                        <img
                            src={image}
                            alt={`Memory ${index}`}
                            className="w-full h-auto rounded shadow"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = '/images/placeholder.jpg';
                            }}
                        />
                        <FaDownload
                            onClick={() => downloadImage(image)}
                            className="absolute top-2 right-2 text-white bg-blue-600 p-1 rounded-full cursor-pointer hover:bg-blue-800"
                            size={24}
                        />
                    </div>
                ))}
            </Masonry>
        </div>
    );
};

export default Gallery;