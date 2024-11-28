'use client'
import React, { useEffect } from 'react'
import { HeroEditor } from '../../components/HeroEditor'
import { SideBar } from '@/components/SideBar'
import { TopBar } from '@/components/TopBar'
import { useFileStore } from '@/utils/zustand/barState'
import { FileModal } from '@/components/FileModal'
import "react-toastify/ReactToastify.css"
import { Bounce, ToastContainer } from 'react-toastify'
import { useEditorData } from '@/utils/zustand/useEditorData'
import { ShareModal } from '@/components/ShareModal'
import { NavBar } from '@/components/NavBar'

export default function Slug({ params }: { params: { UrlSlug: string } }) {
  const [setSlug, isOpen, closeModal, isShareOpen, closeShareModal, isMenuOpen] = useFileStore(state => [
    state.setSlug,
    state.isOpen,
    state.closeModal,
    state.isShareOpen,
    state.closeShareModal,
    state.isMenuOpen
  ]);
  
  useEffect(() => {
    setSlug(params.UrlSlug);
  }, [params.UrlSlug, setSlug]);

  useEditorData(params.UrlSlug);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <FileModal isOpen={isOpen} onClose={closeModal} />
      <ShareModal isOpen={isShareOpen} onClose={closeShareModal} link={`/${params.UrlSlug}`} />
      
      <div className='md:hidden'>
        <NavBar />
      </div>

      <div className="flex flex-grow overflow-hidden">
        {isMenuOpen && (
          <div className="md:hidden absolute z-10 h-full bg-black">
            <SideBar />
          </div>
        )}

        <div className="hidden md:flex w-48 flex-shrink-0">
          <SideBar />
        </div>
        
        <div className='flex flex-col flex-grow overflow-hidden'>
          <TopBar />
          <div className="flex-grow overflow-hidden">
            <HeroEditor />
          </div>
        </div> 
      </div>

      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  )
}