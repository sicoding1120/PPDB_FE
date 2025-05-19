'use client'
// import Image from "next/image";

import Client from '@/components/client';
import Colab from '@/components/colaboration';
import Demo from '@/components/demo';
// import Hero from '@/components/hero';
import Hero1 from '@/components/hero1';
import Learn from '@/components/learn';
import NavbarK from '@/components/navabar';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '@/components/footer';
import Demo2 from '@/components/demo2';

export default function Page() {
  useEffect(() => {
    AOS.init({
    duration: 1000,
    once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <NavbarK />
      <Hero1 />
      <Colab />
      <Learn />
      <Demo />
      <Demo2 />
      <Client />
      <Footer />
      {/* <Hero/> */}
    </>
  )
}