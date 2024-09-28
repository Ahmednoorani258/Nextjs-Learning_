import { type NextRequest } from "next/server"
import { headers ,cookies} from "next/headers"

export async function GET(request: NextRequest) {
    const reqHeader = new Headers(request.headers)
    const headerlist = headers()

    console.log(reqHeader.get("Authorization"))
    console.log(headerlist.get("Authorization"));
    cookies().set("resultperpage","20")
    const theme = request.cookies.get("theme")
    console.log(theme)
    console.log(cookies().get("resultperpage"))
    return new Response("<h1>hi</h1>",{
        headers: {
            "content-type": "text/html",
            "Set-Cookie": "theme=dark"
        }
    })
}