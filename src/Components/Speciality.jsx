import React from 'react'
import coffee from '../assets/coffee.png'
import Worker from '../assets/worker 1.png'
import Worker1 from '../assets/worker 2.png'

const Speciality = () => {
  return (
    <main className='py-4 px-4 bg-[#36231d] text-white text-center items-center '>
          <h5 className='mt-6'> Our Speciality</h5>
          <h1 className='text-6xl font-semibold mb-6'>We Deliver Good Vibes everyday</h1>

           <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
            <div className=''>
            <img src={coffee} alt="The exceptional coffee image" className='rounded-t-lg'/>
                 <div className='bg-white rounded-b-lg'> 
                    <h1 className='text-5xl p-7 font-semibold text-[#36231d]'> Exceptional Coffee</h1>
                 </div>
            </div>
            
             <div className=''>
            <img src={Worker} alt="The exceptional coffee image" className='rounded-t-lg'/>
                 <div className='bg-white rounded-b-lg'> 
                    <h1 className='text-5xl p-7 font-semibold text-[#36231d]'>Flexible Co-working</h1>
                 </div>
            </div> 

           <div className=''>
            <img src={Worker1} alt="The exceptional coffee image" className='rounded-t-lg h-70 w-full'/>
                 <div className='bg-white rounded-b-lg'> 
                    <h1 className='text-5xl p-7 font-semibold text-[#36231d]'>Service with a smile.</h1>
                 </div>
            </div>
           </div>

            <button className='mt-5 py-3 p-2  rounded-3xl  text-[#36231d] bg-[#8d603f]'>View All</but
        </main>
  )
}

export default Speciality