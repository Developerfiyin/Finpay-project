import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Menu from './Components/Menu'
import Speciality from './Components/Speciality'
import About from './Components/About'
import Testimonials from './Components/Testimonials'  
import Newsletter from './Components/Newsletter'
function App() {


  return (
    <>
    <Header/>
  <Hero/>

    <section id='menu'>
     <Menu/>
    </section>

    <section id='speciality'>
        <Speciality/>
    </section>

    <section id='about'>
      <About/>
    </section>

    <section id='testimonials'> 
 <Testimonials/>
    </section>

    <section id='newsletter'>
     <Newsletter/>
    </section>
    <section id='footer'></section>
   
   
  
   
   
   
    </>
  ) 
}

export default App
