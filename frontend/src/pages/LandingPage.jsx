import React from 'react';
import { useNavigate } from 'react-router-dom';

import landing from '../assets/landing.png';
import logo from '../assets/logo.png';

const LandingPage = () => {

  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/register');
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 shadow-lg">
        <div className="text-2xl font-bold">
        <img
            src={logo} 
            alt="Child Illustration"
            className="w-14 h-15 "
          />
        </div>
        <div className="space-x-8">
          <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#team" className="text-gray-600 hover:text-gray-900">Team</a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
          <a href="#products" className="text-gray-600 hover:text-gray-900">Our Products</a>
        </div>
        <div className="space-x-4">
          <a href="/login" className="text-purple-600">Login</a>

      <button 
        onClick={handleGetStarted} 
        className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700"
      >
        Get Started
      </button>

        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-between items-center p-12 min-h-[80vh]">
        {/* Left Side - Text */}
        <div className="md:flex-1 text-center md:text-left">
          <h1 className="text-5xl font-bold">
            The <span className="text-purple-600">Best</span> Platform For Your Child To Learn
          </h1>
          <p className="text-gray-700 my-6">
            Provide quality learning for your child with our platform, accessible to all children, with a special focus on the abled differently children.
          </p>

        <button 
        onClick={handleGetStarted} 
        className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700"
      >
        Get Started
      </button>
        </div>

        {/* Right Side - Image */}
        <div className="md:flex-1 mt-8 md:mt-0 flex justify-center">
          <img
            src={landing} 
            alt="Child Illustration"
            className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 max-w-lg md:max-w-xl lg:max-w-2xl"
            />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
