import React from 'react'
import image  from '../assets/cappuccino.png'


const Menu = () => {
  return (
    <section className='py-4 px-4 text-[#36231D] bg-white'>
       <h3 className='text-xl font-bold text-center '>Our Menu </h3> 
     <h1 className='text-7xl font-semibold mb-4'>Discover Our <br /> Exquiste Menu</h1>

            <div className='flex justify-around mt-4 '>
              <div className='bg-white m-4 border-4 border-[#36231D] '>
                <div>

              
                <img src={image} alt="Cappuccino coffee image" className='w-25 ' />
                  </div>
              </div>

            </div>

        </section>
  )
}

export default Menu