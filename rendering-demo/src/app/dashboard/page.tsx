"use client"
import { useState } from "react"


export default function DashBoard(){
    const [name, setName] = useState('')
    console.log('hi')
    return (
        <div>
            <h1>DashBoard</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <p>Hello, {name}</p>
        </div>
    )
}