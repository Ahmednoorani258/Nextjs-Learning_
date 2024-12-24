import next from "next"
import {cookies} from 'next/headers'

export default function About(){
    const cookiesStore = cookies()
    const theme = cookiesStore
    console.log('hi')
    return (
        <h1>hi {new Date().toLocaleTimeString()}</h1>
    )
}