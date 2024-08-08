import { FileBadge } from "./FileBadge"
import { getFileMapping } from "@/utils/Icon/iconService"

export const TopBar:React.FC<{files:string[]}> = (props):JSX.Element => {
    return (
        <div className="h-[5vh] bg-[#000] flex items-center text-[#FFFFFF] padding-[1rem] border-y-[1rem] border-[#000]">
            {
                props.files.map((element,index) => <FileBadge name={element} icon={getFileMapping(element)} key={index} isTopBar={true}/>)
            }
        </div>
    )
}