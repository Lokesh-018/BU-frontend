import freshers from '../images/eventImages2024/freshers/assets.js';
import seminar  from '../images/eventImages2024/seminar/assets.js';
import teachersDay from '../images/eventImages2024/teachersDay/assets.js';
import picnic from '../images/eventImages2024/picnic/assets.js';

const loadImage = (imagePath) => {
    return new URL(imagePath, import.meta.url).href;
};

const MemoriesOf2024 = [
    {
        id: 1,
        title: "Freshers 2024",
        category: "Memories Of 2024",
        coverImage: freshers.img2,
        description: "Description for Freshers Day",
        images: [
            freshers.img1,
            freshers.img3,
            freshers.img4,
            freshers.img5,
            freshers.img6,
            freshers.img7
        ]
    },
    {
        id: 2,
        title: "Picnic ",
        category: "Memories Of 2024",
        coverImage: picnic.img3,
        description: "Description for Picnic Day",
        images: [
            picnic.img1,
            picnic.img2,
            picnic.img3,
            picnic.img4,
        
        ]
    },
    {
        id: 3,
        title: "Seminar 2024",
        category: "Memories Of 2024",
        coverImage: seminar.img2,
        description: "Description for Seminar",
        images: [
            seminar.img1,
            seminar.img2,
            seminar.img3,
            seminar.img4,
            seminar.img5,
            seminar.img6,
            seminar.img7,
            seminar.img8,
            seminar.img9,
            seminar.img10,
        ]
    },
    {
        id: 4,
        title: "Teachers Day 2024",
        category: "Memories Of 2024",
        coverImage: teachersDay.img2,
        description: "Description for Teachers Day 2024",
        images: [
          teachersDay.img1,
          teachersDay.img2,
          teachersDay.img3,
          teachersDay.img4,
          teachersDay.img5,
          teachersDay.img6,

        ],
      },
];

export default MemoriesOf2024;