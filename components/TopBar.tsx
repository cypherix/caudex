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
        deleteFile,
        openShareModal,
        isSyncing
    ] = useFileStore((state) => [
        state.activeFile,
        state.setActiveFile,
        state.removeFile,
        state.deleteFile,
        state.openShareModal,
        state.isSyncing
    ])
    const CopyToClipboard = async () => {
        if (activeFile) {
            let content = activeFile.content;
    
            try {
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    // For modern browsers
                    await navigator.clipboard.writeText(content);
                } else {
                    // Fallback for older browsers and some mobile devices
                    const textArea = document.createElement("textarea");
                    textArea.value = content;
                    document.body.appendChild(textArea);
                    textArea.focus();
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                }
                
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

    // const CopyToClipboard = async () => {

    //     if (activeFile) {
    //         let content = activeFile.content;
    
    //         try {
    //             await navigator.clipboard.writeText(content);
    //             toast.info('Copied to your clipboard', {
    //                 position: "bottom-left",
    //                 autoClose: 1500,
    //                 hideProgressBar: true,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: "colored",
    //                 transition: Bounce,
    //                 icon: false
    //             });
    //         } catch (error) {
    //             toast.error('Failed to copy!', {
    //                 position: "bottom-left",
    //                 autoClose: 1500,
    //                 hideProgressBar: true,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: "colored",
    //                 transition: Bounce,
    //                 icon: false
    //             });
    //             console.error('Failed to copy to clipboard:', error);
    //         }
    //     }
    // };
    return (
        <div className="h-[5vh] bg-[#000] flex items-center text-[#FFFFFF] border-y-[1rem] border-[#000] p-[1rem]">
            <div className="flex items-center justify-start w-full">
                {
                    activeFile ? <FileBadge 
                                    name={activeFile.name} 
                                    removeFile={removeFile}
                                    setActiveFile={setActiveFile}
                                    isActive={true} 
                                    isTopBar={true} /> : null
                }
            </div>

            <div className="w-[300px] flex justify-end items-center gap-[0.5rem]">
                {
                    isSyncing ? <div
                    
                    >
                        <Image
                            src="/assets/sync-icon.svg"
                            alt="Icon for the cut"
                            width={15}
                            height={15}
                            className="animate-spin-smooth animate-fade-in-out"
                            />

                    </div>:null
                }
                    
                {
                    activeFile ? <Button 
                        className="flex items-center p-[0.5rem] rounded-md border-[#FF2442] border-[1px]"
                        onClick={deleteFile}>
                        <Image
                            src="/assets/trash-solid.svg"
                            alt="Icon for the cut"
                            width={11}
                            height={11}
                        />
                    </Button>: null
                }
                {
                    activeFile ? 
                    <Button
                        onClick={CopyToClipboard}
                        className="text-sm flex items-center p-[0.25rem] rounded-md border-[#6272A4] border-[1px]">
                            <Image
                                src="/assets/copy-solid.svg"
                                alt="Icon for the copy"
                                width={15}
                                height={15}
                                className="mr-[0.23rem]"
                            />
                            Copy
                    </Button> : null
                }
                <Button className="mr-[0.5rem] text-sm flex items-center p-[0.25rem] rounded-md border-[#6272A4] border-[1px]"
                onClick={openShareModal}
                >
                    
                    <Image
                        src="/assets/share.svg"
                        alt="Icon for the cut"
                        width={15}
                        height={15}
                        className="mr-[0.rem]"
                    />
                    Share 
                </Button>
            </div>
        </div>
    )
}