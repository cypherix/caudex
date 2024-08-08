import React from 'react'
import { HeroEditor } from '../components/HeroEditor'
import { SideBar } from '@/components/SideBar'
import { TopBar } from '@/components/TopBar'
export default function Home() {
  return (
    <div>
      <div className="h-[100vh] flex">
        <SideBar files={["file1.txt", "file2.json", "file3.js","config.json","css.css.map","androidmanifest.xml"]}/>
        <div className='flex flex-col w-[80vw]'>
          <TopBar files={["file1.txt", "file2.json", "file3.js","config.json","css.css.map","androidmanifest.xml"]}/>
          <HeroEditor language="javascript" content=""/>
        </div>
      </div>
     
    </div>
  )
}