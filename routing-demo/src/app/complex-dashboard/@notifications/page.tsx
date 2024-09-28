import Card from "@/components/Card"
import Link from "next/link"

export default function Notifications(){
    return (
        <Card>Notifications
            <Link href="/complex-dashboard/archive" className="text-red-500">Archive</Link>
        </Card>
    )
}