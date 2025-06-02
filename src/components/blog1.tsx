import { Poppins } from "next/font/google"

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});
export default function Blog1() {
    return (
        <section>
            <div className="">
                <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
                <div className="w-full h-[60vh] bg-hero2 flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center space-y-10">
                        <p className="text-4xl font-bold text-black">About Developer</p>
                        <p className="text-center w-[75%] font-medium">Kami dari <span className="font-bold">Kelompok 1</span> yang terdiri dari lima orang—<span className="font-bold">Dafizh, Karuu, Arga, Rafkurr, dan Payad</span>. Dalam proyek ini, kami bekerja sama mengembangkan website dan aplikasi PPDB. Masing-masing dari kami ikut andil dalam proses perencanaan, pembuatan, dan pengujian sistem. Dengan semangat tim dan tanggung jawab bersama, kami berharap hasil kerja kami bisa mempermudah proses pendaftaran siswa baru secara digital dan memberikan manfaat nyata di dunia pendidikan.</p>
                    </div>
                    <div className="absolute bottom-[265px] w-full h-9 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none" />
                </div>
            </div>
        </section>
    )
}