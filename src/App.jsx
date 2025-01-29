import { useState } from 'react'
import './App.css'
import logo from './assets/img.png';

function App({ showAlert,setShowAlert, latestUser ,setLatestUser}) {

  function showRedAlert() {
    setShowAlert (true)
    
    setTimeout(() => {
      setShowAlert(false)
    }, 2000);
  }

  return (
    <>
      <div className={`flex items-center justify-evenly h-[826px] bg-teal-800 ${showAlert ? "hidden" : ""}` }>

        <div className=''>
          <h1 className='text-white font-bold text-5xl w-[500px] leading-16'>Take Your <span className='text-yellow-500'>Knowledge</span> to the next Level</h1>
          <button onClick={showRedAlert} className='border-2 px-10 py-1 bg-black text-white mt-8 cursor-pointer'>Start</button>
        </div>
        {/* Create User Alert */}
        <div className={`text-white font-bold w-[300px] bg-red-600 text-center py-3 absolute right-180 top-50 ${  showAlert ? "" : "hidden" }  ${!latestUser ? "" : "hidden"}`} >
          <h1> User not found </h1>
        </div>

        <div><img src={logo} alt="" /></div>
      </div>


    <div className={`secondPage bg-yellow-800 h-[834px] flex justify-center  ${showAlert ? "" : "hidden"} ${!latestUser ? "hidden" : ""} `}>
      <div className='mt-36 h-[500px] '>
        <h1 className='text-white text-4xl text-center my-4 pb-3'>Welcome to Quize App</h1>
        <p className='text-center text-white my-4 text-xl'>Select Topic</p>
        <button className='block w-[500px] my-8 py-3 bg-white cursor-pointer border-2'>MUSIC</button>
        <button className='block w-[500px] my-8 py-3 bg-white cursor-pointer border-2'>MODERN ART</button>
        <button className='block w-[500px] my-8 py-3 bg-white cursor-pointer border-2'>CODING </button>
        <button className='block border-2 bg-black text-white px-10 m-auto cursor-pointer py-2'>Start Quiz</button>
      </div>
    </div>
    </>
  )
}

export default App
