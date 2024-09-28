import { text } from "stream/consumers";
import { comments } from "./data";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
    const filteredComments = query? comments.filter(c => c.text.includes(query)): comments;
    
  return Response.json(filteredComments);
}

export async function POST(request: Request) {
  const comment = await request.json();

  const newComments = {
    id: comments.length + 1,
    text: comment.text,
  };

  comments.push(newComments);
  return new Response(JSON.stringify(newComments), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
