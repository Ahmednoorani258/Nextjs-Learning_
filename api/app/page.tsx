import Link from "next/link"
export default async function Home() {
  const url = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  const response = await url.json()
  console.log(response)
  return (
    <main>
      {JSON.stringify(response)}
      {
        response.map((res: any,i:number) => (
          <div>

            <Link href={`${res.id}}`}>
              Data
            </Link>
          </div>
        ))
      }
    </main>
  );
}