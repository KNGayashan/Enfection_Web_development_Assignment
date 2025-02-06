import React from 'react'

function Footer() {
  return (
    <div className='flex md:flex-row flex-col p-[80px] border-b-2 justify-evenly'>
      <div className='w-1/4'>
        <h1 className='text-[#00329B] font-poppins font-bold'>LOGO</h1>
        <p className='text-gray-500 text-[18px] w-[500px] my-5'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <p className='text-[18px] text-gray-400'>@Lorem</p>
      </div>

      <div className='w-1/4'>
      <h3 className="font-semibold text-lg my-8">About us</h3>
      <ul className="mt-2 space-y-2 text-gray-600">
        <li> <a href="#" className="text-gray-500">Lorem</a> </li>
        <li> <a href="#" className="text-gray-500">Portfolio</a> </li>
        <li> <a href="#" className="text-gray-500">Careers</a> </li>
        <li> <a href="#" className="text-gray-500">Contact us</a> </li>
      </ul>
      </div>

      <div className='w-1/4'>
      <h3 className="font-semibold text-lg my-8">Contact us</h3>
      
      <p className='text-gray-500 my-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

      <p className='text-gray-500'>+908 89097 890</p>
      </div>
      
      <div className='flex justify-center items-center rounded-full gap-1 align-bottom mt-10 w-1/4'>
        <div><img src="/facebook.svg" alt="" className='w-18 h-10 rounded-full m-5 shadow-lg'/></div>
        <div><img src="/instagram.svg" alt="" className='w-18 h-10 rounded-full m-5 shadow-lg'/></div>
        <div><img src="/twitter.svg" alt="" className='w-18 h-10 rounded-full m-5 shadow-lg'/></div>
        <div><img src="/linkedin.svg" alt="" className='w-18 h-10 rounded-full m-5 shadow-lg'/></div>
        
      </div>
    </div>
  )
}

export default Footer