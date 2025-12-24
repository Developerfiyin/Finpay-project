import React from 'react'
import image  from '../assets/cappuccino.png'
import doppio from '../assets/Doppio.png'
import Ristretto from '../assets/Ristretto.png'


const Menu = () => {
  return (
    <section className='py-8 px-4 text-[#36231D] bg-white'>
       <h3 className='text-xl font-bold text-center '>Our Menu </h3> 
     <h1 className='text-7xl font-semibold mb-6'>Discover Our <br /> Exquiste Menu</h1>

            <div className='flex justify-evenly gap-5 mt-6'>
            <div className='py-2 bg-white px-4 rounded-lg shadow-sm shadow-[#36231d]'>
            <div>
             <img src={image} alt="Cappucino coffee image" className='w-60 h-60 rounded-lg' />
             </div>
             <div className='flex justify-between mt-4'>
              <h4 className='text-[#36231d] font-medium text-xl'> Cappuccino</h4>
              <h6 className='text-[#8d603f] font-semibold'> $12.50</h6>
             </div>
            </div>


             <div className='py-2 bg-white px-4 rounded-lg shadow-sm shadow-[#36231d]'>
            <div>
             <img src={doppio} alt="Doppio coffee image" className='w-60 h-60 rounded-lg' />
             </div>
             <div className='flex justify-between mt-4'>
              <h4 className='text-[#36231d] font-medium text-xl'> Doppio</h4>
              <h6 className='text-[#8d603f] font-semibold'> $18.00</h6>
             </div>
            </div>

            <div className='py-2 bg-white px-4 rounded-lg shadow-sm shadow-[#36231d]'>
            <div>
             <img src={Ristretto} alt="Ristretto coffee image" className='w-60 h-60 rounded-lg' />
             </div>
             <div className='flex justify-between mt-4'>
              <h4 className='text-[#36231d] font-medium text-xl'>Ristretto</h4>
              <h6 className='text-[#8d603f] font-semibold'> $14.75</h6>
             </div>
            </div> 


            </div>

        </section>
  )
}

export default Menu