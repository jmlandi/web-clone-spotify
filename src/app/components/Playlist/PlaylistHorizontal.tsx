export default function PlaylistHorizontal {
    return (
        <a  href="" className="bg-white/5 group rounded flex items-center overflow-hidden hover:bg-white/10 transition-colors">
            <img src="/cover.jpg" width={84} height={84} alt="Album cover"></img>
            <div className="ml-3">
            <strong>Facelift</strong>
            <p className="text-zinc-600 text-xs">Album Alice In Chains</p>
            </div>
            <button className="w-7 h-7 flex items-center justify-center bg-green-400 rounded-full text-black ml-auto mr-3 invisible group-hover:visible">
                <Play size={15} fill="bg-black" />
            </button>
        </a>
    )
}