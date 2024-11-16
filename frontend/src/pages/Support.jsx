import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import axios from 'axios';

const HelpSupport = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/support', { name, email, message });
      setResponse('Your message has been sent successfully.');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setResponse('Failed to send the message.');
      console.error(error);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Help & Support</h2>
        <div className="mb-6">
          <h3 className="text-lg font-semibold">FAQ</h3>
          <ul className="mt-2 space-y-2">
            <li className="flex justify-between items-center">
              <p>General questions</p>
              <FaArrowRight />
            </li>
          </ul>
        </div>

        <h3 className="text-lg font-semibold mb-4">How can we help you?</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-bold text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
              placeholder="Enter your message"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
        {response && <p className="text-center mt-4 text-gray-600">{response}</p>}
      </div>
    </div>
  );
};

export default HelpSupport;
