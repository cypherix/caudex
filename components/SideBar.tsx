'use client'
import { getFileMapping } from "@/utils/Icon/iconService"
import Image from "next/image"
import { FileBadge } from "./FileBadge"

export const SideBar:React.FC<{files:string[]}> = ( props):JSX.Element => {
    return (
        <div className=" w-[20vw] h-[100vh] bg-[#000] border-r-[1px] border-[#6272A4] text-start text-[#fff]">

            <button className="rounded-md border-[#6272A4] border-[1px] m-[0.5rem] p-[0.5rem] hover:bg-[#44475A]">
                New File
            </button>
            <div className="w-[20vw] flex m-[0.5rem] items-center">
                <Image 
                    src="/assets/folder-open-solid.svg"
                    alt="Icon for the folder"
                    width={25}
                    height={25}
                    />

                <h3 className=" w-[20vw] flex m-[0.5rem] ml-[0.25rem]">Files</h3>
            </div>
            <div className=" w-[20vw] ml-[1.7rem]">
            {
                props.files.map((element,index) => <FileBadge name={element} icon={getFileMapping(element)} key={index}/>)
            }
            </div>

        </div>
    )
}


