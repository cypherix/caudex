'use client'
import Button from "./Button"
import Image from "next/image"
import { FileBadge } from "./FileBadge"
import { useFileStore } from "@/utils/zustand/barState"
import { Bounce, toast, ToastContainer } from "react-toastify"

export const TopBar: React.FC = (): JSX.Element => {
    const [
        activeFile,
        setActiveFile,
        removeFile,
        deleteFile
    ] = useFileStore((state) => [
        state.activeFile,
        state.setActiveFile,
        state.removeFile,
        state.deleteFile
    ])
    const CopyToClipboard = async () => {
        if (activeFile) {
            let content = activeFile.content;
    
            try {
                await navigator.clipboard.writeText(content);
                toast.info('Copied to your clipboard', {
                    position: "bottom-left",
                    autoClose: 1500,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                    icon: false
                });
            } catch (error) {
                toast.error('Failed to copy!', {
                    position: "bottom-left",
                    autoClose: 1500,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                    icon: false
                });
                console.error('Failed to copy to clipboard:', error);
            }
        }
    };
    return (
        <div className="h-[5vh] bg-[#000] flex items-center text-[#FFFFFF] border-y-[1rem] border-[#000] p-[1rem]">
            <div className="flex items-center justify-start w-[80%]">
                {
                    activeFile ? <FileBadge 
                                    name={activeFile.name} 
                                    removeFile={removeFile}
                                    setActiveFile={setActiveFile}
                                    isActive={true} 
                                    isTopBar={true} /> : null
                }
            </div>
            <div className="w-[20%] flex justify-end items-center gap-[0.5rem]">
                {
                    activeFile ? <Button 
                        className="flex items-center p-[0.5rem] rounded-md border-[#FF2442] border-[1px]"
                        onClick={deleteFile}>
                        <Image
                            src="/assets/trash-solid.svg"
                            alt="Icon for the cut"
                            width={20}
                            height={20}
                        />
                    </Button>: null
                }
                {
                    activeFile ? 
                    <Button
                        onClick={CopyToClipboard}
                        className="flex items-center p-[0.5rem] rounded-md border-[#6272A4] border-[1px]">
                            <Image
                                src="/assets/copy-solid.svg"
                                alt="Icon for the copy"
                                width={20}
                                height={20}
                            />
                            <h1 className="ml-[0.5rem]">Copy</h1>
                    </Button> : null
                }
                <Button className="flex items-center p-[0.5rem] rounded-md border-[#6272A4] border-[1px]">
                    <Image
                        src="/assets/share.svg"
                        alt="Icon for the cut"
                        width={20}
                        height={20}
                    />
                    <h1 className="ml-[0.5rem]">Share</h1>    
                </Button>
            </div>
        </div>
    )
}