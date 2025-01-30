import React, { useState } from "react";
import { Link } from "react-router-dom";
import events from "../assets/EventData/Events";
import upcomingEvents from "../assets/EventData/UpcomingEvents";

const Event = () => {
  const [filterDate, setFilterDate] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = filterDate
    ? events.filter((event) => event.date === filterDate)
    : events.filter((event) =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const filteredUpcomingEvents = filterDate
    ? upcomingEvents.filter((event) => event.date === filterDate)
    : upcomingEvents.filter((event) =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase())
      );



  

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Events</h1>

      {/* Filter and Search Section */}
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <div className="flex-1 min-w-[200px]">
          <label htmlFor="search" className="block mb-2 font-semibold">
            Search Events
          </label>
          <input
            type="text"
            id="search"
            placeholder="Search by title"
            className="border border-gray-300 p-2 rounded-md w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex-1 min-w-[200px]">
          <label htmlFor="filter" className="block mb-2 font-semibold">
            Filter by Date
          </label>
          <input
            type="date"
            id="filter"
            className="border border-gray-300 p-2 rounded-md w-full"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
          />
        </div>
      </div>

      {/* Upcoming Events Section */}
      <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {filteredUpcomingEvents.map((event) => (
          <div
            key={event.eventId}
            className="border border-gray-300 rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-2 font-bold">Date: {event.date}</p>
              <p className="text-gray-600 mb-4 font-bold">
                {event.description}
              </p>
              <Link
                to={`/upcoming-event/${event.eventId}`}
                className="text-blue-500 hover:underline font-semibold"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Previous Events Section */}
      <h2 className="text-xl font-bold mb-4">Previous Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="border border-gray-300 rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-34 object-cover"
            />
            <div className="p-4">
              <h2 className="text-base font-bold mb-2  ">{event.title}</h2>
              <p className="text-gray-900 mb-2  text-sm font-bold">Date: {event.date}</p>
              <p className="text-gray-900 text-sm mb-4 font-bold">Desc: {event.description}</p>
              <Link
                to={`/event/${event.id}`}
                className="text-blue-500 font-semibold underline  hover:text-blue-600"
              >
                View More Images...
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
