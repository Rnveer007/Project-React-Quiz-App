import { useState } from 'react'
import './App.css'
import logo from './assets/img.png';

function App() {
  const [showRedAlert, setRedAlert] = useState(false);
  
  const [userAvailable, setUserAvailable] = useState(false);

  function showAlert() {
    setRedAlert(true)

    setTimeout(() => {
      setRedAlert(false)
    }, 2000);


  }

  return (
    <>
      <div className='flex items-center justify-evenly h-[826px] bg-teal-800 '>

        <div className=''>
          <h1 className='text-white font-bold text-5xl w-[500px] leading-16'>Take Your <span className='text-yellow-500'>Knowledge</span> to the next Level</h1>
          <button onClick={showAlert} className='border-2 px-10 py-1 bg-black text-white mt-8 cursor-pointer'>Start</button>
        </div>
        {/* Create User Alert */}
        <div className={`text-white font-bold w-[300px] bg-red-600 text-center py-3 absolute right-180 top-50 ${showRedAlert ? "" : "hidden"}`} >
          <h1> User not found </h1>
        </div>

        <div><img src={logo} alt="" /></div>
      </div>
    </>
  )
}

export default App
