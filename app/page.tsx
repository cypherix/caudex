import React from 'react'
import { HeroEditor } from '../components/HeroEditor'
import { SideBar } from '@/components/SideBar'
export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Home Page
        <br/>
        <SideBar files={["file1.txt", "file2.json", "file3.js","config.json","css.css.map","androidmanifest.xml"]}/>
        <div className="h-[100vh] ">
        <HeroEditor language="javascript" content=""/>
        </div>
      </h1>
    </div>
  )
}