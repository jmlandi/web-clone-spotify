import { Play } from "lucide-react";

export default function PlaylistHorizontal({ coverPath, coverName, coverDesc, coverAltText } : playlistProps) {
    if (!coverDesc) coverDesc = "";
    if (!coverAltText) coverAltText = "Album cover";    
    return (
        <a  href="" className="bg-white/5 group rounded flex items-center overflow-hidden hover:bg-white/10 transition-colors">
            <img src={ coverPath } width={84} height={84} alt={ coverAltText }></img>
            <div className="ml-3">
            <strong>{ coverName } </strong>
            <p className="text-zinc-600 text-xs"> { coverDesc } </p>
            </div>
            <button className="w-7 h-7 flex items-center justify-center bg-green-400 rounded-full text-black ml-auto mr-3 invisible group-hover:visible">
                <Play size={15} fill="bg-black" />
            </button>
        </a>
    )
}