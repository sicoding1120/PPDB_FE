import { Poppins } from "next/font/google";
import { Button } from "./ui/button";
import Image from "next/image";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});
export default function Hero1() {
    return (
        <>
            <div className="flex w-full h-screen bg-hero2 justify-center items-center overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
                <div className="flex flex-col space-y-3 items-center mt-36">
                    <div className="flex  items-center justify-center w-1/2 py-4">
                        <p className={`text-5xl font-bold w-300 text-black ${poppins.className} text-center`}><span className="text-black">MyPPDB:</span> Karya Hebat dari <span className="">Santri Hebat!</span></p>
                    </div>
                    <p className={`text-md text-center w-1/2 ${poppins.className}`}><span className="font-semibold">MYPPDB</span> adalah aplikasi web dan mobile buatan siswa SMK Madinatul Quran yang mempermudah proses PPDB online secara cepat, mudah, dan efisien</p>
                    <div className="flex flex-col items-center justify-center space-y-3">
                        <p className="text-sm font-bold text-black">Get the app : </p>
                        <div className="flex space-x-5 mb-3">
                            <Button variant={"custom1"} className="font-sans text-[12px] px-7" size={'lg'}>
                                <Image src={'/assets/apple.png'} width={17} height={17} alt="logo apple" className="mb-1"></Image>
                                <span>APP STORE</span>
                            </Button>

                            <Button variant={"custom1"} className="font-sans text-[12px] px-5" size={'lg'}>
                                <Image src={'/assets/google.png'} width={17} height={17} alt="logo apple" className="mb-1"></Image>
                                <span>GOOGLE PLAY</span>
                            </Button>
                        </div>
                    </div>
                    <Image src={'/assets/Mockup.png'} width={255} height={255} alt="phone" className=""></Image>
                    <div className="absolute bottom-[-52px] w-full h-20 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none"></div>
                </div>
            </div>
        </>
    )
}