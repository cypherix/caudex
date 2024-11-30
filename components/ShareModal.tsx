'use client'
import Image from "next/image";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";


type ShareModalProps = {
    isOpen: boolean
    onClose: () => void
    link: string // Link to be shared
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, link }): JSX.Element => {

    const [isCopied, setIsCopied] = useState(false);

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(link)
            .then(() => {
                setIsCopied(true);
                // toast.info('Link copied to clipboard!', {
                //     position: "bottom-left",
                //     autoClose: 1500,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                //     theme: "colored",
                //     transition: Bounce,
                //     icon: false
                // });
                setTimeout(() => {
                    setIsCopied(false); 
                }, 5000);
            })
            .catch(() => {
                toast.error('Failed to copy the link.', {
                    position: "bottom-left",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                    icon: false
                });
            });
    };

    return isOpen ? (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
            <div className="bg-white rounded-lg p-6 w-96 relative">
                <button
                    onClick={() => {onClose();setIsCopied(false) } } 
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                >
                    <Image
                        src="/assets/dark-cross.svg"
                        alt="Close icon"
                        width={20}
                        height={20}
                    />
                </button>

                <h2 className="text-xl font-semibold mb-4">Share this Link</h2>
                <div className="flex items-center border border-gray-300 rounded-md px-4 py-2">
                    <input
                        type="text"
                        readOnly
                        value={"localhost:3000"+link}
                        className="flex-grow focus:outline-none"
                    />
                    <button
                        onClick={handleCopyToClipboard}
                        className="ml-2"
                    >
                        {isCopied ? (
                            <Image
                                src="/assets/success-circle.svg"
                                alt="Success icon"
                                width={20}
                                height={20}
                            />
                        ) : (
                            <Image
                                src="/assets/dark-copy.svg"
                                alt="Copy icon"
                                width={15}
                                height={15}
                            />
                        )}
                    </button>
                </div>
            </div>
        </div>
    ) : <div style={{display:"none"}}></div>;
}
