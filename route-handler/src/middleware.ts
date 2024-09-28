import {NextResponse ,type NextRequest } from "next/server"

export function middleware(request: NextRequest){

    const response = NextResponse.next()
    const themePrefrence = request.cookies.get("theme")
    if(!themePrefrence){
        response.cookies.set("theme","dark")
    }
    response.headers.set("custom-header","hello")
    return response

    // if(request.nextUrl.pathname === "/profile"){
    //     return NextResponse.rewrite(new URL("/hello",request.url))
    // }

    // return NextResponse.redirect(new URL("/",   request.url))
}


// export const config = {
//     matcher:"/profile"
// }