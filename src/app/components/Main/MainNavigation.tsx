import {ChevronLeft, ChevronRight } from "lucide-react"


export default function MainNavigation() {
    return (
        <div className="flex gap-10">
          <div className="flex items-center gap-4">
              <button className="p-1 rounded-full bg-black/40">
                <ChevronLeft />
              </button>
              <button className="p-1 rounded-full bg-black/40">
                <ChevronRight />
              </button>
          </div>
          <input placeholder="What do you want to hear?" className="px-5 w-96 text-xs bg-zinc-700 rounded-full"/>
        </div>
    )
}