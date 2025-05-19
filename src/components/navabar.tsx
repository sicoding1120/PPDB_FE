import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Camera, Facebook, Instagram, Menu, Twitter, X } from 'lucide-react';
import { Button } from './ui/button';
import { FaFacebook } from "react-icons/fa";
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
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);
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
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-20">
        <div className="flex justify-between h-12 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-green-600">
            <Link href="/">MyLogo</Link>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden ml-14 md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-green-600">Home</Link>
            <Link href="/features" className="text-gray-700 hover:text-green-600">Features</Link>
            <Link href="/pricing" className="text-gray-700 hover:text-green-600">Pricing</Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600">About</Link>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <Link href="/login" className="text-gray-700 hover:text-green-600"><Twitter className="w-5 h-5" /></Link>
              <Link href="/login" className="text-gray-700 hover:text-green-600"><FaFacebook className="w-5 h-5" /></Link>
              <Link href="/login" className="text-gray-700 hover:text-green-600"><Instagram className="w-5 h-5" /></Link>
            </div>
            <Button asChild variant={"custom"} className='px-5'>
              <Link href="/install">Install</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-green-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white shadow">
          <Link href="/" className="block text-gray-700 hover:text-green-600">Home</Link>
          <Link href="/features" className="block text-gray-700 hover:text-green-600">Features</Link>
          <Link href="/pricing" className="block text-gray-700 hover:text-green-600">Pricing</Link>
          <Link href="/about" className="block text-gray-700 hover:text-green-600">About</Link>
          <Link href="/login" className="block text-gray-700 hover:text-green-600">Login</Link>
          <Link
            href="/install"
            className="block bg-green-600 text-white px-4 py-2 rounded-lg text-center hover:bg-green-700 transition"
          >
            Install
          </Link>
        </div>
      )}
    </nav>
  );
}
