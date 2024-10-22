import React from 'react';
import { Link } from 'react-router-dom';

const Satellite = () => {
  return (
    <div className="relative bg-transparent text-white p-8 max-w-5xl mx-auto mt-16">
      {/* Page Header */}
      <h1 className="text-4xl font-bold mb-6 text-center">Our Satellites</h1>

      {/* Introduction */}
      <p className="text-lg leading-relaxed mb-8 text-center">
        Satellites play a crucial role in space exploration and communication. They provide vital data for research, navigation, and monitoring of our planet. Here are some of our most important satellite technologies and missions.
      </p>

      {/* Satellites Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Weather Monitoring Satellite */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Weather Monitoring Satellites</h3>
          <p className="text-lg leading-relaxed">
            Our weather satellites track and monitor global weather patterns, providing real-time data to predict weather conditions and study climate changes. These satellites are equipped with advanced sensors to capture high-resolution images of Earth's atmosphere.
          </p>
        </div>

        {/* Communication Satellite */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Communication Satellites</h3>
          <p className="text-lg leading-relaxed">
            Our communication satellites enable reliable and fast communication across the globe, especially for remote areas and deep-space missions. These satellites transmit data, voice, and video, supporting crucial space operations.
          </p>
        </div>

        {/* Earth Observation Satellite */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Earth Observation Satellites</h3>
          <p className="text-lg leading-relaxed">
            Earth observation satellites monitor environmental changes, deforestation, glacier movement, and ocean patterns. They provide valuable data that is essential for scientific research and disaster management.
          </p>
        </div>

        {/* Navigation Satellite */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Navigation Satellites</h3>
          <p className="text-lg leading-relaxed">
            Navigation satellites, such as those forming part of the Global Positioning System (GPS), offer precise location and timing information across the planet. These satellites are vital for navigation in air, land, sea, and space exploration missions.
          </p>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-8">
        <p className="text-lg leading-relaxed">
          Satellites are an integral part of our space missions, helping us gather critical information, communicate with spacecraft, and enhance our understanding of Earth's environment and beyond. We continue to innovate and launch new satellites with more advanced capabilities.
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <Link
          to="/satellite-missions"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
        >
          Learn More About Our Satellite Missions
        </Link>
      </div>
    </div>
  );
};

export default Satellite;
