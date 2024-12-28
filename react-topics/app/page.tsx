import Link from "next/link"

export default function Home() {
  return (
   <div className="flex justify-center items-center min-h-screen">
      <Link href={"/hooks"}>Hooks</Link>
   </div>
  );
}
