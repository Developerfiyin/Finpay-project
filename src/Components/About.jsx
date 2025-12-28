import React from 'react'
import image from '../assets/Coffee shop.png'

const About = () => {
  return (
    <main className='py-6 px-4 mx-4 pl-5 text-[#80603f]'>
          
  <div className='flex justify-evenly gap-3'>

  <div className='flex flex-col'> 
    <p className='text-2xl font-semibold mb-4 '>About Us</p>
    <h1 className='text-5xl font-semibold mb-4 '>This Is All About Our Coffee Shop</h1>
   <h5> NEAT Coffee Bar aims to create a flexible co-working environment <br />
    that provides solution to a wide variety of working professionals. <br />
    The best place to do business with best coffee of the course! Neat <br />
    Coffee Bar is located directly in historic Downtown New port richey.
   </h5>


 </div>

 <div>
    <img src={image} alt="" className='rounded-3xl w-150 h-150
     ' />
 </div>

</div>
         
    </main>
  )
}

export default About