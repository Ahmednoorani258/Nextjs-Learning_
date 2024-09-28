import Card from "@/components/Card"
import Link from "next/link"

export default function ArchiveNotifications(){
    return (
        <Card>Archive Notifications
            <Link href="/complex-dashboard" className="text-red-500">Default</Link>
        </Card>
    )
}