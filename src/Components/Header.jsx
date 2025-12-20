import React from 'react'

const Header = () => {
  return (
    <div className=' bg-[#8d603f] py-4 px-2 text-white'> 
    <div className='flex justify-around'>
   <h3 className='text-[#1A0A00] text-2xl font-medium'>Coffee Tea</h3>
    <div className='flex justify-center space-x-4'>
   <a href="#home">Home</a>
   <a href="#menu">Menu</a>
   <a href="#contact">Contact</a>
   <a href="#leoting">Leoting</a>
   <a href="#coconut">Coconut</a>
    </div> 
    
    <button className='border-2 bg-[#36231D] m-2 p-2 rounded-3xl text-base font-medium'>Our Coffee Shop</button>

    </div>
     </div>
  )
}

export default Header