type MainTitleProps = {
    message: string,
    name?: string
}

export default function MainTitle({message, name} : MainTitleProps) {
    message = message.replace(/(!|\?)/, "")
    message = message.trim()
    name = name?.trim()
    if (name) message += `, ${name}`
    return (<h1 className="font-semibold text-3xl mt-7"> { message } </h1>)
}