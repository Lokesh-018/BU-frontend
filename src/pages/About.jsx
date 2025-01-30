import React from 'react';
import { assets } from '../assets/AboutPage/aboutPage.js';
import facultyMembers from '../assets/AboutPage/facultyData.js';

import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="m-8 md:mx-12 lg:mx-16">
      {/* Introduction Section */}
      <div className="mb-14">
        <h1 className="font-bold text-3xl text-center md:text-left">
          <span className="text-blue-800">Welcome to
</span>  BUCS-CONNECT
        </h1>
        <p className="text-xl mt-3 text-justify border-gray-300 p-4 rounded-md shadow-md">
        Welcome to BUCS-CONNECT
Berhampur University Computer Science - Community of Networking and Excellence Through Technology

        </p>
      </div>

   


      {/* About VC Section */}
      <div className="mt-10">
  <h1 className="font-bold text-3xl text-center md:text-left">
    <span className="text-blue-800">Message from the </span>Vice-Chancellor
  </h1>
  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 items-center gap-6">
    <div>
      <img
        className="w-full max-w-md mx-auto md:mx-0 border-2 border-gray-100 p-4 rounded-md shadow-md"
        src={assets.vc_mam}
        alt="VC"
      />
    </div>
    <div>
      <p className="text-justify text-base tracking-tight border-2 border-gray-300 p-4 rounded-md shadow-md leading-relaxed">
        It gives me immense pleasure to welcome you to BUCS-CONNECT (Berhampur University Computer Science - Community of Networking and Excellence Through Technology), a vibrant initiative by the Department of Computer Science at Berhampur University, Odisha.   <br />

        Our alumni have always been the pride and backbone of our university, carrying the torch of excellence into diverse fields of technology and innovation. BUCS-CONNECT is a dedicated platform to foster lifelong connections, celebrate your achievements, and strengthen the bridge between our esteemed alumni and current students.  <br />

      

        I encourage you to actively engage with BUCS-CONNECT, contribute your expertise, and continue to be an integral part of our university's mission to advance education, innovation, and community well-being. Together, let us build a future driven by knowledge, collaboration, and technology.  <br />

        Wishing you success and fulfillment in all your endeavors!  <br />
        <span className="font-bold">
  Prof Geetanjali Dash <br />
  Vice-Chancellor <br />
  Berhampur University, Odisha, India <br />
</span>
      </p>
    </div>
  </div>
</div>


        {/* About BU Section */}
        <div className="mb-12 mt-14">
  <h1 className="font-bold text-3xl text-center md:text-left">
    <span className="text-blue-800">Message from the Chairman, </span> Post Graduate Council
  </h1>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div>
      <p className="text-justify text-base tracking-tight border-2 border-gray-300 p-4 rounded-md shadow-md leading-relaxed w-full">
        With immense pride and joy, I welcome you to BUCS-CONNECT—"Berhampur University Computer Science - Community of Networking and Excellence Through Technology." This initiative is a testament to the strong bond shared by the alumni and the Department of Computer Science at Berhampur University, Odisha. <br />

        This department has always been a hub of innovation, learning, and collaboration, shaping generations of professionals who have excelled in various Computer Science and Technology domains. BUCS-CONNECT aims to strengthen this legacy by creating a platform where alumni, students, and faculty can exchange ideas, share achievements, and explore opportunities for mutual growth. <br />

      

        Join us in this journey of networking, learning, and giving back to the institution that laid the foundation for your success. Together, let us shape a brighter future for the Computer Science fraternity at Berhampur University. <br />

        <span className="font-bold">
          Prof. Sukant Kumar Tripathy <br />
          Chairman, Post Graduate Council <br />
          Berhampur University, Odisha <br />
        </span>
      </p>
    </div>
    <div>
      <img
        className="w-full max-w-md mx-auto md:mx-20 border-2 border-gray-100 rounded-md shadow-md"
        src={assets.dept_front}
        alt="BU-CS"
      />
    </div>
  </div>
