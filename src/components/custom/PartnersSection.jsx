import React from 'react'

function PartnersSection() {
  return (
    <div className='px-[123px] py-[100px] items-center justify-center flex flex-col gap-14 '>
      <h4 className='text-[30px] font-semibold'>You will be in good Company</h4>
      <div className='flex  flex-col lg:flex-row justify-center gap-[80px]'>
        <img src="/beneoshop.svg" alt="beneoshop" className='h-[250px]'/>
        <img src="/caspio.svg" alt="caspio" className='h-[250px]'/>
        <img src="/HyperGrid.svg" alt="HyperGrid" className='h-[250px]'/>
        <img src="/leotrippi.svg" alt="leotrippi" className='h-[250px]'/>

      </div>

    </div>
  )
}

export default PartnersSection