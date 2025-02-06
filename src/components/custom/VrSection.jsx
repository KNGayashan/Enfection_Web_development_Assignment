import React from 'react'

function VrSection() {
  return (
    <div className='px-[123px] py-[100px] items-center justify-center flex flex-col lg:flex-row'>
    <div className='flex-1 '>
      <div className='flex items-center space-x-4'>
        <img src="/happy.svg" alt="daklk" className='h-[75px] w-auto bg-[#9208D3] rounded-full p-4' />
        <div>
          <h5 className='font-bold text-lg font-poppins'>Lorem Ipsun is simple Dummy Text</h5>
          <p className='text-gray-400'>Lorem Ipsun is simple Dummy Text</p>
        </div>
      </div>

      <h2 className='my-[40px] font-bold text-6xl'><span className='text-[#1090CB]'>Lorem Ipsum</span> is simply dummy text of the printing. </h2>
      <p className='text-gray-500 text-[25px]'>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
    </div>

    <div className='flex-1'>
      <img src="/vrar.svg" alt="ar vr" className='h-[700px] w-auto mr-[400px]' />
    </div>
  </div>
  )
}

export default VrSection