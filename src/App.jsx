import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Menu from './Components/Menu'
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
    <Newsletter/>
    </>
  ) 
}

export default App
