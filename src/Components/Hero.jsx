import React from 'react'
import image  from '../assets/hero coffee.png'

const Hero = () => {
  return (
    <section className='min-h-screen flex justify-center text-center bg-cover bg-center ' style={{backgroundImage : url`(${image})`}}> 
       <h3>Brewed to Perfection</h3>

    </section>
  )
}

export default Hero