import { assets } from '../EventData/images/upcoming.js';

const upcomingEvents = [
    {
      eventId: 1,
      title: 'Study Tour 2025',
      date: '2025-02-01', 
      description: 'Explore the latest advancements in technology.',
      details: 'The Study Tour 2025 will feature exhibits from top tech companies showcasing cutting-edge innovations in AI, robotics, and more.',
      image: assets.studytour || '/default-image.jpg',
    },
    {
      eventId: 2,
      title: 'Hackathon 2025', 
      date: '2025-xx-xx',
      description: 'A celebration of art and creativity and technology.',
      details: 'Join us at Hackathon 2025 for stunning exhibitions and workshops.',
      image: assets.hackthon || '/default-image.jpg',
    },
];

export default upcomingEvents;