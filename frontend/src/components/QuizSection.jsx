import React from 'react';

const QuizSection = () => {
  return (
    <div className="bg-gray-100 p-6 h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-bold mb-4">Quiz</h2>
        <div className="mb-4">
          <p className="font-semibold">1. What is a cow?</p>
          <div>
            <label className="block">
              <input type="radio" name="question1" className="mr-2" />
              A car
            </label>
            <label className="block">
              <input type="radio" name="question1" className="mr-2" />
              An animal
            </label>
          </div>
          <p className="text-red-500 mt-2">Wrong answer!</p>
        </div>

        <div className="mb-4">
          <p className="font-semibold">Bonus question: Something that eats grass and survives?</p>
          <div>
            <label className="block">
              <input type="radio" name="bonus" className="mr-2" />
              A car
            </label>
            <label className="block">
              <input type="radio" name="bonus" className="mr-2" />
              An animal
            </label>
          </div>
          <p className="text-green-500 mt-2">You are correct!</p>
        </div>

        <div className="mb-4">
          <p className="font-semibold">2. What is a banana?</p>
          <div>
            <label className="block">
              <input type="radio" name="question2" className="mr-2" />
              A fruit
            </label>
            <label className="block">
              <input type="radio" name="question2" className="mr-2" />
              A car
            </label>
          </div>
          <p className="text-green-500 mt-2">Right answer!</p>
        </div>
      </div>
    </div>
  );
};

export default QuizSection;
