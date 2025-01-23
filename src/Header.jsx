import React, { useState } from 'react'

function Header() {
  const [ showUserBox , setShowUserBox ] = useState (false)
  
  function showCreateUserBTn(){
    setShowUserBox(!showUserBox)
  
  }

  return (
    <>
      <div className='h-full bg-black relative'>
      <div className='flex justify-evenly bg-black h-full py-12'>
        <h1 className='text-white text-2xl'>Quiz Pop</h1>
        <button onClick={showCreateUserBTn} className='text-white text-xl border-2 px-3 py-1 cursor-pointer'>Create User</button>
      </div>

      <div id='hideUserbox' className={`bg-white w-[600px] h-[250px] px-10 absolute right-120 ${showUserBox ? '' : 'hidden'}`}>
        <h3 className='text-2xl my-8'>Create Username</h3>
        <input type="text" name="" id="" placeholder='Enter Your Name' className='border-2 w-[400px] py-1 pl-6' />
        <div className='flex justify-between my-10 w-[250px]'>
        <button className='bg-black text-white px-10 py-1 cursor-pointer'>Create</button>
        <button className='bg-red-800 text-white px-10 py-1 cursor-pointer'>Quit</button>
        </div>
      </div>
      
      </div>
    </>
  )
}

export default Header