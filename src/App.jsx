import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Menu from './Components/Menu'
import Speciality from './Components/Speciality'
import Newsletter from './Components/Newsletter'
function App() {


  return (
    <>
    <Header/>

    <section id='#products'></section>
    <section id='#menu'></section>
    <section id='#about'></section>
    <section id='#newsletter'></section>
    <section id='#footer'></section>
    <Hero/>
    <Menu/>
    <Speciality/>
    <Newsletter/>
    </>
  ) 
}

export default App
