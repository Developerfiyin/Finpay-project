import React from 'react'
import Footer from '../assets/Footer coffee.png'
const Newsletter = () => {
  return (
    <main className=' py-4 px-4 bg-cover bg-center h-80 rounded-4xl items-center text-center ' style={{ backgroundImage: `url(${Footer})` }}>
        <div className='flex flex-col gap-5'>
       <h2 className='text-6xl text-[#36231D] mt-20 font-semibold items-center text-center'> want updates? Join our NEAT Newsletter today. </h2>
       
        </div>
        <input type="text" placeholder='Enter your email Address'
         className='pl-4 border-none outline-none px-3 mt-7 hover:ring-2 ring-[#36231d] pr-3 py-2 mr-4 items-center rounded-full bg-white w-70 h-15'  
         />
         <button className='bg-[#36231d] ease-in-out duration-500 border-none outline-none font-semibold hover:text-[#36231d] hover:border-2 hover:bg-white rounded-3xl w-50 h-13 text-[#80603f]'>Subscribe</button>
    </main>
  )
                                                                                        

}

export default Newsletter