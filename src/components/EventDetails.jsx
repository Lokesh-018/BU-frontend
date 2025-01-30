import React from "react";
import { useParams, useLocation, Link, Navigate } from "react-router-dom";
import upcomingEvents from "../assets/EventData/UpcomingEvents";
import events from "../assets/EventData/Events";

const EventDetails = () => {
  const { eventId } = useParams();
  const location = useLocation();
  const isUpcomingEvent = location.pathname.includes("upcoming");
  
  // If not an upcoming event, redirect to memories
  if (!isUpcomingEvent) {
    return <Navigate to="/memories" />;
  }

  const event = isUpcomingEvent
    ? upcomingEvents.find((event) => event.eventId === parseInt(eventId))
    : events.find((event) => event.id === parseInt(eventId));

  if (!event) {
    return <div className="p-6 text-center">Event not found</div>;
  }

  return (
    <div className="p-6 flex flex-col items-center text-center">
      {/* Event Image */}
      <img
        src={event.image}
        alt={event.title}
        className="w-full max-w-md h-auto rounded-lg shadow mb-6"
      />

      {/* Event Title */}
      <h1 className="text-3xl font-bold mb-4">{event.title}</h1>

      {/* Event Description */}
      <div className="mb-6">
        <p className="text-lg text-gray-700 mb-2">
          <span className="font-semibold">Date:</span> {event.date}
        </p>
        <p className="text-gray-600">{event.details}</p>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 w-full flex items-center justify-between">
        {/* Join Us Button (centered using empty divs for spacing) */}
        <div className="flex-1"></div>
        <Link
  to={`/events/join/${eventId}`}
  className="text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
>
  Join Us
</Link>
        {/* Back to Events Button (aligned to the right) */}
        <Link
          to={isUpcomingEvent ? "/events" : "/events"}
          className="flex-1 text-blue-500 hover:underline font-semibold text-right"
        >
          Back to Events
        </Link>
      </div> 
    </div>
  );
};

export default EventDetails;
