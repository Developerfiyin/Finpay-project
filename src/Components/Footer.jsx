import React from 'react'

const Footer = () => {
  return (
    <section className='py-4 px-4 bg-white text-[#36231d] '>
      <div className='grid grid-cols-4 gap-5'>
        <div>
      <h3>When looking for a place to get the work done, vist NEAT coffee bar today.
        for your next great meeting, or your best cup of coffee yet! Networking welcomed and accomodated
       </h3>
        </div>

        {/*QUICK LINKS FOR FOOTR SECTION */} <div className=''> 
           <h3>Quick Link</h3>
           <div>
            
           </div>
         <a href="#home">HOME</a>
         <a href="#menu">MENU</a>
         <a href="#about">ABOUT US </a>
         <a href="#newsletter">NEWSLETTER</a>
         <a href="#footer">FOOTER</a>
        </div>
       
    

      </div>


      </section>
  )
}

export default Footer