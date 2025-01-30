import React from 'react'
import Feedback from '../components/Feedback'
import Blog from '../components/Blog'
import Features from '../components/Features'
// import About from '../components/About'
import Hero from '../components/Hero'
import Memories from '../components/Memories'
import ResourcesHome from '../components/ResourceHome'


const Home = () => {
    return (
        <div>
            <Hero/>
            {/* <About/> */}
     
            <Features/>
        
    
   
            <ResourcesHome />
            <Blog />
            <Memories/>
            <Feedback />
        </div>
    )
}

export default Home
