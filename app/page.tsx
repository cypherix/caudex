'use client'
import React from 'react'
import { HeroEditor } from '../components/HeroEditor'
import { SideBar } from '@/components/SideBar'
import { TopBar } from '@/components/TopBar'
import { useFileStore } from '@/utils/zustand/barState'
import { FileModal } from '@/components/FileModal'
import "react-toastify/ReactToastify.css"
import { Bounce, cssTransition, ToastContainer } from 'react-toastify'

export default function Home() {
  const [isOpen,closeModal] = useFileStore(state => [state.isOpen,state.closeModal])
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