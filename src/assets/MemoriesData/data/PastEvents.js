import treeplantation2024 from '../images/eventImages2024/treeplantation/assets.js';
import conference2023 from '../images/eventImages2024/conference2023/assets.js';
import farewell2023 from '../images/eventImages2024/farewell23/assets.js'
const loadImage = (imagePath) => {
    return new URL(imagePath, import.meta.url).href;
};

const pastEvents = [
    {
        id: 1,
        title: "Tree Plantation 2024",
        category: "Past Events",
        coverImage: treeplantation2024.img1,
        description: "Description for Freshers Day",
        images: [
            treeplantation2024.img1,
            treeplantation2024.img2,
           
        ]
    },
    {
        id: 2,
        title: "National Conference",
        category: "Past Events",
        coverImage: conference2023.image202322,
        description: "Description for Freshers Day",
        images: [
      conference2023.image20232,
      conference2023.image20233,
      conference2023.image20234,
      conference2023.image20235,
      conference2023.image20236,
      conference2023.image20237,
      conference2023.image20238,
      conference2023.image20239,
      conference2023.image202310,
      conference2023.image202311,
      conference2023.image202312,
      conference2023.image202313,
      conference2023.image202314,
      conference2023.image202315,
      conference2023.image202316,
      conference2023.image202317,
      conference2023.image202318,
      conference2023.image202319,
      conference2023.image202320,
      conference2023.image202321,
      conference2023.image202322,
      conference2023.image202323,
      conference2023.image202324,
      conference2023.image202325,
      conference2023.image202326,
      conference2023.image202327,
      conference2023.image202328,
      conference2023.image202329,
      conference2023.image202330,
      conference2023.image202331,
      conference2023.image202332,
      conference2023.image202333,
      conference2023.image202334,
      conference2023.image202335,
      conference2023.image202336,
      conference2023.image202337,
      conference2023.image202338,
      conference2023.image202339,  
    ]
    },
    {
        id: 3,
        title: "Farewell 2023",
        category: "Past Events",
        coverImage: farewell2023.img1,
        description: "Description for Freshers Day",
        images: [
            farewell2023.img1,
            farewell2023.img2,
            farewell2023.img3,
            farewell2023.img4,
            farewell2023.img5,
            farewell2023.img6,


           
        ]
    },
   
];

export default pastEvents;