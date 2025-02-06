import React from 'react';

function UiSection() {
  return (
    <div className="px-8 py-16 items-center justify-center flex flex-col lg:flex-row">
      <div className="flex-1">
        <div className="relative">
          {/* Gradient background layers */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-gradient-to-br from-[#F3FFD9] to-[#FFFFFF] blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-gradient-to-br from-[#F3FFD9] to-[#FFFFFF] blur-2xl" />
          
          {/* Image on top */}
          <div className="relative">
            <img 
              src="/Uisection.svg" 
              alt="mobile phone" 
              className="h-[650px] relative z-10"
            />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center space-x-4">
          <img
            src="/happy.svg"
            alt="daklk"
            className="h-16 w-16 bg-blue-500/80 rounded-full p-4"
          />
          <div>
            <h5 className="font-bold text-lg font-sans">
              Lorem Ipsun is simple Dummy Text
            </h5>
            <p className="text-gray-400">Lorem Ipsun is simple Dummy Text</p>
          </div>
        </div>

        <h2 className="my-10 font-bold text-5xl">
          <span className="text-blue-500">Lorem Ipsum</span> is simply dummy text
          of the printing.
        </h2>
        <p className="text-gray-500 text-2xl">
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens of completed projects.
          We build and develop mobile applications for several top platforms,
          including Android & IOS.
        </p>
      </div>
    </div>
  );
}

export default UiSection;