import { Poppins } from "next/font/google"
import Image from "next/image"
import { AiOutlineThunderbolt, AiFillLike } from "react-icons/ai"
import { IoIosPhonePortrait } from "react-icons/io"
import { MdMobileFriendly } from "react-icons/md"
import { TfiHummer } from "react-icons/tfi"

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export default function Demo2() {
  return (
    <div className="flex flex-col-reverse items-center gap-y-20 pt-40 lg:flex-row lg:justify-center lg:items-center lg:gap-x-20 lg:gap-y-0 bg-white">

      {/* TEXT */}
      <div className="flex flex-col space-y-12 max-w-lg px-4 sm:px-8" data-aos="fade-left">
        <div className="flex flex-col space-y-5 text-center lg:text-left">
          <p className={`text-2xl font-bold ${poppins.className}`}>Why This App Stands Out</p>
          <p className={`text-sm font-medium text-gray-500 ${poppins.className}`}>Cepat, Aman, Nyaman, Inovatif, Andal.</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center w-full gap-y-12 sm:gap-x-10">
          <div className="flex flex-col space-y-12 items-center lg:items-start text-center lg:text-left">
            <div className="flex flex-col space-y-2 items-center lg:items-start" data-aos="fade-up" data-aos-delay="100">
              <p className={`text-4xl font-black ${poppins.className}`}><IoIosPhonePortrait /></p>
              <p className={`text-gray-500 font-medium ${poppins.className}`}>Dibangun dengan teknologi modern yang ringan dan cepat.</p>
            </div>
            <div className="flex flex-col space-y-2 items-center lg:items-start" data-aos="fade-up" data-aos-delay="200">
              <p className={`text-4xl font-black ${poppins.className}`}><AiOutlineThunderbolt /></p>
              <p className={`text-gray-500 font-medium ${poppins.className}`}>Responsive lancar tanpa hambatan.</p>
            </div>
          </div>
          <div className="flex flex-col space-y-12 items-center lg:items-start text-center lg:text-left">
            <div className="flex flex-col space-y-2 items-center lg:items-start" data-aos="fade-up" data-aos-delay="300">
              <p className={`text-4xl font-black ${poppins.className}`}><MdMobileFriendly /></p>
              <p className={`text-gray-500 font-medium ${poppins.className}`}>User Friendly, navigasi intuitif dan ringan.</p>
            </div>
            <div className="flex flex-col space-y-2 items-center lg:items-start" data-aos="fade-up" data-aos-delay="400">
              <p className={`text-4xl font-black ${poppins.className}`}><TfiHummer /></p>
              <p className={`text-gray-500 font-medium ${poppins.className}`}>Aplikasi yang terus dikembangkan.</p>
            </div>
          </div>
        </div>
      </div>

      {/* IMAGE */}
      <div className="relative flex px-4 sm:px-8">
        <Image src={'/assets/Mockup4.png'} width={220} height={220} alt="phone" />
        <div className="absolute ml-36">
          <div className="absolute bg-white w-38 h-15 shadow-md shadow-gray-600 rounded-lg flex p-2" data-aos="zoom-in">
            <div className="flex flex-col w-full">
              <p className={`text-[8px] text-gray-500 mb-0.5 ${poppins.className}`}>Senin</p>
              <p className={`text-xs font-bold ${poppins.className}`}>Hasil Test</p>
              <p className={`text-[10px] font-medium ${poppins.className}`}>Pesan Masuk</p>
            </div>
            <p className="text-[8px] text-gray-500 ml-1">18 March</p>
          </div>
          <div className="absolute h-5 w-5 bg-red-500 rounded-full ml-36 mb-2 flex justify-center items-center">
            <p className={`text-xs text-white font-medium ${poppins.className}`}>1</p>
          </div>
        </div>
        <div className="absolute mt-[390px]" data-aos="fade-up">
          <div className="absolute bg-white w-38 h-15 shadow-md shadow-gray-600 rounded-lg flex p-2">
            <div className="flex flex-col w-full">
              <p className={`text-[8px] text-gray-500 mb-0.5 ${poppins.className}`}>Senin</p>
              <p className={`text-xs font-bold ${poppins.className}`}>PPDB Dibuka!!</p>
              <p className={`text-[10px] font-medium ${poppins.className}`}>Pesan Masuk</p>
            </div>
            <p className="text-[8px] text-gray-500 ml-1">18 March</p>
          </div>
          <div className="absolute h-5 w-5 bg-red-500 rounded-full ml-36 mb-2 flex justify-center items-center">
            <AiFillLike className="text-white text-sm" />
          </div>
        </div>
      </div>
    </div>
  )
}
