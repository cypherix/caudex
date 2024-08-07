'use client'
import { getFileMapping } from "@/utils/Icon/iconService"
import Image from "next/image"
type SideBarProps = {
    files: string[]    
}
export const SideBar:React.FC<SideBarProps> = ( props):JSX.Element => {
    return (
        <div>
            <h1>SideBar</h1>
            <button onClick={() => props.files.forEach(element => {
                console.log(getFileMapping(element));  
            })}>Button</button>
            {
                props.files.map((element,index) => <File name={element} icon={getFileMapping(element)} key={index}/>)
            }

        </div>
    )
}


type fileprops = {
    name:string
    icon:string
}
const File:React.FC<fileprops> = (props):JSX.Element => {
    return (
        <div>
            <h1>{props.name}</h1>
            <Image
                src={props.icon}
                alt="Picture of the author"
                width={30}
                height={30}
                />
        </div>
    )
}   