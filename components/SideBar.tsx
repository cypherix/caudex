'use client'
import Image from "next/image"
import { FileBadge } from "./FileBadge"
import Button from "./Button"
import { useFileStore} from "@/utils/zustand/barState"
import Link from "next/link"


export const SideBar: React.FC = (): JSX.Element => {

    const [
        files,
        activeFile,
        setActiveFile,
        openModal,
        isMenuOpen
    ] = useFileStore((state) => [
        state.files,
        state.activeFile,
        state.setActiveFile,
        state.openModal,
        state.isMenuOpen
    ])
    return (
        // <div className="w-full h-full bg-[#000] border-r-[1px] border-[#6272A4]  text-[#fff] flex flex-col">
        <div className={`fixed left-0 h-full w-64 bg-[#000] z-10 text-white ease-in-out border-r-[1px] border-[#6272A4] transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
            <Link 
            href="/"
            className="hidden w-full md:flex mx-[0.4rem] my-[1rem] items-center justify-center ">
                
                <Image
                    src="/assets/logo.svg"
                    alt="Icon for the Logo"
                    width={40}
                    height={40}
                    className="w-8  mr-[0.5rem]"
                />
                <Image
                    src="/assets/CodeHUB.svg"
                    alt="LumiCode logo"
                    width={140}
                    height={56}
                    className="w-24 "
                />
            </Link>

            <div className="mt-[3rem] w-full flex-col justify-center">
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
                        width={20}
                        height={20}
                    />
                    <h3 className="ml-[0.5rem] text-[0.875rem] sm:text-[1rem]">Files</h3>
                </div>
                <div className="w-full ml-[0.7rem] flex flex-col">
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
