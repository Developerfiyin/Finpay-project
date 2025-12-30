import React from 'react'

const Footer = () => {
  return (
    <section className='py-4 px-4 bg-white text-[#36231d] '>
      <div className='grid grid-cols-4 gap-5'>
        <div className='text-xl'>
      <h3>When looking for a place to get the work done, vist NEAT coffee bar today.
        for your next great meeting, or your best cup of coffee yet! Networking welcomed and accomodated
       </h3>
        </div>

        {/*QUICK LINKS FOR FOOTER SECTION */} <div className=''> 
           <h3 className='font-medium text-4xl text-center'>Quick Link</h3>
           <div className=' font-semibold text-base flex flex-col items-center'>
          <a href="#home" className='p-2'>HOME</a>
         <a href="#menu" className='p-2'>MENU</a>
         <a href="#about" className='p-2'>ABOUT US </a>
         <a href="#newsletter" className='p-2'>NEWSLETTER</a>
         <a href="#footer" className='p-2'>FOOTER</a>
           </div>
        </div>
       
       {/*NEAT MEMBERSHIP */}
         <div className='font-semibold'>
         <h3 className='text-3xl mb-6 '>Neat Membership</h3>
          <h5 className='text-xl p-1 '>Neat Member</h5>
          <h5 className='text-xl p-1'>Neat Bronze member</h5>
          <h5 className='text-xl p-1'>Neat Vendor member</h5>
          <h5 className='text-xl p-1'>Neat Sliver member</h5>
          <h5 className='text-xl p-1'>Neat Gold Member</h5>
         </div>

        <div className='font-semibold'>
          <h2 className='text-4xl mb-4'>Get in Touch</h2>
         <h5>(725) 484-6312 </h5>
         <h5> (866)233-834-922 </h5>
         <h5> (+234)838-911-990 </h5>
         <h5 className='mb-6'>wayne@neatcoffeegmail.com</h5>
         <h5>23a yudod street street.</h5>
        </div>


      </div>


      </section>
  )
}

export default Footer