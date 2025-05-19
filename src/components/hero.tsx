import { Poppins } from "next/font/google";
import { Button } from "./ui/button";
import Image from "next/image";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});
export default function Hero() {
    return (
        <>
            <div className="flex w-full h-screen bg-hero bg-cover bg-no-repeat bg-center mt-12">
                <div className="w-1/2 flex flex-col items-center justify-center space-y-5 mb-12 ml-20">
                    <p className={`text-5xl font-bold w-100 mr-20 text-green-600 ${poppins.className}`}>Your Perfect <span className="text-black">Regsiter</span> APP</p>
                    <p className={`text-base font-medium w-100 mr-[78px] ${poppins.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit.amet consectetur adipisicing elit</p>
                    <div className="flex flex-col space-y-2">
                        <p className={`text-base font-bold mr-[400px] text-green-600 ${poppins.className}`}>Get the app</p>
                        <div className="flex space-x-2.5 justify-center items-center mr-[210px]">
                            <Button variant={"custom1"} className="font-sans text-[12px] px-5">
                                <Image src={'/assets/apple.png'} width={17} height={17} alt="logo apple" className="mb-1"></Image>
                                <span>APP STORE</span>
                            </Button>
                            <Button variant={"custom1"} className="font-sans text-[12px] px-4">
                                <Image src={'/assets/google.png'} width={20} height={20} alt="logo google"></Image>
                                <span>GOOGLE PLAY</span>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col items-center justify-center">
                    <Image src={'/assets/Mockup.png'} width={100} height={100} alt="phone" className="mr-40 mt-12"></Image>
                </div>
            </div>
        </>
    )
}