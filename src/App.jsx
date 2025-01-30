import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import BatchDetails from "./components/BatchDetails";
import AlumniDirectory from "./components/AlumniDirectory";
import StudentProfile from "./components/StudentProfile";
import Event from "./components/Event";
import EventDetails from "./components/EventDetails";
import JoinEvent from "./components/JoinEvent";
import Memories from "./pages/Memories";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import AlumniStories from "./pages/AlumniStories";
import ViewAllAlumni from "./components/ViewAllAlumni";
import ViewAllAwards from "./components/ViewAllAwards";
import ViewAllTestimonials from "./components/ViewAllTestimonials";
import SubmittedProjects from "./pages/SubmittedProjects";
// import Login from './pages/Login'
// import SignUp from './pages/SignUp';
// import ResetPassword from './pages/ResetPassword';
// import Profile from './pages/Profile';

import Profile from "./pages/Profile";

import LoginSignup from "./pages/LoginSignup";

import BlogDetail from "./components/BlogDetail";
import Resources from "./components/Resources";

import BatchSelection from "./pages/BatchSelection";
import ScrollToTop from "./pages/ScrollToTop";





import JobBoard from "./components/JobBoard";
import Internships from "./components/Internship";
import AlumniCollab from "./components/AlumniCollab";
import MentorProgram from "./components/MentorProgram";






const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />{" "}
          {/* Add this line */}
          <Route path="/alumni-directory" element={<AlumniDirectory />} />
          <Route path="/batch/:programName/:year" element={<BatchDetails />} />
          <Route path="/profile/:studentName" element={<StudentProfile />} />
          <Route path="/events" element={<Event />} />
          <Route path="/event/:eventId" element={<EventDetails />} />
          <Route path="/upcoming-event/:eventId" element={<EventDetails />} />
          <Route path="/events/join/:eventId" element={<JoinEvent />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/gallery/:title" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/alumni-stories" element={<AlumniStories />} />
          <Route path="/all-alumni" element={<ViewAllAlumni />} />
          <Route path="/all-awards" element={<ViewAllAwards />} />
          <Route path="/submitted-projects" element={<BatchSelection />} />
          <Route
            path="/submitted-projects/:batchYear"
            element={<SubmittedProjects />}
          />
          <Route path="/resources" element={<Resources />} />
          <Route path="/job-board" element={<JobBoard />} />
  <Route path="/internships" element={<Internships />} />
  <Route path="/alumni-collab" element={<AlumniCollab />} />
  <Route path="/mentor-program" element={<MentorProgram />} />
          {/* <Route path='/login' element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} /> */}
          <Route path="/profile" element={<Profile />} /> {/* Add this route */}
          <Route path="/login-signup" element={<LoginSignup />} />{" "}
          {/* New route for login/signup */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
