'use client'
import Image from "next/image"
import { FileBadge } from "./FileBadge"
import Button from "./Button"
import { useFileStore} from "@/utils/zustand/barState"

export const SideBar: React.FC = (): JSX.Element => {

    const [
        files,
        activeFile,
        setActiveFile,
        openModal
    ] = useFileStore((state) => [
        state.files,
        state.activeFile,
        state.setActiveFile,
        state.openModal
    ])
    return (
        <div className="w-[15vw] h-[100vh] bg-[#000] border-r-[1px] border-[#6272A4] text-start text-[#fff] flex flex-col">
            <div className="w-full flex m-[1rem] items-center">
                <Image
                    src="/assets/logo.svg"
                    alt="Icon for the Logo"
                    width={40}
                    height={40}
                    className="m-[0.5rem]"
                />
                <Image
                    src="/assets/LumiCode.svg"
                    alt="LumiCode logo"
                    width={130}
                    height={50}
                    className="m-[0.5rem]"
                />
            </div>

            <div className="mt-[3rem] w-full flex justify-center">
                <Button className="w-[90%] rounded-md border-[#6272A4] border-[1px] m-[0.5rem] p-[0.5rem] hover:bg-[#44475A]"
                    onClick={openModal} 
                >
                    New File
                </Button>
            </div>

            <div className="w-full flex-col justify-center mt-[1rem]">
                <div className="w-[90%] flex m-[0.5rem] items-center">
                    <Image
                        src="/assets/folder-open-solid.svg"
                        alt="Icon for the folder"
                        width={25}
                        height={25}
                    />
                    <h3 className="ml-[0.5rem] text-[1rem]">Files</h3>
                </div>
                <div className="w-full ml-[1.7rem] flex flex-col">
                    {files.map((file) => (
                        <FileBadge 
                            key={file.name}
                            name={file.name} 
                            setActiveFile={setActiveFile}
                            isActive={activeFile?.name === file.name} 
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}