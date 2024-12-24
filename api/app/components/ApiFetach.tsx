import Link from "next/link";

export default async function ApiFetch() {
  // Fetch data from the API
  const url = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const response = await url.json();

  // Logging the response for debugging
  console.log(response);

  return (
    <main>
      {/* Displaying the data as a string */}
      <pre>{JSON.stringify(response, null, 2)}</pre>

      {/* Since response is an object, we handle it accordingly */}
      <div>
        <Link href={`/${response.id}`}>
          Go to Todo {response.id}
        </Link>
      </div>
    </main>
  );
}