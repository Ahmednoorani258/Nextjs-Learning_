"use client"
import { useEffect, useState } from "react"

export default function UseEffect(){
    const [count,setCount] = useState(0)

    useEffect(()=> {
        setTimeout(() => {
          setCount((count) => count +1)
        },2000)  
    },[count])
    return(
        <div className="flex justify-center items-center min-h-screen flex-col ">
            <div>counter: {count}</div>
             if dependency arrai is empty it only run once ,
             if depedency array have any state so every state changes it execute it
            if we dont pass array it execute on any state change
        </div>
    )
}