import Image from "next/image"
type fileProps ={
    name:string
    icon:string
    handleClick?:() => void
    isTopBar?:boolean
}

export const FileBadge:React.FC<fileProps> = (props):JSX.Element => {
    return (
        <div className="flex items-center m-[0.5rem]">
            <Image
                src={props.icon}    
                alt="icon for the file"
                width={25}
                height={25}
                />
            <h1 className="ml-[0.2rem]" >{props.name}</h1>
            {
                props.isTopBar ? <Image
                src="/assets/cross-icon.svg"
                alt="icon for the file"
                width={25}
                height={25}
                onClick={props.handleClick}
                className="ml-[0.5rem] cursor-pointer"
                /> : null 
            }
        </div>
    )
}



