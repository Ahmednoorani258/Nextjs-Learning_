
import Link from "next/link"

export default function Hooks() {

  return (
   <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-3xl font-bold underline italic">Hooks Name </h1>
      <ul className="space-y-4">
        <li><Link href={"/usestate"}>1) UseState</Link></li>
        <li><Link href={"/useeffect"}>2) UseEffect</Link></li>
        <li><Link href={"/useRef"}>3) UseRef</Link></li>
        <li><Link href={"/usememo"}>3) UseMemo</Link></li>
      </ul>
   </div>
  );
}

