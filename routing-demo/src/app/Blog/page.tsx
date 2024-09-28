import { Metadata } from "next";
export const metadata:Metadata = {
    
    // title:blog  //when this is uncomment it enables title to be dynamic with key in title object
    title:{
        absolute:'Blog'
    }
}

export default function Blog(){
    return <h1>Blog Page</h1>;
} 