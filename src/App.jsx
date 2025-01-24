import { useState } from 'react'
import './App.css'
import logo from './assets/img.png'

function App() {

  return (
    <>
      <div className='flex items-center justify-evenly h-[826px] bg-teal-800'>
        <div className=''>
          <h1 className='text-white font-bold text-5xl w-[500px] leading-16'>Take Your <span className='text-yellow-400'>Knowledge</span> to the next Level</h1>
          <button className='border-2 px-10 py-1 bg-black text-white mt-8 cursor-pointer'>Start</button>
        </div>

        <div><img src={logo} alt="" /></div>
      </div>
    </>
  )
}

export default App
