import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative h-24 bg-white border-b">
      <div className="px-5 h-full">
        <div className="flex justify-between items-center h-full">
          
          <h1 className="font-bold text-2xl text-[#1090CB]">LOGO</h1>

          
          <button className="lg:hidden p-2 bg-transparent hover:bg-gray-100 rounded-md transition-colors" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>

           {/* Desktop Navigation  */}
          <nav className="hidden lg:flex items-center space-x-10 gap-9">
            <a href="#" className="font-poppins text-gray-700 hover:text-[#1090CB] text-lg transition-colors">Home</a>
            <a href="#" className="font-poppins text-gray-700 hover:text-[#1090CB] text-lg transition-colors">About us</a>
            <a href="#" className="font-poppins text-gray-700 hover:text-[#1090CB] text-lg transition-colors">Services</a>
            <a href="#" className="font-poppins text-gray-700 hover:text-[#1090CB] text-lg transition-colors">Blog</a>
            <Button className="font-poppins bg-[#1090CB] hover:bg-[#0e82b9] text-white transition-colors">Contact Us</Button>
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="absolute top-24 left-0 right-0 bg-white border-b shadow-lg lg:hidden">
              <nav className="container mx-auto px-4 py-4">
                <div className="flex flex-col space-y-4">
                  <a href="#" className="font-poppins text-gray-700 hover:text-[#1090CB] text-lg transition-colors">Home</a>
                  <a href="#" className="font-poppins text-gray-700 hover:text-[#1090CB] text-lg transition-colors">About us</a>
                  <a href="#" className="font-poppins text-gray-700 hover:text-[#1090CB] text-lg transition-colors">Services</a>
                  <a href="#" className="font-poppins text-gray-700 hover:text-[#1090CB] text-lg transition-colors">Blog</a>
                  <Button className="bg-[#1090CB] hover:bg-[#0e82b9] text-white transition-colors">Contact Us</Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;