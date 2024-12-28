"use client"
import { useEffect, useRef, useState } from "react"

export default function UseRef(){
    const [count,setCount] = useState(0)
    const [value,setValue] = useState(0)

    useEffect(()=>{
        setCount((prev) => prev +1)
    })
    return(
        <div className="flex justify-center space-y-5 items-center min-h-screen flex-col ">
            <h1 className="text-4xl mb-4">Use Ref</h1>
            <div className="flex gap-6 items-center">
            <button onClick={()=>{setValue(prev => prev-1)}} className="p-5 bg-cyan-600 font-bold">-1</button>
            <h1>{value}</h1>
            <button onClick={()=>{setValue(prev => prev+1)}} className="p-5 bg-cyan-600 font-bold" >+1</button>
            </div>
           <h1 className="text-3xl ">Rerender count: {count}</h1>
        </div>
    )
}