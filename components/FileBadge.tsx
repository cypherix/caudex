
import Button from "./Button"
import Image from "next/image"
import { getFileMapping } from "@/utils/Icon/iconService"
import { FileType } from "@/utils/zustand/barState"
type fileProps = {
    name: string
    setActiveFile?:(name:string,isTopBar?:boolean) => void
    removeFile?:(name:string) => void
    isTopBar?:boolean
    isActive?:boolean
}

export const FileBadge:React.FC<fileProps> = (props):JSX.Element => {    
    const icon = getFileMapping(props.name)
    const handleClick = () => {
        props.setActiveFile ? props.setActiveFile(props.name,props.isTopBar) : null
    }
    return (
        <div className="flex items-center m-[0.5rem] cursor-pointer">
            <div className="flex items-center cursor-pointer" onClick={handleClick} >
            <Image
                src={icon}    
                alt="icon for the file"
                width={25}
                height={25}
                />
            <h1 className={`ml-[0.2rem ${(props.isActive && !props.isTopBar)? "text-[#6272A4]" : "text-[#FFFFFF]"}`} >{props.name}</h1>
            
        </div>
        {
                props.isTopBar ? 
                    <Button className="cursor-pointer mx-[0.1rem] rounded-md hover:bg-[#44475A]">
                        <Image
                            src="/assets/cross-icon.svg"
                            alt="icon for the file"
                            width={25}
                            height={25}
                            onClick={()=> props.removeFile ? props.removeFile(props.name) : null}
                        />
                    </Button> : null 
            }
        </div>
    )
}



