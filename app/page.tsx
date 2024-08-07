import React from 'react'
import { HeroEditor } from '../components/HeroEditor'
export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Home Page
        <div className="h-[100vh] ">
        <HeroEditor language="javascript" content=""/>
        </div>
      </h1>
    </div>
  )
}