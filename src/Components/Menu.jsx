import React from 'react'
import image  from '../assets/cappuccino.png'


const Menu = () => {
  return (
    <section className='py-8 px-4 text-[#36231D] bg-whte'>
       <h3 className='text-xl font-bold text-center '>Our Menu </h3> 
     <h1 className='text-7xl font-semibold mb-4'>Discover Our <br /> Exquiste Menu</h1>

            <div className='flex  gap-5'>
                <div className='py-4 bg-white px-4 rounded-lg'>
            <div>
             <img src={image} alt="Cappucino coffee image" className='w-60 rounded-lg' />
             </div>

             <div className='flex justify-between mt-4'>
              <h4 className='text-[#36231d]'> Cappuccino</h4>
              <h6 className='text-[#8d603f]'> $12.50</h6>
             </div>

                </div>
            </div>

        </section>
  )
}

export default Menu