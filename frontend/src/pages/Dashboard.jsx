import React from 'react';

function Dashboard() {
  return (
    <div className="min-h-screen flex">
      {/* Main Content */}
      <main className="flex-grow bg-gray-100 p-8">
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-gray-600">Welcome Back, Alex</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 focus:outline-none">
              <i className="fas fa-bell"></i>
            </button>
            <button className="text-gray-500 focus:outline-none">
              <i className="fas fa-cog"></i>
            </button>
          </div>
        </header>

        {/* Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-purple-600 text-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold">Ongoing Courses</h3>
          </div>
          <div className="bg-purple-600 text-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold">Assignments</h3>
          </div>
          <div className="bg-purple-600 text-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold">Progress</h3>
          </div>
        </section>

        {/* Upcoming Lessons & Progress Summary */}
        <section className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Upcoming Lessons</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p>Understanding the problem</p>
                  <p className="text-gray-400 text-sm">Starts in 2 days</p>
                </div>
                <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md">Start Lesson</button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p>Understanding the problem</p>
                  <p className="text-gray-400 text-sm">Starts in 1 day</p>
                </div>
                <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md">Start Lesson</button>
              </div>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md w-full mt-4">Continue Learning</button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Progress Summary</h3>
            <p className="text-4xl font-bold">30</p>
            <p className="text-sm text-gray-400 mb-4">Past Month +20</p>
            <img src="/path-to-progress-chart" alt="Progress Chart" className="w-full" />
          </div>
        </section>

        {/* Teacher's Feedback */}
        <section className="mt-8">
          <h3 className="text-lg font-bold">Recent Teacher's Feedback</h3>
          <table className="min-w-full bg-white rounded-lg shadow-md mt-4">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4">Teacher</th>
                <th className="py-2 px-4">Feedback</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4">Mr. Nganga</td>
                <td className="py-2 px-4">Finish up your assignment</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Mrs. Wamalwa</td>
                <td className="py-2 px-4">Work harder on Algebra</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
