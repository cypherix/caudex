import Link from "next/link";
import Image from "next/image";
import { useFileStore } from "@/utils/zustand/barState";

export const NavBar = () => {
    const [closeMenu, openMenu, isMenuOpen] = useFileStore((state) => [state.closeMenu, state.openMenu, state.isMenuOpen]);

    const handleMenuClick = () => {
        if (isMenuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    return (
        <div className="w-full flex items-center justify-between border-b-[1px] border-[#6272A4]">
            {/* Menu Icon */}
            <div className="flex-shrink-0 ">
                <svg
                    width="18"
                    height="12"
                    viewBox="0 0 18 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`menu-icon ${isMenuOpen ? "open" : ""}`}
                    onClick={handleMenuClick}
                >
                    <g id="menu">
                        <rect id="center" y="5" width="15" height="2" rx="1" fill="white" />
                        <rect id="bottom" y="10" width="9" height="2" rx="1" fill="white" />
                        <path id="top" d="M0 1C0 0.447715 0.447715 0 1 0H8C8.55228 0 9 0.447715 9 1V1C9 1.55228 8.55228 2 8 2H1C0.447715 2 0 1.55228 0 1V1Z" fill="white" />
                    </g>
                </svg>
            </div>

            {/* Centered Link */}
            <Link
                href="/"
                className="flex-grow flex items-center justify-center mx-[0.4rem] my-[1rem]"
            >
                <Image
                    src="/assets/logo.svg"
                    alt="Icon for the Logo"
                    width={40}
                    height={40}
                    className="w-8 mr-[0.5rem]"
                />
                <Image
                    src="/assets/CodeHUB.svg"
                    alt="LumiCode logo"
                    width={140}
                    height={56}
                    className="w-24"
                />
            </Link>

            {/* Empty div for spacing */}
            <div className="flex-shrink-0 w-16"></div> {/* Adjust width as needed */}
        </div>
    );
};