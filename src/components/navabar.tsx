import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Instagram, Menu, Twitter, X } from 'lucide-react';
import { FaFacebook } from 'react-icons/fa';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function NavbarK() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/60 backdrop-blur-md shadow-md' : 'bg-white'
      } ${poppins.className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="text-2xl font-bold text-green-600">
            <Link href="/">MyLogo</Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 ml-10">
            <Link href="#About" className="text-gray-700 hover:text-green-600">About</Link>
            <Link href="#Patners" className="text-gray-700 hover:text-green-600">Patners</Link>
            <Link href="#Features" className="text-gray-700 hover:text-green-600">Features</Link>
            <Link href="#Survei" className="text-gray-700 hover:text-green-600">Survei</Link>
          </div>

          {/* Desktop Action */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Link href="#" className="text-gray-700 hover:text-green-600"><Twitter className="w-5 h-5" /></Link>
              <Link href="#" className="text-gray-700 hover:text-green-600"><FaFacebook className="w-5 h-5" /></Link>
              <Link href="#" className="text-gray-700 hover:text-green-600"><Instagram className="w-5 h-5" /></Link>
            </div>
            {/* <Button asChild variant={"custom"} className="px-4 py-2">
              <Link href="/install">Install</Link>
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-green-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className={`md:hidden px-4 pb-4 pt-2 space-y-2 transition-all ${
          isScrolled ? 'bg-white/1 backdrop-blur-sm shadow-md' : 'bg-white shadow'
        }`}>
          <Link href="#About" className="block text-gray-700 hover:text-green-600">About</Link>
          <Link href="#Patners" className="block text-gray-700 hover:text-green-600">Patners</Link>
          <Link href="#Features" className="block text-gray-700 hover:text-green-600">Features</Link>
          <Link href="#Servei" className="block text-gray-700 hover:text-green-600">Survei</Link>
          <div className="flex gap-4 pt-2">
            <Link href="/login" className="text-gray-700 hover:text-green-600"><Twitter className="w-5 h-5" /></Link>
            <Link href="/login" className="text-gray-700 hover:text-green-600"><FaFacebook className="w-5 h-5" /></Link>
            <Link href="/login" className="text-gray-700 hover:text-green-600"><Instagram className="w-5 h-5" /></Link>
          </div>
          {/* <Link
            href="/install"
            className="block bg-green-600 text-white px-4 py-2 rounded-lg text-center hover:bg-green-700 transition"
          >
            Install
          </Link> */}
        </div>
      )}
    </nav>
  );
}
