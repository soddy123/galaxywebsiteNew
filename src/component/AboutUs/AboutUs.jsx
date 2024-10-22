import React from 'react';
import {Link} from 'react-router-dom';

function AboutUs() {
  return (
    <div className="relative bg-transparent text-white p-8 max-w-4xl mx-auto mt-16"> 
      {/* The mt-16 ensures there's margin at the top to avoid overlap with the navbar */}
      
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>

      {/* Subheading */}
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Exploring the Frontiers of Space
      </h2>

      {/* Content */}
      <p className="text-lg leading-relaxed mb-4 text-center">
        We are a team of passionate scientists, engineers, and innovators
        dedicated to exploring the vast unknown of space. Our mission is to
        unlock the mysteries of the cosmos, advance space technology, and
        contribute to the understanding of our universe.
      </p>

      <p className="text-lg leading-relaxed mb-4 text-center">
        From cutting-edge space missions to groundbreaking research, we are at
        the forefront of space exploration, seeking answers to questions that
        have intrigued humanity for centuries. Join us on our journey to
        discover new worlds, study distant stars, and push the boundaries of
        what is possible.
      </p>

      {/* Button */}
      <div className="text-center mt-6">
        <Link
          to="/satellite"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Learn More About Our Missions
        </Link>
      </div>
    </div>
  );
}

export default AboutUs;
