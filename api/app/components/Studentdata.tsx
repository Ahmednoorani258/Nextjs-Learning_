"use client"; // Required for React hooks in the App Directory

import { useState, useEffect, FormEvent } from "react";

// Define a Student interface for type safety
interface Student {
    id: string;
    name: string;
    age: number;
}

export default function AddStudentForm() {
    const [name, setName] = useState<string>(""); // Name state
    const [age, setAge] = useState<number | "">(""); // Age state
    const [students, setStudents] = useState<Student[]>([]); // Students state

    // Function to handle form submission
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/api/student", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, age }),
            });

            if (!response.ok) {
                throw new Error(`Error adding student: ${response.statusText}`);
            }

            const newStudent: Student = await response.json();

            // Update students locally without refetching
            setStudents((prevStudents) => [...prevStudents, newStudent]);

            // Clear input fields
            setName("");
            setAge("");
        } catch (error) {
            console.error("Error adding student:", error);
        }
    };

    // Function to fetch students from the API
    const fetchStudents = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/student");
            if (!response.ok) {
                throw new Error(`Error fetching students: ${response.statusText}`);
            }
            const data: Student[] = await response.json();
            setStudents(data);
        } catch (error) {
            console.error("Error fetching students:", error);
        }
    };

    // Fetch students on component mount
    useEffect(() => {
        fetchStudents();
    }, []); // Empty dependency array ensures this runs only once

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="text-black"
                    />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input
                        type="number"
                        className="text-black"
                        id="age"
                        value={age === "" ? "" : age}
                        onChange={(e) => setAge(Number(e.target.value))}
                        required
                    />
                </div>
                <button type="submit">Add Student</button>
            </form>

            <div>
                <h2>Students List:</h2>
                {students.map((student) => (
                    <div key={student.id}>
                        <h3>{student.name}</h3>
                        <p>Age: {student.age}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
