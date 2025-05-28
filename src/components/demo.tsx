import { Poppins } from "next/font/google"
import Image from "next/image"
import { BiMailSend } from "react-icons/bi";
import { CiGlobe } from "react-icons/ci";
import { PiStudentBold } from "react-icons/pi";
import { GrSecure } from "react-icons/gr";
import { IoIosSettings, IoMdHome } from "react-icons/io";
import { MdMessage } from "react-icons/md";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
})

export default function Demo() {
    return (
        <>
            <div className="mt-32" data-aos="fade-up" data-aos-duration="1000">
                <div
                    className="
                        flex justify-center items-center space-x-32 
                        flex-col space-y-32 
                        lg:flex-row lg:space-x-32 lg:space-y-0
                    "
                    data-aos="fade-up"
                    data-aos-duration="1200"
                >
                    {/* Bagian kiri */}
                    <div className="flex relative ml-28 sm:ml-10 md:ml-14 lg:ml-0">
                        <Image src={'/assets/Mockup4.png'} width={220} height={220} alt="phone"
                            data-aos="zoom-in" data-aos-duration="1000"
                        />
                        <div
                            className="absolute ml-28 bg-white w-38 h-15 shadow-md shadow-gray-600 rounded-lg flex p-2"
                            data-aos="flip-left"
                            data-aos-delay="200"
                            data-aos-duration="800"
                        >
                            <div className="flex flex-col">
                                <p className={`text-[10px] font-medium ${poppins.className}`}>Lebih dari</p>
                                <p className={`text-xs font-bold ${poppins.className}`}>100+</p>
                                <div className="flex w-full">
                                    <p className={`text-[10px] font-medium ${poppins.className}`}>Pengguna </p>
                                </div>
                            </div>
                            <p className="text-[8px] text-gray-500 ml-12">18 March</p>
                        </div>

                        <div
                            className="absolute mt-[380px] bg-white w-38 h-30 shadow-md shadow-gray-600 rounded-lg"
                            data-aos="zoom-in-up"
                            data-aos-delay="300"
                            data-aos-duration="1000"
                        >
                            <div className="flex flex-col w-full">
                                <div className="flex m-1">
                                    <div className="h-10 w-10 rounded-md overflow-hidden flex justify-center items-center">
                                        <Image
                                            src={'https://i.pinimg.com/736x/d0/cb/d1/d0cbd1380c72ddf3750c896433b2dea1.jpg'}
                                            width={100}
                                            height={100}
                                            alt="user"
                                            className="w-10 h-10"
                                        />
                                    </div>
                                    <div className="flex flex-col ml-2 mt-1.5">
                                        <p className={`text-xs font-bold ${poppins.className}`}>Abu Fulan</p>
                                        <p className={`text-[10px] text-gray-500 ${poppins.className}`}>Wali Santri</p>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center mx-3 mt-2">
                                    <div className="w-full bg-gray-200 h-full rounded-sm space-y-1">
                                        <div className="w-full h-4 bg-white rounded-sm border border-gray-400 shadow-md flex justify-center items-center space-x-0.5">
                                            <IoMdHome className="text-[12px] mb-[2px]" />
                                            <p className={`text-[11px] font-medium text-gray-700 mb-[2px] ${poppins.className}`}>App</p>
                                        </div>
                                        <div className="w-full h-4 rounded-md flex justify-center items-center space-x-0.5">
                                            <MdMessage className="text-[12px] mb-[2px]" />
                                            <p className={`text-[11px] font-medium text-gray-700 mb-[2px] ${poppins.className}`}>Messages</p>
                                        </div>
                                        <div className="w-full h-4 rounded-md flex justify-center items-center space-x-0.5">
                                            <IoIosSettings className="text-[12px] mb-[2px]" />
                                            <p className={`text-[11px] font-medium text-gray-700 mb-[2px] ${poppins.className}`}>Setting</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bagian kanan */}
                    <div className="flex flex-col space-y-12" data-aos="fade-left" data-aos-duration="1200" id="Features">
                        <div className="flex flex-col space-y-5 text-center lg:text-left"
                            data-aos="fade-left"
                            data-aos-delay="100"
                            data-aos-duration="800"
                        >
                            <p className={`text-2xl font-bold ${poppins.className}`}>Application Advantages</p>
                            <p className={`text-sm font-medium text-gray-500 ${poppins.className}`}>Keuntungan apa yang di ambil dari aplikasi ini ?</p>
                        </div>

                        <div className="flex flex-col space-y-12 sm:space-y-16 sm:flex-row sm:justify-between sm:space-x-12">
                            {/* Kolom 1 */}
                            <div className="flex flex-col space-y-12 text-center sm:text-left">
                                <div className="flex flex-col items-center sm:items-start space-y-2"
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                    data-aos-duration="700"
                                >
                                    <p className={`text-4xl font-black ${poppins.className}`}><GrSecure /></p>
                                    <p className={`text-gray-500 font-medium ${poppins.className}`}>Keamanan data terjamin</p>
                                </div>
                                <div className="flex flex-col items-center sm:items-start space-y-2"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                    data-aos-duration="700"
                                >
                                    <p className={`text-4xl font-black ${poppins.className}`}><BiMailSend /></p>
                                    <p className={`text-gray-500 font-medium ${poppins.className}`}>Proses <br />Pendaftaran yang efisien</p>
                                </div>
                            </div>

                            {/* Kolom 2 */}
                            <div className="flex flex-col space-y-12 text-center sm:text-left">
                                <div className="flex flex-col items-center sm:items-start space-y-2"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                    data-aos-duration="700"
                                >
                                    <p className={`text-4xl font-black ${poppins.className}`}><CiGlobe /></p>
                                    <p className={`text-gray-500 font-medium ${poppins.className}`}>Bisa Akses dimanapun <br /> dan kapanpun</p>
                                </div>
                                <div className="flex flex-col items-center sm:items-start space-y-2"
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                    data-aos-duration="700"
                                >
                                    <p className={`text-4xl font-black ${poppins.className}`}><PiStudentBold /></p>
                                    <p className={`text-gray-500 font-medium ${poppins.className}`}>Dibuat oleh Siswa Sendiri</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
