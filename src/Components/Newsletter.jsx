import React from 'react'
import Footer from '../assets/Footer coffee.png'
const Newsletter = () => {
  return (
    <main className='bg-cover bg-center h-80 rounded-4xl items-center text-center ' style={{ backgroundImage: `url(${Footer})` }}>
        <div className='flex flex-col gap-5'>
       <h2 className='text-6xl text-[#36231D] mt-28 font-medium items-center text-center'> want updates? Join our NEAT Newsletter today. </h2>
       
        </div>
        <input type="text" placeholder='Enter your email'
         className='pl-3 border-none outline-none px-3 mt-7 ring-2 ring-[#36231d] pr-3 py-2 mr-4 items-center rounded-full bg-white w-70 h-15'  
         />
         <button className='bg-[#36231d] ease-in-out duration-500 font-semibold hover:text-white hover:bg-[#80603f] rounded-3xl w-50 h-10 text-[#80603f] '>Subscribe</button>
    </main>
  )


}

export default Newsletter