</div>
{/* About BU Section */}
<div className="mb-12 mt-14">
  <h1 className="font-bold text-3xl text-center md:text-left">
    <span className="text-blue-800">About BU-CS</span> Overview
  </h1>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
    <div className="md:col-span-2">
      <p className="text-justify text-base tracking-tight leading-relaxed border-2 border-gray-300 p-4 rounded-md shadow-md">
        The official alumni network of the Department of Computer Science, Berhampur University, Odisha, India, Welcome you to this platform is built to celebrate the spirit of our vibrant community, foster lifelong connections, and inspire excellence through collaboration and innovation. <br />

        Major Objectives: <br />

        1. Reconnect with fellow alumni and relive cherished memories. <br />
        2. Share your success stories and inspire the next generation of tech leaders. <br />
        3. Explore opportunities for professional growth, mentorship, and collaboration. <br />

        Together, let us strengthen the legacy of our department and contribute to a brighter future through networking and technology. <br />

        Join us in shaping a community of excellence—because once a part of BUCS, always a part of BUCS-CONNECT! <br />

        Stay connected, stay inspired! <br />
      </p>
    </div>
    <div>
      <img
        className="w-full max-w-md mx-auto md:mx-0 border-2 border-gray-100   rounded-md shadow-md"
        src={assets.dept_of_cs}
        alt="BU-CS"
      />
    </div>
  </div>
</div>

    

      {/* Message from HOD */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-1">
        <div>
          <img
            className="w-full max-w-md mx-auto md:mx-6 rounded-3xl mr-8 border-2 border-gray-100 p-4 shadow-md"
            src={assets.hod_sir}
            alt="HOD"
          />
        </div>
        <div className="border-2 border-gray-300 p-4 rounded-md shadow-md">
          <h6 className="font-bold text-l text-center md:text-left">
            <span className="text-blue-800">Message from the Head,</span>  Department of Computer Science  
          </h6>
          <p>
          I am immensely pleased to welcome you to BUCS-CONNECT — our vibrant "Berhampur University Computer Science Community of Networking and Excellence Through Technology." This platform is a testament to the enduring bond shared by the Department of Computer Science and its accomplished alumni worldwide.  <br />
 

  Together, let us uphold the spirit of innovation, learning, and technological advancement that defines the legacy of Berhampur University.  <br />

Welcome back to your alma mater, virtually and in spirit! <br /> 

Prof. Susanta Ku Das
Head, Department of Computer Science  
Berhampur University, Odisha, India
            <br /><span className='font-bold'>Dr.Susant Kumar Das</span>
          </p>
        </div>
      </div>

      <h2 className="font-bold text-3xl text-center md:text-left mt-14  text-blue-900">Faculty Members</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
        {facultyMembers.map((member, index) => (
          <div key={index} className="bg-white p-4 rounded shadow-md" style={{ width: '220px' }}>
  <img src={member.image} alt={member.name} className="w-32 h-32 object-cover   rounded-full mb-2 mx-auto" />
            <h3 className="text-sm font-bold mb-1">{member.name}</h3>
            <p className="text-gray-900 text-xs  mb-1">Designation: {member.designation}</p>
            <p className="text-gray-900  font-semibold  text-xs">Status: {member.status}</p>
          </div>
        ))}
      </div>




      {/* Vision and Mission Section */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-20 px-4 md:px-18 lg:px-8">
        <div className="bg-blue-50 text-white p-6 rounded shadow-md">
          <h2 className="text-blue-800 text-xl font-bold mb-2">Vision</h2>
          <p className="text-black text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
            sapiente voluptates nisi consequuntur distinctio impedit
            voluptatum veritatis consectetur blanditiis odit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor eveniet est repudiandae. Voluptatem, inventore iure dolor quaerat ad culpa praesentium amet molestiae iste in natus! Laudantium quisquam iste quos voluptates..
          </p>
        </div>
        <div className="bg-blue-50 text-white p-6 rounded shadow-md">
          <h2 className="text-blue-900 text-xl font-bold mb-2">Mission</h2>
          <p className="text-black text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
            sapiente voluptates nisi consequuntur distinctio impedit
            voluptatum veritatis consectetur blanditiis odit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda mollitia maxime sapiente laudantium tempora facilis minima natus quasi, temporibus consequatur similique perspiciatis vero ipsum recusandae quisquam. Totam error illo facere?.
          </p>
        </div>
      </div> */}

      {/* Impact Message */}
      {/* <div className="max-w-3xl mx-auto mt-16">
        <h1 className="font-bold text-2xl text-center m-2 md:text-left">
          <span className="text-blue-800 text-center">Impact Message</span> For Alumni
        </h1>
        <div className="text-gray-700 bg-orange-50 border-2 border-gray-300 rounded-md shadow-md p-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nobis facilis earum non dolores suscipit, delectus perferendis rem harum atque incidunt, nulla impedit et quis provident amet itaque, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque nesciunt voluptate consequuntur cumque harum? Id nisi adipisci eos maxime incidunt amet laboriosam aliquid soluta, placeat iusto facere, tenetur dolores qui rem ex, labore unde cupiditate exercitationem eaque! Quod fuga enim magnam, maiores, ex animi provident ad laudantium delectus totam eos. sapiente officia.
        </div>
      </div> */}
      
    </div>
  );
};

export default About;