import { Compass, Layout } from "lucide-react"

const guestRoutes = [
    {
        icon:Layout,
        label:"Dashboard",
        href:"/"
    },
    {
        icon:Compass,
        label:"Browse",
        href:"/search"
    }
]

export const SidebarRoutes = () => {
    return(
        <div className="flex flex-col w-full"> 
        Routes!</div>
    )}