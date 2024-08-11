import { Home as HomeIcon, Search, Library } from "lucide-react"

export default function Sidebar() {
    return (
        <aside className="w-72 bg-zinc-950 p-6 space-y-10 invisible md:visible">
            {/* <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div> */}
            <div className="fixed">
                <nav className="space-y-5">
                    <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                    <HomeIcon />
                    Home
                    </a>
                    <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                    <Search />
                    Search
                    </a>
                    <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                    <Library />
                    Your Library
                    </a>
                </nav>
                <nav className="mt-6 pt-6 border-t border-zinc-800 p-6 flex flex-col gap-4">
                    <a href="" className="text-sm text-zinc-400 hover:text-zinc-100"> LoFi Radio </a>
                    <a href="" className="text-sm text-zinc-400 hover:text-zinc-100"> Rap Workout </a>
                    <a href="" className="text-sm text-zinc-400 hover:text-zinc-100"> Rock Workout </a>
                    <a href="" className="text-sm text-zinc-400 hover:text-zinc-100"> Top Brasil </a>
                    <a href="" className="text-sm text-zinc-400 hover:text-zinc-100"> Favorite Songs </a>
                    <a href="" className="text-sm text-zinc-400 hover:text-zinc-100"> Favorite Podcasts </a>
                </nav>
            </div>
            </aside>
    )
}