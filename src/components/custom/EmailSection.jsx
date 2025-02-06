import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function EmailSection() {
  return (
    <div className="bg-[#1090CB1A] flex flex-col items-center w-full justify-center px-[123px] relative">
      
      <img
        src="/star.svg" 
        alt="Star Icon"
        className="absolute top-[-35px] left-[-30px] w-[80px] h-[80px] rotate-[-15deg] ml-[250px]"
      />

      <h2 className="md:text-5xl text-3xl font-semibold w-auto mt-[200px] mb-[100px] text-center">
        Lorem Ipsum is simply dummy
        <br />
        text of the printing.
      </h2>

      <div className="flex w-full items-center space-x-2 justify-center mb-[200px]">
        <Input
          type="email"
          placeholder="Enter Your Email"
          className="font-poppins lg:text-[25px] rounded-lg md:w-[532px] md:h-[67px]"
        />
        <Button type="submit" className="md:w-[173px] md:h-[67px] lg:text-[25px] font-poppins">
          Subscribe
        </Button>
      </div>

      
      <img
        src="/pie.svg" 
        alt="pie chart"
        className="absolute top-[50px] right-[100px] w-[50px] h-[50px] mr-[500px] mt-[120px]"
      />
    </div>
  );
}

export default EmailSection;
