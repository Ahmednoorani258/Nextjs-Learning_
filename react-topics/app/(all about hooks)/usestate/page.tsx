"use client";
import { useState } from "react";

export default function UseState() {
    const [color, setColor] = useState<string>("red");

    const handleColor = (newColor: string) => {
        setColor(newColor);
    };

    return (
        <div className="flex flex-col space-y-5 justify-center items-center min-h-screen">
            <h1 className="text-4xl">Use State</h1>
            <p style={ {color:color}}>
                This is {color} color
            </p>
            <div className="flex gap-8">
                <button
                    onClick={() => handleColor("red")}
                    className={`p-5 bg-red-700 border-2 border-black text-white`}
                >
                    Red
                </button>
                <button
                    onClick={() => handleColor("cyan")}
                    className={`p-5 bg-cyan-700 border-2 border-black text-white`}
                >
                    Cyan
                </button>
            </div>
        </div>
    );
}
