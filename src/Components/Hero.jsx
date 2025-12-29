import React from 'react'
import image  from '../assets/hero coffee.png'

const Hero = () => {
  return (
    <section className='min-h-screen flex items-center justify-center text-center bg-cover bg-center '   style={{ backgroundImage: `url(${image})` }}> 
       <h2 className='text-9xl text-[#36231D] font-medium '>Brewed to Perfection</h2>
    </section>
  )
}

export default Hero