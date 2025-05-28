import { Poppins } from "next/font/google";
import { FaBookOpen } from "react-icons/fa";
import { BsFillTerminalFill } from "react-icons/bs";
import { FaNetworkWired } from "react-icons/fa6";
import { LuTrophy } from "react-icons/lu";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function Learn() {
    return (
        <div className="flex flex-col w-full min-h-screen mt-28 space-y-16 px-4">
            {/* Heading */}
            <div className="flex flex-col justify-center items-center space-y-4 text-center">
                <p className={`text-xs font-semibold ${poppins.className}`} id="About">WHAT I LEARN ?</p>
                <p className={`text-2xl font-semibold ${poppins.className}`}>Pembelajaran Yang Di Sediakan</p>
                <p className={`text-gray-500 max-w-2xl font-medium text-xs ${poppins.className}`}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, laboriosam, quam voluptas earum inventore nam asperiores corrupti, illum officiis unde ipsam laborum ut nostrum. Alias facilis incidunt aut tempora explicabo!
                </p>
            </div>

            {/* Grid Content */}
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:space-x-14 space-y-12 md:space-y-0">
                {/* Kiri */}
                <div className="flex flex-col space-y-12 max-w-sm">
                    <div className="flex flex-col space-y-2.5 text-center md:text-left items-center md:items-start">
                        <div className="bg-black h-10 w-10 rounded-lg flex items-center justify-center">
                            <FaBookOpen className="text-white text-base" />
                        </div>
                        <p className={`text-md font-semibold ${poppins.className}`}>Diniyyah & Umum</p>
                        <p className={`text-xs text-gray-500 ${poppins.className}`}>
                            Kurikulum memadukan pelajaran Diniyyah dan Umum.
                            Diniyyah meliputi akidah, ibadah, akhlak, dan kitab.
                            Umum mencakup pelajaran nasional seperti Sains dan Bahasa.
                        </p>
                    </div>

                    <div className="flex flex-col space-y-2.5 text-center md:text-left items-center md:items-start">
                        <div className="bg-black h-10 w-10 rounded-lg flex items-center justify-center">
                            <BsFillTerminalFill className="text-white text-lg" />
                        </div>
                        <p className={`text-md font-semibold ${poppins.className}`}>Software Engineer</p>
                        <p className={`text-xs text-gray-500 ${poppins.className}`}>
                            Kurikulum fokus pada pemrograman dasar dan pengembangan aplikasi.
                            Siswa belajar coding, database, desain UI/UX, dan jaringan.
                            Praktik industri dan proyek nyata disiapkan untuk dunia kerja.
                        </p>
                    </div>
                </div>

                {/* Kanan */}
                <div className="flex flex-col space-y-12 max-w-sm">
                    <div className="flex flex-col space-y-2.5 text-center md:text-right items-center md:items-end">
                        <div className="bg-black h-10 w-10 rounded-lg flex items-center justify-center">
                            <FaNetworkWired className="text-white text-base" />
                        </div>
                        <p className={`text-md font-semibold ${poppins.className}`}>Network Engineer</p>
                        <p className={`text-xs text-gray-500 ${poppins.className}`}>
                            Kurikulum membekali siswa dengan dasar jaringan komputer dan infrastruktur IT.
                            Materi mencakup konfigurasi jaringan, keamanan, dan perangkat keras.
                            Diperkuat dengan praktik langsung dan sertifikasi industri.
                        </p>
                    </div>

                    <div className="flex flex-col space-y-2.5 text-center md:text-right items-center md:items-end">
                        <div className="bg-black h-10 w-10 rounded-lg flex items-center justify-center">
                            <LuTrophy className="text-white text-base" />
                        </div>
                        <p className={`text-md font-semibold ${poppins.className}`}>Program Unggulan</p>
                        <p className={`text-xs text-gray-500 ${poppins.className}`}>
                            Kurikulum memadukan pelajaran Diniyyah dan Umum.
                            Diniyyah meliputi akidah, ibadah, akhlak, dan kitab.
                            Umum mencakup pelajaran nasional seperti Sains dan Bahasa.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
