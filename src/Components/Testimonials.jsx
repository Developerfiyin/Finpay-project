import React from 'react'
import image from '../assets/member 1.png'
import image1 from '../assets/member 2.png'
import image2 from '../assets/member 3.png'


const Testimonials = () => {
  return (
    <main className='py-4 px-4  bg-white text-[#80603f] text-center items-center'>
      <h5 className='text-2xl font-medium'>TESTIMONIALS</h5>
      <h2 className='text-7xl font-semibold '>WHAT OUR CLIENTS SAYS</h2>
    
     <div className='flex gap-5 grid-cols-3 grid mt-4'> 
      <div className='m-4 p-4 border-2 rounded-2xl shadow-sm shadow-[#36231d] ease-in-out duration-300 '>
         <div className='flex gap-4 mb-4'> {/* THE IMAGE AND  NAME DIV */ }
            <img src={image} alt="The member image" className='rounded-full h-15 w-15' /> 
            <div> 
           <h4 className='text-3xl font-semibold'> Joanna Julie </h4>
            <h5 className='text-xl font-medium '>Founder Main Street Bakery</h5>
            </div>
         </div>
          <h3>NEAT has completely transform how i work. The coffee is amazing, the space is inspiring and the vibe is always welcoming! </h3>
      </div>
     
       <div className='m-4 p-4 border-2 rounded-2xl shadow-sm shadow-[#36231d] ease-in-out duration-300 '>
         <div className='flex gap-4 mb-4'> {/* THE IMAGE AND  NAME DIV */ }
            <img src={image1} alt="The second member image " className='rounded-full h-15 w-15' /> 
            <div> 
           <h4 className='text-3xl font-semibold'> John Doe </h4>
            <h5 className='text-xl font-medium '>Founder .32degreebelowfla</h5>
            </div>
         </div>
          <h3>NEAT has completely transform how i work. The coffee is amazing,
             the space is inspiring and the vibe is always welcoming! </h3>
      </div>
     





     </div>

      


    </main>
  )
}

export default Testimonials