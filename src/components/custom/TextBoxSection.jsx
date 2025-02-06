import React from 'react';
import { Button } from "@/components/ui/button";

function TextBoxSection() {
  return (
    <div className='px-8 py-16 items-center justify-center flex flex-col lg:flex-row gap-20'>
      <div className='flex-1 bg-gray-200 text-center p-5 h-96 flex flex-col justify-center items-center rounded-3xl w-full max-w-lg'>
        <h3 className='text-gray-800 font-sans font-semibold my-10 text-2xl'>Lorem Ipsum is simply dummy text.</h3>
        <p className='text-gray-500 mb-5 text-lg'>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS.</p>
        <Button className='font-sans h-16 px-8 rounded-xl bg-blue-500 text-white hover:bg-blue-600 text-lg' variant="outline">
          View more
        </Button>
      </div>

      <div className='flex-1 bg-blue-500 text-center p-5 h-96 flex flex-col justify-center items-center rounded-3xl w-full max-w-lg relative'>
       
        <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg transform rotate-12">
          <img 
            src="/bell.png" 
            alt="" 
            className="w-16 h-16"
          />
        </div>
        
        <h3 className='text-white font-sans font-semibold my-10 text-2xl'>Lorem Ipsum is simply dummy text.</h3>
        <p className='text-white mb-5 text-lg'>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS.</p>
        <Button className='font-sans h-16 px-8 rounded-xl bg-white text-blue-500 hover:bg-gray-50 text-lg' variant="outline">
          View more
        </Button>
      </div>
    </div>
  );
}

export default TextBoxSection;