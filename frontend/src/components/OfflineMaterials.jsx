import React from "react";

const OfflineMaterials = () => {
  const materials = [
    { id: 1, title: "Math Worksheet - Addition", file: "addition_worksheet.pdf" },
    { id: 2, title: "Reading Comprehension Pack", file: "reading_comprehension.pdf" },
    { id: 3, title: "Science Experiment Guide", file: "science_guide.pdf" },
    { id: 4, title: "Creative Writing Prompts", file: "writing_prompts.pdf" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Offline Materials</h1>
      <ul className="space-y-3">
        {materials.map((material) => (
          <li
            key={material.id}
            className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow"
          >
            <span className="font-semibold">{material.title}</span>
            <a
              href={`/materials/${material.file}`}
              download
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Download
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OfflineMaterials;
