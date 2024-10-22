import React from 'react';
import { Link } from 'react-router-dom';

const Technology = () => {
  return (
    <div className="relative bg-transparent text-white p-8 max-w-5xl mx-auto mt-16">
      {/* The mt-16 ensures there's margin at the top to avoid overlap with the navbar */}

      {/* Page Header */}
      <h1 className="text-4xl font-bold mb-6 text-center">Our Technology</h1>

      {/* Subheading */}
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Cutting-Edge Tools for Space Exploration
      </h2>

      {/* Technology Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Item 1 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Advanced Spacecraft</h3>
          <p className="text-lg leading-relaxed">
            Our spacecraft are built using state-of-the-art materials and designs, allowing for deep-space exploration and long-duration missions. They are equipped with the latest propulsion systems and navigation technologies.
          </p>
        </div>

        {/* Item 2 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Robotics and AI</h3>
          <p className="text-lg leading-relaxed">
            Our team utilizes cutting-edge robotics and AI to assist in space missions, performing complex tasks such as planetary exploration, sample collection, and autonomous decision-making in unknown environments.
          </p>
        </div>

        {/* Item 3 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Satellite Communication</h3>
          <p className="text-lg leading-relaxed">
            We develop highly sophisticated satellite communication systems to ensure a constant and reliable flow of data between our spacecraft and mission control, no matter how far we travel into the cosmos.
          </p>
        </div>

        {/* Item 4 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Space Propulsion Systems</h3>
          <p className="text-lg leading-relaxed">
            Our propulsion systems are designed for maximum efficiency and power, allowing for faster travel to distant planets and beyond. We are constantly innovating with ion propulsion, nuclear thermal propulsion, and other future-forward technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technology;
