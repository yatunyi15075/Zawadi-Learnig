import React, { useState } from "react";

const Collaboration = () => {
  const [notes, setNotes] = useState(""); // State for new notes

  // Hardcoded collaboration data
  const hardcodedCollaborations = [
    {
      id: 1,
      parent: "John Doe (Parent)",
      teacher: "Ms. Smith",
      note: "Discussed improving math skills and introducing more visual aids.",
      date: "2024-11-20",
    },
    {
      id: 2,
      parent: "Jane Doe (Parent)",
      teacher: "Mr. Johnson",
      note: "Agreed to increase focus on reading comprehension activities.",
      date: "2024-11-21",
    },
  ];

  // Handle note submission (currently logs to console for testing)
  const handleAddNote = () => {
    if (notes.trim() === "") {
      alert("Please enter a note before submitting.");
      return;
    }

    console.log("Note added:", notes);
    setNotes(""); // Clear input field after submission
  };

  return (
    <div className="p-6 bg-gray-100 rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Parent/Teacher Collaboration</h1>

      {/* Collaboration List */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Previous Collaborations</h2>
        <ul className="space-y-4">
          {hardcodedCollaborations.map((collaboration) => (
            <li key={collaboration.id} className="p-4 border rounded bg-white shadow">
              <p className="text-sm text-gray-600">{collaboration.date}</p>
              <p className="font-semibold">
                {collaboration.parent} &amp; {collaboration.teacher}
              </p>
              <p>{collaboration.note}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Add New Collaboration */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Add New Collaboration Note</h2>
        <textarea
          className="w-full p-2 border border-gray-400 rounded mb-4"
          rows="5"
          placeholder="Enter collaboration notes..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>
        <button
          onClick={handleAddNote}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Submit Note
        </button>
      </div>
    </div>
  );
};

export default Collaboration;
