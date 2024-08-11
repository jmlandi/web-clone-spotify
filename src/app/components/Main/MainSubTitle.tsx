type MainSubTitle = {
    message: string,
}

export default function MainSubTitle({message} : MainSubTitle) {
    message = message.trim()
    return (<h2 className="font-semibold text-xl mt-10"> {message} </h2>)
}