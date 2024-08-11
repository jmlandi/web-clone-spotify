import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Mic, LayoutList, Laptop2, Volume, Maximize, Heart, Repeat } from "lucide-react"
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import MainNavigation from "./components/Main/MainNavigation";
import MainTitle from "./components/Main/MainTitle";
import MainSubTitle from "./components/Main/MainSubTitle";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <MainNavigation />
          <MainTitle message="Good afternoon" name="John Doe" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
            <a  href="" className="bg-white/5 group rounded flex items-center overflow-hidden hover:bg-white/10 transition-colors">
              <img src="/cover.jpg" width={84} height={84} alt="Album cover of Alice In Chains: Facelift"></img>
              <div className="ml-3">
                <strong>Facelift</strong>
                <p className="text-zinc-600 text-xs">Album Alice In Chains</p>
              </div>
                <button className="w-7 h-7 flex items-center justify-center bg-green-400 rounded-full text-black ml-auto mr-3 invisible group-hover:visible">
                  <Play size={15} fill="bg-black" />
                </button>
            </a>
            <a  href="" className="bg-white/5 group rounded flex items-center overflow-hidden hover:bg-white/10 transition-colors">
              <img src="/cover.jpg" width={84} height={84} alt="Album cover of Alice In Chains: Facelift"></img>
              <div className="ml-3">
                <strong>Facelift</strong>
                <p className="text-zinc-600 text-xs">Album Alice In Chains</p>
              </div>
                <button className="w-7 h-7 flex items-center justify-center bg-green-400 rounded-full text-black ml-auto mr-3 invisible group-hover:visible">
                  <Play size={15} fill="bg-black" />
                </button>
            </a>
            <a  href="" className="bg-white/5 group rounded flex items-center overflow-hidden hover:bg-white/10 transition-colors">
              <img src="/cover.jpg" width={84} height={84} alt="Album cover of Alice In Chains: Facelift"></img>
              <div className="ml-3">
                <strong>Facelift</strong>
                <p className="text-zinc-600 text-xs">Album Alice In Chains</p>
              </div>
                <button className="w-7 h-7 flex items-center justify-center bg-green-400 rounded-full text-black ml-auto mr-3 invisible group-hover:visible">
                  <Play size={15} fill="bg-black" />
                </button>
            </a>
            <a  href="" className="bg-white/5 group rounded flex items-center overflow-hidden hover:bg-white/10 transition-colors">
              <img src="/cover.jpg" width={84} height={84} alt="Album cover of Alice In Chains: Facelift"></img>
              <div className="ml-3">
                <strong>Facelift</strong>
                <p className="text-zinc-600 text-xs">Album Alice In Chains</p>
              </div>
                <button className="w-7 h-7 flex items-center justify-center bg-green-400 rounded-full text-black ml-auto mr-3 invisible group-hover:visible">
                  <Play size={15} fill="bg-black" />
                </button>
            </a>
            <a  href="" className="bg-white/5 group rounded flex items-center overflow-hidden hover:bg-white/10 transition-colors">
              <img src="/cover.jpg" width={84} height={84} alt="Album cover of Alice In Chains: Facelift"></img>
              <div className="ml-3">
                <strong>Facelift</strong>
                <p className="text-zinc-600 text-xs">Album Alice In Chains</p>
              </div>
                <button className="w-7 h-7 flex items-center justify-center bg-green-400 rounded-full text-black ml-auto mr-3 invisible group-hover:visible">
                  <Play size={15} fill="bg-black" />
                </button>
            </a>
            <a  href="" className="bg-white/5 group rounded flex items-center overflow-hidden hover:bg-white/10 transition-colors">
              <img src="/cover.jpg" width={84} height={84} alt="Album cover of Alice In Chains: Facelift"></img>
              <div className="ml-3">
                <strong>Facelift</strong>
                <p className="text-zinc-600 text-xs">Album Alice In Chains</p>
              </div>
                <button className="w-7 h-7 flex items-center justify-center bg-green-400 rounded-full text-black ml-auto mr-3 invisible group-hover:visible">
                  <Play size={15} fill="bg-black" />
                </button>
            </a>
          </div>
          <MainSubTitle message="Made for you!" />
          <div className="flex justify-start gap-3 mt-10">
            <a href="" className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-3 max-w-40 transition-colors">
              <img src="/cover.jpg" width={140} height={140} alt="Album cover of Alice In Chains: Facelift"></img>
              <strong>Daily Mix</strong>
              <p className="text-xs text-zinc-600">Alice In Chains, Chris Cornel, Nirvana and more</p>
            </a>
            <a href="" className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-3 max-w-40 transition-colors">
              <img src="/cover.jpg" width={140} height={140} alt="Album cover of Alice In Chains: Facelift"></img>
              <strong>Daily Mix</strong>
              <p className="text-xs text-zinc-600">Alice In Chains, Chris Cornel, Nirvana and more</p>
            </a>
            <a href="" className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-3 max-w-40 transition-colors">
              <img src="/cover.jpg" width={140} height={140} alt="Album cover of Alice In Chains: Facelift"></img>
              <strong>Daily Mix</strong>
              <p className="text-xs text-zinc-600">Alice In Chains, Chris Cornel, Nirvana and more</p>
            </a>
            <a href="" className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-3 max-w-40 transition-colors">
              <img src="/cover.jpg" width={140} height={140} alt="Album cover of Alice In Chains: Facelift"></img>
              <strong>Daily Mix</strong>
              <p className="text-xs text-zinc-600">Alice In Chains, Chris Cornel, Nirvana and more</p>
            </a>
            <a href="" className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-3 max-w-40 transition-colors">
              <img src="/cover.jpg" width={140} height={140} alt="Album cover of Alice In Chains: Facelift"></img>
              <strong>Daily Mix</strong>
              <p className="text-xs text-zinc-600">Alice In Chains, Chris Cornel, Nirvana and more</p>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
