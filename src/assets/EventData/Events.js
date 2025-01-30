import { assets } from '../EventData/images/past.js';

const events = [
  {
    id: 0,
    title: 'BUCS Picnic ',
    date: '2024-12-21',
    description: 'Picnic event by CS.',
    details: 'Detailed information about BUCS Picnic 2025...',
    image: assets.picnic2024 || '/default-image.jpg',
  },
  {
    id: 1,
    title: 'BUCS ADINAVA ',
    date: '2024-11-08',
    description: 'Fresher event by CS.',
    details: 'Detailed information about BUCS ADINAVA 2024...',
    image: assets.fresher2024 || '/default-image.jpg',
  },
  {
    id: 2,
    title: 'BUCS Teachers Day Celebration ',
    date: '2024-09-05',
    description: 'Teachers Day Celebration by CS.',
    details: 'Detailed information about BUCS Teachers Day Celebration...',
    image: assets.teachersday || '/default-image.jpg',
  },
  {
    id: 3,
    title: 'BUCS Sports Day Celebration ',
    date: '',
    description: 'Sports Day Celebration by BU.',
    details: 'Detailed information about BU Sports Day Celebration...',
    image: assets.sportsday || '/default-image.jpg',
  },
  
];

export default events;