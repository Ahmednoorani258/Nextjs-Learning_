"use client"

// pages/index.tsx
import React, { useState } from 'react';
import TerminalSimulator from '@/app/components/TerminalSimulator';

interface CLIProject {
  name: string;
  command: string;
  description: string;
}

const cliProjects: CLIProject[] = [
  {
    name: 'Word Counter',
    command: 'npx noorani_word_counter',
    description: 'Count words and characters in a text input.',
  },
  {
    name: 'Space Game',
    command: 'npx noorani_space_adventure_game',
    description: 'An adventure game.',
  },
];

const Home = () => {
  const [selectedProject, setSelectedProject] = useState<CLIProject | null>(null);

  const handleCardClick = (project: CLIProject) => {
    setSelectedProject(project);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      {!selectedProject ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cliProjects.map((project) => (
            <div
              key={project.name}
              className="border p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
              onClick={() => handleCardClick(project)}
            >
              <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
              <p className="text-gray-400">{project.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <button
            onClick={() => setSelectedProject(null)}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 mb-4"
          >
            Back to Projects
          </button>
          <TerminalSimulator project={selectedProject} />
        </div>
      )}
    </div>
  );
};

export default Home;
