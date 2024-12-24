

//Prefetching involves fetching resources for pages before the user navigates to them. This makes subsequent page transitions faster. Next.js automatically prefetches links using its <Link> component.

import Link from "next/link";

//_________________________
//Automatic Prefetching:
//_________________________

// When you use the <Link> component, Next.js prefetches the page's assets (JavaScript and CSS) in the background when the link comes into the viewport.


//_________________________
//Customizing Prefetch Behavior:
//_________________________
// You can disable automatic prefetching using the prefetch prop
// prefetch{false} set this sttribute in link tag 



export default function PreFetching(){
    return(
        <div className="flex justify-center items-center min-h-screen">
            <Link href={"/"}>auto prefetch</Link>
            <Link href={"/"} prefetch={false}>Custom Prefetch</Link>
            
        </div>
    )
}