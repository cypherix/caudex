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

export default function Home({params}:{params:{UrlSlug:string}}) {
  const [setSlug,isOpen,closeModal] = useFileStore(state => [state.setSlug,state.isOpen,state.closeModal])
  useEffect(() => {
    setSlug(params.UrlSlug)
    
  },[params.UrlSlug,setSlug])
  useEditorData(params.UrlSlug)
  return (
      <div>
      <FileModal isOpen={isOpen} onClose={closeModal}/>
      <div className="h-screen flex">
      <SideBar/>
      <div className='flex flex-col flex-grow'>
        <TopBar/>
        <HeroEditor/>
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
        transition={ Bounce} 
    />
    </div>
    

   
  )
}