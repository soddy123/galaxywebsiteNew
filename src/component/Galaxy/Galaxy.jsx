import React from 'react';
import { Link } from 'react-router-dom';

const Galaxy = () => {
  return (
    <div className="relative bg-transparent text-white p-8 max-w-5xl mx-auto mt-16">
      {/* Page Header */}
      <h1 className="text-4xl font-bold mb-6 text-center">Exploring the Galaxies</h1>

      {/* Introduction */}
      <p className="text-lg leading-relaxed mb-8 text-center">
        Galaxies are massive systems consisting of stars, stellar remnants, interstellar gas, dust, and dark matter. Our research focuses on exploring these celestial giants to uncover the secrets of the universe.
      </p>

      {/* Galaxies Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Milky Way Galaxy */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">The Milky Way</h3>
          <p className="text-lg leading-relaxed">
            Our home galaxy, the Milky Way, is a barred spiral galaxy containing billions of stars. It is approximately 100,000 light-years across and hosts our solar system. We are constantly studying its structure and the phenomena that occur within it.
          </p>
        </div>

        {/* Andromeda Galaxy */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Andromeda Galaxy</h3>
          <p className="text-lg leading-relaxed">
            The Andromeda Galaxy is the nearest spiral galaxy to the Milky Way and is on a collision course with us in the distant future. It spans more than 220,000 light-years and is home to over one trillion stars.
          </p>
        </div>

        {/* Whirlpool Galaxy */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">The Whirlpool Galaxy</h3>
          <p className="text-lg leading-relaxed">
            The Whirlpool Galaxy, also known as M51, is famous for its clearly defined spiral arms and stunning structure. It interacts with a smaller galaxy, NGC 5195, creating beautiful tidal streams.
          </p>
        </div>

        {/* Sombrero Galaxy */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Sombrero Galaxy</h3>
          <p className="text-lg leading-relaxed">
            The Sombrero Galaxy, also known as M104, is an unbarred spiral galaxy known for its bright nucleus and large central bulge, giving it the appearance of a sombrero hat. It is one of the most massive objects in the nearby universe.
          </p>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-8">
        <p className="text-lg leading-relaxed">
          Our exploration of galaxies reveals how stars and planetary systems form, evolve, and interact on a cosmic scale. Each galaxy offers a glimpse into the past and future of our universe.
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <Link
          to="/galactic-missions"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
        >
          Explore Our Galactic Missions
        </Link>
      </div>
    </div>
  );
};

export default Galaxy;
