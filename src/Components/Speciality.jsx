import React from 'react'
import coffee from '../assets/coffee.png'

const Speciality = () => {
  return (
    <main className='py-4 px-4 bg-[#36231d] text-white text-center items-center '>
          <h5 className='mt-6'> Our Speciality</h5>
          <h1 className='text-6xl font-semibold'>We Deliver Good Vibes everyday</h1>
           <div className='flex justify-evenly mt-6'>
            <div>
            <img src={coffee} alt="The exceptional coffee image " />
                 <div className='bg-white'> 
                    <h1 className='text-5xl p-5 font-semibold text-[#36231d]'> Exceptional Coffee</h1>
                 </div>
            </div>
           </div>
        </main>
  )
}

export default Speciality