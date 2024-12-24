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
export async function GET() {
  return NextResponse.json(students);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const newStudent: any = {
    id: students.length + 1,
    name: body.name,
    age: body.age,
  }
  students.push(newStudent);
  return NextResponse.json(newStudent);
}
