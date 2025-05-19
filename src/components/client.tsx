import { Poppins } from "next/font/google";
import { FaUser } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function Client() {
    return (
        <>
            <div className="w-full flex flex-col justify-center items-center mt-40 space-y-8 mb-36">
                <div className="flex flex-col justify-center items-center space-y-8">
                    <div className="w-10 h-10 bg-black rounded-md items-center justify-center flex">
                        <FaUser className="text-white" />
                    </div>
                    <p className={`text-3xl font-semibold ${poppins.className}`}>What Clients Say</p>
                    <p className={`w-190 text-center text-gray-500 ${poppins.className}`}>
                        Dengarkan apa kata para orang tua dan calon peserta didik tentang pengalaman mereka menggunakan aplikasi PPDB kami. Kami berkomitmen memberikan proses pendaftaran yang mudah, cepat, dan transparan demi mendukung masa depan pendidikan yang lebih baik.
                    </p>
                </div>
                <Marquee direction="left" speed={40} pauseOnHover>
                    <div className="flex space-x-4">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <div key={index} className="w-95 h-35 flex border-1 border-gray-400 rounded-lg bg-white shadow-md shadow-gray-400 mx-4">
                                <div className="m-2 flex flex-col space-y-1.5 w-40 justify-center items-center">
                                    <img src={'https://i.pinimg.com/736x/d0/cb/d1/d0cbd1380c72ddf3750c896433b2dea1.jpg'} width={100} height={100} alt="user" className="h-10 w-10 bg-black rounded-full" />
                                    <p className={`text-sm font-semibold ${poppins.className}`}>Abu Fulan</p>
                                    <p className={`text-xs text-gray-500 ${poppins.className}`}>Wali Santri</p>
                                </div>
                                <div className="flex mt-5 items-center text-center justify-center m-2">
                                    <p className="text-base italic">"Pendaftarannya mudah dan bisa dari <span className="ml-1.5">rumah. Sangat membantu!"</span></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Marquee>
                <Marquee direction="right" speed={40} pauseOnHover>
                    <div className="flex space-x-4">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <div key={index} className="w-95 h-35 flex border-1 border-gray-400 rounded-lg bg-white shadow-md shadow-gray-400 mx-4">
                                <div className="m-2 flex flex-col space-y-1.5 w-40 justify-center items-center">
                                    <img src={'https://i.pinimg.com/736x/d0/cb/d1/d0cbd1380c72ddf3750c896433b2dea1.jpg'} width={100} height={100} alt="user" className="h-10 w-10 bg-black rounded-full" />
                                    <p className={`text-sm font-semibold ${poppins.className}`}>Abu Fulan</p>
                                    <p className={`text-xs text-gray-500 ${poppins.className}`}>Wali Santri</p>
                                </div>
                                <div className="flex mt-5 items-center text-center justify-center m-2">
                                    <p className="text-base italic">"Pendaftarannya mudah dan bisa dari <span className="ml-1.5">rumah. Sangat membantu!"</span></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </>
    );
}
