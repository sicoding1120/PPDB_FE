import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-white px-6 md:px-10 lg:px-20 py-12">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12">
                {/* Kiri */}
                <div className="flex flex-col space-y-2 max-w-md">
                    <h2 className="text-lg font-semibold">PPDB Online</h2>
                    <p className="text-sm text-gray-300">
                        Kemudahan pendaftaran online yang aman dan transparan untuk pendidikan masa depan.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-5 mb-4">
                        <a href="#" className="text-sm text-gray-300 hover:text-white transition">About us</a>
                        <a href="#" className="text-sm text-gray-300 hover:text-white transition">Careers</a>
                        <a href="#" className="text-sm text-gray-300 hover:text-white transition">Pers</a>
                        <a href="#" className="text-sm text-gray-300 hover:text-white transition">Blog</a>
                    </div>
                </div>

                {/* Kanan */}
                <div className="space-y-4">
                    <h4 className="text-sm font-semibold">Dapatkan Aplikasinya</h4>
                    <div className="space-y-2 flex flex-col">
                        <Button variant={"custom1"} className="font-sans text-[12px] px-9 gap-2" size={'lg'}>
                            <Image src={'/assets/apple.png'} width={17} height={17} alt="logo apple" className="mb-1" />
                            <span>APP STORE</span>
                        </Button>
                        <Button variant={"custom1"} className="font-sans text-[12px] px-7 gap-2" size={'lg'}>
                            <Image src={'/assets/google.png'} width={17} height={17} alt="logo google play" className="mb-1" />
                            <span>GOOGLE PLAY</span>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Garis Bawah */}
            <div className="mt-12 pt-6 border-t border-white text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-center md:text-left">© 2025 PPDB Online. All rights reserved.</p>
                <div className="flex gap-4">
                    <Link href="/login" className="text-white hover:text-green-600"><FaTwitter className="w-5 h-5" /></Link>
                    <Link href="/login" className="text-white hover:text-green-600"><FaLinkedin className="w-5 h-5" /></Link>
                    <Link href="/login" className="text-white hover:text-green-600"><FaFacebook className="w-5 h-5" /></Link>
                    <Link href="/login" className="text-white hover:text-green-600"><FaInstagram className="w-5 h-5" /></Link>
                    <Link href="/login" className="text-white hover:text-green-600"><FaYoutube className="w-5 h-5" /></Link>
                </div>
            </div>
        </footer>
    );
}
