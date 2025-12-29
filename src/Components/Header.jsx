import React from 'react'


const Header = () => {
  return (
    <div className=' bg-[#8d603f] py-4 px-2'> 
    <div className='flex justify-around text-xl font-medium'>
   <h3 className='text-[#1A0A00] text-2xl font-medium'>Coffee Tea</h3>
    <div className='flex justify-center space-x-4 text-[#36231D]  '>
   <a href="#home">Home</a>
   <a href="#menu">Menu</a>
   <a href="#about">About us</a>
   <a href="#newsletter">Newsletter</a>
   <a href="#footer">Footer</a>
    </div> 
    
    <button className='border-2 text-[#8d603f] bg-[#36231D] m-2 p-2 rounded-3xl text-base font-medium hover:bg-[#8d603f] hover:text-[#36231D] ease-in-out duration-300 '>Our Coffee Shop</button>

    </div>
     </div>
  )
}

export default Header