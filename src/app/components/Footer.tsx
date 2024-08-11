import { Play, Shuffle, SkipBack, SkipForward, Mic, LayoutList, Laptop2, Volume, Maximize, Heart, Repeat } from "lucide-react"


export default function Footer() {
    return (
        <footer className="bg-zinc-900 border-zinc-700 px-4 py-4 flex items-center justify-between fixed w-screen bottom-0">
        <div className="flex items-center gap-2 invisible md:visible">
          <img src="/alice-in-chains.jpg" width={60} height={60} alt="Album cover of Alice In Chains: Facelift"></img>
          <div className="flex flex-col">
            <strong className="font-normal">Man In The Box</strong>
            <span className="text-xs text-zinc-400">Alice In Chains</span>
          </div>
          <Heart size={20} className="text-zinc-400 ml-3" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-4">
            <Shuffle size={18} className="text-zinc-400" />
            <SkipBack size={20} className="text-zinc-400" />
            <button className="w-7 h-7 bg-zinc-200 rounded-full text-black flex justify-center items-center">
              <Play fill="bg-black" size={16} className="text-zinc-900" />
            </button>
            <SkipForward size={20} className="text-zinc-400" />
            <Repeat size={18} className="text-zinc-400" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:27</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="h-1 rounded-full bg-zinc-200 w-40"></div>
            </div>
            <span className="text-xs text-zinc-400">3:30</span>
          </div>
        </div>
        <div className="flex items-center gap-2 invisible md:visible">
          <Mic size={16} className="text-zinc-400" />
          <LayoutList size={16} className="text-zinc-400" />
          <Laptop2 size={16} className="text-zinc-400" />
          <div className="flex items-center">
            <Volume className="text-zinc-400" />
            <div className="h-1 rounded-full w-16 bg-zinc-600">
              <div className="h-1 rounded-full w-4 bg-zinc-200"></div>
            </div>
          </div>
          <Maximize size={16} className="text-zinc-400" />
        </div>

      </footer>
    )
}