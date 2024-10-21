import React from 'react';

const Logout = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen p-6">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-4">Log Out</h1>
        <p className="mb-2">Are you sure?</p>
        <p className="text-sm text-blue-600 underline">
          Log out will remove all of your data from this device. You can still access your account by logging in again.
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex space-x-4">
        <button className="bg-red-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-red-700">
          Yes, log me out
        </button>
        <button className="bg-gray-200 text-gray-700 font-semibold py-2 px-6 rounded-full hover:bg-gray-300">
          No, keep me logged in
        </button>
      </div>
    </div>
  );
};

export default Logout;
