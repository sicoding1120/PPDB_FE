'use client';

import { Poppins } from 'next/font/google';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const poppins = Poppins({
    variable: '--font-poppins',
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export default function Colab() {
  return (
    <section className="w-full pt-10 bg-white">
      <h2 className={`text-sm font-semibold text-center mb-6 ${poppins.className}`}>Lebih dari <span className='font-bold text-green-600'>20+</span> academy partners</h2>

      <div className="flex w-full justify-center items-center">
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          className="space-x-10 mt-2"
        >
          <Image src="/assets/Mickro.jpg" alt="Partner 1" className="h-12 w-40 mx-6" width={160} height={48} />
          <Image src="/assets/Sisco.png" alt="Partner 2" className="h-12 w-36 mx-6" width={160} height={48} />
          <Image src="/assets/RedHat.png" alt="Partner 3" className="h-12 mx-6" width={160} height={48} />
          <Image src="/assets/ITC.png" alt="Partner 4" className="h-12 mx-6" width={160} height={48} />
          <Image src="/assets/PENS.png" alt="Partner 5" className="h-12 mx-6" width={160} height={48} />
          <Image src="/assets/Anabuki.png" alt="Partner 5" className="h-12 mx-6" width={160} height={48} />
          <Image src="/assets/AWS.jpg" alt="Partner 5" className="h-12 mx-6" width={160} height={48} />
        </Marquee>
      </div>
    </section>
  );
}
