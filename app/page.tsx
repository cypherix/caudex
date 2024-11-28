'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [slug, setSlug] = useState("");
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsReady(true);
  }, []);

  const handleLoadClick = () => {
    if (slug.trim() && isReady) {
      router.push(`/${slug}`);
    }
  };

  return (
    <div className="text-white min-h-[768px] max-h-[1080px] bg-no-repeat bg-bottom w-full h-screen bg-[url('/assets/gradient_bg.svg')]">
      <div className="text-center py-16">
        <div className="container mx-auto">
        <Image
          src="/assets/Group 4.svg"
          alt="Icon for the Logo"
          width={100}
          height={100}
          className="mx-auto"
        />

          <h1 className="text-2xl my-4 md:text-4xl font-bold mb-4">
            CodeHUB
          </h1>
          <p className="text-lg md:text-xl mb-4">
            Where speed meets simplicity. Seamlessly code, share, and collaborate <br/>
            with the power of VS Code in a fast, lightweight, and reliable platform.
          </p>
          <div className="flex mx-auto items-center justify-center space-x-4 mb-2">
            <input
              className=" w-[50%] md:w-1/3 sm:w-1/3 shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter a slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleLoadClick()}
            />
            <button
              className="bg-[#FFE081] text-black py-2 px-6 rounded hover:bg-[#FFD15C] transition"
              onClick={handleLoadClick}
            >
              Load
            </button>
          </div>
        </div>
      </div>
      <section className="w-full flex items-center justify-center container mx-auto">
        <div className="w-1/2 rounded-lg flex items-center justify-center bg-[linear-gradient(to_right,#fafafa2d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff2d_1px,transparent_1px)]  bg-[size:9px_9px] sm:bg-[size:8px_8px] md:bg-[size:14px_14px] lg:bg-[size:24px_24px]">
          <Image src="/assets/editor.png" alt="Editor Image" width={700} height={325} className="rounded-lg m-6 " />
        </div>
      </section>
    </div>
  );
}