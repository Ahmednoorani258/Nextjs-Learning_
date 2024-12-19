"use client";

import React, { useEffect, useRef, useState } from "react";
import { Terminal } from "xterm";
import "xterm/css/xterm.css"; // Import xterm styles

interface CLIProject {
  name: string;
  command: string;
  description: string;
}

const TerminalSimulator = ({ project }: { project: CLIProject }) => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [inputCommand, setInputCommand] = useState<string>(''); // To manage user input
  const [output, setOutput] = useState<string>(''); // To store terminal output
  const term = useRef<Terminal | null>(null);

  useEffect(() => {
    // Initialize the terminal
    if (terminalRef.current && !term.current) {
      term.current = new Terminal({
        cols: 80,
        rows: 24,
        cursorBlink: true,
        theme: {
          background: '#1e1e1e',
          foreground: '#d4d4d4',
        },
      });

      term.current.open(terminalRef.current);

      // Display initial messages
      term.current.writeln(`Welcome to the CLI Terminal for ${project.name}`);
      term.current.writeln(`Type "${project.command}" to start`);
    }

    // Clean up terminal on component unmount
    return () => {
      if (term.current) {
        term.current.clear();
      }
    };
  }, [project.command]);

  const executeCommand = async (command: string) => {
    setIsRunning(true);
    setOutput(''); // Clear previous output before executing the new command

    term.current?.writeln(`Running command: ${command}`);
    
    try {
      const res = await fetch(`/api/run-command?command=${command}`);
      const data = await res.json();

      if (data.error) {
        setOutput(`Error: ${data.error}`);
        term.current?.writeln(`Error: ${data.error}`);
      } else {
        setOutput(data.output);
        term.current?.writeln(data.output);
      }
    } catch (err) {
      setOutput("Command execution failed");
      term.current?.writeln("Command execution failed");
    }

    setIsRunning(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCommand(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputCommand.trim() !== "") {
      executeCommand(inputCommand.trim());
      setInputCommand(""); // Clear the input after executing the command
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{project.name} - Terminal</h2>
      <div
        ref={terminalRef}
        className="w-full h-96 bg-black text-white p-4 rounded-md"
        style={{ minHeight: "400px" }}
      />
      <div className="mt-4 flex space-x-2">
        <input
          type="text"
          value={inputCommand}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="p-2 border border-gray-300 rounded-md text-black w-full"
          placeholder="Type command here..."
        />
      </div>
      {isRunning && <div className="mt-4 text-white">Running...</div>}
      {output && !isRunning && (
        <div className="mt-4 text-white">
          <strong>Output:</strong> <pre>{output}</pre>
        </div>
      )}
    </div>
  );
};

export default TerminalSimulator;
