import { NextRequest, NextResponse } from "next/server";

const students = [
  {
    id: "1",
    name: "John Doe",
    age: 20,
  },
  {
    id: "2",
    name: "Jane Doe",
    age: 21,
  },
  {
    id: "3",
    name: "Alice",
    age: 22,
  },
];
export async function GET(request: Request) {
  return NextResponse.json(students);
}

export async function POST(req: NextRequest, res: NextResponse) {
  // Parse incoming data from the request body
  const body = await req.json();

  // Create a new student object
  const newStudent: any = {
    id: students.length + 1, // Generate an ID (simple auto-increment)
    name: body.name,
    age: body.age,
  };

  // Add the student to the in-memory array
  students.push(newStudent);

  // Return the newly created student
  return NextResponse.json(newStudent, { status: 201 });
}
