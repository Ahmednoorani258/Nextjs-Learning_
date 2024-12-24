import Link from "next/link"
export default async function Home() {
  const url = await fetch("http://localhost:3000/api/student")
  const data = await url.json()
  console.log(data)
  return (
    <main>
      <div>
        {
          data.map((student:any,i:number) => {
            return(
              <div key={i}>
                <h1>{student.name}</h1>
                <h2>{student.age}</h2>
                <h3>{student.rollNo}</h3>
              </div>
            )
          })
        }
      </div>
    </main>
  );
}