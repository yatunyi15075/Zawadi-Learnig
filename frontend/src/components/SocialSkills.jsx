import React, { useState } from "react";

const SocialSkills = () => {
  const [currentExercise, setCurrentExercise] = useState(null);

  // Hardcoded exercises and feedback data
  const exercises = [
    {
      id: 1,
      title: "Saying 'Hello'",
      description: "Practice greeting someone politely with a smile.",
      steps: [
        "Make eye contact.",
        "Smile gently.",
        "Say 'Hello' or 'Hi' in a clear voice.",
      ],
      tips: "Remember to be polite and friendly.",
    },
    {
      id: 2,
      title: "Asking 'How are you?'",
      description: "Learn how to show interest in someone's well-being.",
      steps: [
        "Start with a greeting like 'Hello.'",
        "Ask 'How are you?' in a caring tone.",
        "Listen to their response attentively.",
      ],
      tips: "Use a positive tone and be patient.",
    },
    {
      id: 3,
      title: "Responding to questions",
      description: "Practice answering simple questions politely.",
      steps: [
        "Listen carefully to the question.",
        "Take a moment to think before responding.",
        "Answer clearly and respectfully.",
      ],
      tips: "Stay calm and focused when responding.",
    },
  ];

  // Handler to view details of an exercise
  const viewExercise = (id) => {
    const exercise = exercises.find((ex) => ex.id === id);
    setCurrentExercise(exercise);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Social Skills Practice</h1>
      <p className="mb-4">
        Select an exercise below to practice common social interactions:
      </p>
      <ul className="space-y-2 mb-6">
        {exercises.map((exercise) => (
          <li
            key={exercise.id}
            className="p-4 border rounded-lg shadow hover:bg-gray-100 cursor-pointer"
            onClick={() => viewExercise(exercise.id)}
          >
            {exercise.title}
          </li>
        ))}
      </ul>

      {currentExercise && (
        <div className="p-4 border rounded-lg bg-gray-50 shadow">
          <h2 className="text-xl font-semibold mb-2">
            {currentExercise.title}
          </h2>
          <p className="mb-4">{currentExercise.description}</p>
          <h3 className="font-bold mb-2">Steps:</h3>
          <ol className="list-decimal ml-6 space-y-1">
            {currentExercise.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 font-semibold text-blue-600">
            Tips: {currentExercise.tips}
          </p>
          <button
            className="mt-4 p-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            onClick={() => setCurrentExercise(null)}
          >
            Back to Exercises
          </button>
        </div>
      )}
    </div>
  );
};

export default SocialSkills;
