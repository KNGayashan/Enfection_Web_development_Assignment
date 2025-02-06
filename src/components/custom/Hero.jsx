import React from 'react'
import { Button } from "@/components/ui/button"

function Hero() {
  return (
    <>
      <div className='bg-[#1090CB1A] md:h-screen 2xl:h-[900px] items-center px-[123px] relative overflow'>

        <div className='flex'>
        <div className='absolute right-0 top-0 w-full z-[30]'>

            <img src="/Vector1.svg" alt="vector 1" className='absolute w-[475px] h-[531px] right-0 top-[200px] -mr-[200px]' />
            <img src="/Vector2.svg" alt="vector 2" className='absolute w-[475px] h-[570px] left-0 top-[350px] -ml-[200px] mt-[90px] z-[60]' />

          </div>

          <div className='flex md:flex-row flex-col w-full z-10 justify-between items-center'>
            <div className='md:w-1/2'>
              <h1 className='md:text-[40px] mt-[75px] 2xl:text-[55px]  font-semibold text-gray-950'>Experienced <span className='text-[#1090CB]'>mobile and web</span> application and website builders measuring.</h1>
              <p className='text-[18px] 2xl:text-[30px] mt-16 mb-24 2xl:mb-16 text-gray-500'>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
                applications and website builders measuring dozens of completed projects.
                We build and develop mobile applications for several top platforms,
                including Android & IOS.</p>
              <div className='flex space-x-4 mb-[75px] 2xl:mb-[50px]'>
                <Button className='font-poppins w-[200px] h-[66px] text-[20px] px-[125px] rounded-xl bg-[#1090CB] '>Contact Us</Button>
                <Button className='font-poppins w-[200px] h-[66px] text-[20px] px-[125px] rounded-xl bg-white text-[#1090CB] border-[#1090CB] ' variant="outline">View more</Button>
              </div>
            </div>

            <div className='md:relative items-center justify-center  md:flex md:scale-90 2xl:scale-150 2xl:mr-[200px]'>

              <div className='relative z-10 md:w-[700px] h-auto md:-mr-24 -mt-[100px]'>
                <img src="/BillSitting.svg" alt="bill sitting" className='w-[500px] h-auto' />
              </div>


              <div className='absolute top-0 -right-8 w-24 h-auto md:mt-[150px] mt-[750px] md:mr-[45px] mr-[80px]'>
                <img src="/Cuboid.svg" alt="cuboid" className='w-[500px] h-auto' />
              </div>

              <div className='absolute top-16 right-48 w-[70px] h-auto md:mt-[180px] md:mr-[260px] mt-[750px] mr-[200px]'>
                <img src="/Succlentangle.svg" alt="purple vass" className='w-[500px] h-auto' />
              </div>


              <div className='absolute bottom-0 right-0 pb-12 -pr-[100px]'>
                <img src="/BigPlant.svg" alt="big plant" className='w-[200px] h-auto' />

              </div>
            </div>
          </div>

        </div>
        

      </div>

      <div className='relative bg-white f-[1000px] flex flex-col lg:flex-row gap-10 justify-center items-center z-[10] mt-[-50px]'>


          <div className='flex h-[200px] w-auto items-center justify-center gap-15'>
            <div className='bg-[#EFEAFF] rounded-3xl p-1 mr-5'>
            <img src="/web.svg" alt="web application" className='w-[60px] h-auto m-[20px]' />
            </div>
            <div className='space-y-1'>
              <h4 className='font-bold text-[26px]'>Web Application</h4>
              <p className='text-gray-400 text-[20px]'>Lorem ipsum is simply</p>
            </div>
          </div>

          <div className='flex h-[200px] w-auto items-center justify-center gap-15'>
            <div className='bg-[#ECFFDA] rounded-3xl p-1 mr-5'>
            <img src="/seo.svg" alt="web application" className='w-[60px] h-auto m-[20px]' />
            </div>
            <div className='space-y-1'>
              <h4 className='font-bold text-[26px]'>SEO</h4>
              <p className='text-gray-400 text-[20px]'>Lorem ipsum is simply</p>
            </div>
          </div>

          <div className='flex h-[200px] w-auto items-center justify-center gap-15'>
            <div className='bg-[#DAE6FF] rounded-3xl p-1 mr-5'>
            <img src="/arvr.svg" alt="web application" className='w-[60px] h-auto m-[20px]' />
            </div>
            <div className='space-y-1'>
              <h4 className='font-bold text-[26px]'>AR/VR Solution</h4>
              <p className='text-gray-400 text-[20px]'>Lorem ipsum is simply</p>
            </div>
          </div>

          <div className='flex h-[200px] w-auto items-center justify-center gap-15'>
            <div className='bg-[#FFE5DA] rounded-3xl p-1 mr-5'>
            <img src="/mobile.svg" alt="web application" className='w-[60px] h-auto m-[20px]' />
            </div>
            <div className='space-y-1'>
              <h4 className='font-bold text-[26px]'>Mobile Applications</h4>
              <p className='text-gray-400 text-[20px]'>Lorem ipsum is simply</p>
            </div>
          </div>
          
        
        </div>

    </>


  )
}



export default Hero

