// pages/api/run-command.ts
import { exec } from "child_process";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { command } = req.query;

  // Validate the command to ensure it's a string
  if (typeof command !== "string") {
    return res.status(400).json({ error: "Invalid command" });
  }

  // List of allowed commands to prevent arbitrary execution
  const allowedCommands = [
    "npx noorani_word_counter",
    "npx noorani_space_adventure_game",
  ];

  if (!allowedCommands.includes(command)) {
    return res.status(400).json({ error: "Command not allowed" });
  }

  // Execute the command using Node's child_process
  exec(command, (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({ error: `Error: ${error.message}` });
    }
    if (stderr) {
      return res.status(500).json({ error: `stderr: ${stderr}` });
    }
    // Return the command output
    res.status(200).json({ output: stdout });
  });
}
