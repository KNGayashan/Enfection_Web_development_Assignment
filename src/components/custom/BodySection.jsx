import React from 'react'

function BodySection() {

  const bodyContent = [
    {
      id: 1,
      icon: "/happy.svg",
      iconColor: "bg-[#08d3bb]",
      headtitle: "Lorem Ipsun is simple Dummy Text",
      headsubtitle: "Lorem Ipsun is simple Dummy Text",
      headtext1: "Lorem Ipsum",
      headtext2: " is simply dummy text of the printing. ",
      content: "KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS.",
      image: "/mobilesection.svg",
      imagealt: "mobile phone",

    },
    {
      id: 2,
      icon: "/happy.svg",
      iconColor: "bg-[#3b82f6]",
      headtitle: "Lorem Ipsun is simple Dummy Text",
      headsubtitle: "Lorem Ipsun is simple Dummy Text",
      headtext1: "Lorem Ipsum",
      headtext2: " is simply dummy text of the printing. ",
      content: "KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS.",
      image: "/Uisection.svg",
      imagealt: "mobile phone",

    },
    {
      id: 3,
      icon: "/happy.svg",
      iconColor: "bg-[#9208D3]",
      headtitle: "Lorem Ipsun is simple Dummy Text",
      headsubtitle: "Lorem Ipsun is simple Dummy Text",
      headtext1: "Lorem Ipsum",
      headtext2: " is simply dummy text of the printing. ",
      content: "KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS.",
      image: "/vrar.svg",
      imagealt: "mobile phone",

    }
  ];

  return (
    <>
      {bodyContent.map((content) => (
        <div key={content.id} className='px-[123px] py-[100px] items-center justify-center flex flex-col lg:flex-row lg:even:flex-row-reverse'>
          <div className='flex-1 '>
            <div className='flex items-center space-x-4'>
              <img src={content.icon} alt="daklk" className={`h-[75px] w-auto rounded-full p-4 ${content.iconColor}`} />
              <div>
                <h5 className='font-bold text-lg font-poppins'>{content.headtitle}</h5>
                <p className='text-gray-400'>{content.headsubtitle}</p>
              </div>
            </div>

            <h2 className='my-[40px] font-bold text-6xl'><span className='text-[#1090CB]'>{content.headtext1}</span> {content.headtext2} </h2>
            <p className='text-gray-500 text-[25px]'>{content.content}</p>
          </div>

          <div className='flex-1'>
            <img src={content.image} alt={content.imagealt} className='h-[650px]' />
          </div>
        </div>
      ))}
    </>
  )
}

export default BodySection