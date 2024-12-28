"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function GoToHome(){
    const router = useRouter()
    const handleGoBack = ()  => {
        router.back()
    }
    return(
        <div className="abolute p-6 font-bold flex justify-between shadow-md shadow-white bg-slate-900">
            <button 
                onClick={handleGoBack} 
                className="mr-4 text-white underline"
            >
                Go Back
            </button>
            <Link href={"/"}>
            Go TO Home
            </Link>
        </div>
    )
}