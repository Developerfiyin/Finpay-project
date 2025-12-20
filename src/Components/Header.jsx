import React from 'react'

const Header = () => {
  return (
    <div className=' bg-stone-700'> 

   <img src="" alt="" />

    <div className='flex justify-around'>
   <a href="#home">Home</a>
   <a href="#menu">Menu</a>
   <a href="#contact">Contact</a>
   <a href="#leoting">Leoting</a>
    </div>
    
    <button className='border-2 border-teal-500 m-2 p-1 rounded-lg text-base font-medium '>Login </button>
    <button className='bg-teal-600'>Sign up</button>

    </div>
  )
}

export default Header