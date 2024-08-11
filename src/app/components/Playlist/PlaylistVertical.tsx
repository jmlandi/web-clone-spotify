export default function PlaylistVertical({coverPath, coverName, coverDesc, coverAltText} : playlistProps) {
    if (!coverDesc) coverDesc = "";
    if (!coverAltText) coverAltText = "Album cover";
    return (
        <a href="" className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-3 max-w-40 transition-colors">
            <img src={ coverPath } width={140} height={140} alt={ coverAltText }></img>
            <strong>{ coverName }</strong>
            <p className="text-xs text-zinc-600">{ coverDesc }</p>
        </a>
    )
}