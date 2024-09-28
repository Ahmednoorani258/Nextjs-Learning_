export const dynamic = "force-dynamic";//its caching  adn important for update of changing data


export async function GET(){
    return Response.json({
        time:new Date().toLocaleTimeString()
    })
}