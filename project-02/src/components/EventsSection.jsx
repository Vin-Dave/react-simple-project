import React from "react";

const EventsSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold mb-8 text-center text-gray-800">
          Upcoming Events
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-6">
          {/* Event Card 1 */}
          <div className="bg-white p-6 rounded-md shadow-md transition-transform transform hover:scale-105 mx-2">
            <img
              src="path/to/event1.jpg"
              alt="Event 1"
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold mb-2">
              Cooking Workshop: Italian Cuisine
            </h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-gray-700">Date: June 15, 2022</p>
            <p className="text-gray-700">Time: 4:00 PM - 7:00 PM</p>
            <p className="mt-4 text-blue-600">Learn More</p>
          </div>

          {/* Event Card 2 */}
          <div className="bg-white p-6 rounded-md shadow-md transition-transform transform hover:scale-105 mx-2">
            <img
              src="path/to/event2.jpg"
              alt="Event 2"
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold mb-2">
              Food Festival: Local Delights
            </h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-gray-700">Date: July 22-24, 2022</p>
            <p className="text-gray-700">Location: City Park Pavilion</p>
            <p className="mt-4 text-blue-600">Get Tickets</p>
          </div>

          {/* Event Card 3 */}
          <div className="bg-white p-6 rounded-md shadow-md transition-transform transform hover:scale-105 mx-2">
            <img
              src="path/to/event3.jpg"
              alt="Event 3"
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold mb-2">
              Cooking Class: Healthy Living
            </h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-gray-700">Date: August 10, 2022</p>
            <p className="text-gray-700">Time: 5:30 PM - 8:30 PM</p>
            <p className="mt-4 text-blue-600">Register Now</p>
          </div>
        </div>

        <p className="mt-8 text-lg text-gray-700 text-center">
          Explore our upcoming events and join us for a culinary journey filled
          with delightful flavors and enriching experiences.
        </p>
      </div>
    </section>
  );
};

export default EventsSection;
