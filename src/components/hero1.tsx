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
    <div className="flex w-full h-[95vh] bg-hero2 justify-center items-center overflow-hidden relative px-4">
      {/* Gradient atas */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col space-y-4 items-center mt-36 w-full max-w-4xl text-center">
        {/* Judul */}
        <div className="px-2">
          <p className={`text-3xl sm:text-4xl md:text-5xl font-bold text-black ${poppins.className}`}>
            <span className="text-black">MyPPDB:</span> Karya Hebat <br />dari Santri Hebat!
          </p>
        </div>

        {/* Deskripsi */}
        <p
          className={`text-sm sm:text-base md:text-lg px-2 md:px-10 ${poppins.className}`}
        >
          <span className="font-semibold">MYPPDB</span> adalah aplikasi web dan mobile buatan siswa SMK Madinatul Quran yang mempermudah proses PPDB online secara cepat, mudah, dan efisien
        </p>

        {/* Tombol Download */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <p className="text-sm font-bold text-black">Get the app :</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="custom1" className="font-sans text-[12px] px-6" size="lg">
              <Image src="/assets/apple.png" width={17} height={17} alt="logo apple" className="mb-1" />
              <span>APP STORE</span>
            </Button>

            <Button variant="custom1" className="font-sans text-[12px] px-5" size="lg">
              <Image src="/assets/google.png" width={17} height={17} alt="logo google" className="mb-1" />
              <span>GOOGLE PLAY</span>
            </Button>
          </div>
        </div>

        {/* Gambar Mockup */}
        <Image
          src="/assets/Mockup.png"
          width={900}
          height={900}
          alt="phone"
          className="w-auto max-w-[80%] md:max-w-[255px] mt-20"
        />

        {/* Gradient bawah */}
        <div className="absolute bottom-[-52px] w-full h-20 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none" />
      </div>
    </div>
  );
}
