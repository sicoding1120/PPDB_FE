import { Poppins } from 'next/font/google'
import { FaUser } from 'react-icons/fa'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export default function Client () {
  return (
    <div className='w-full flex flex-col justify-center items-center mt-40 space-y-12 mb-36 px-4 sm:px-8'>
      {/* Title Section */}
      <div className='flex flex-col justify-center items-center space-y-6 text-center max-w-3xl'>
        <div className='w-10 h-10 bg-black rounded-md flex items-center justify-center'>
          <FaUser className='text-white' />
        </div>
        <p className={`text-3xl font-semibold ${poppins.className}`}>
          What Clients Say
        </p>
        <p className={`text-gray-500 ${poppins.className}`}>
          Dengarkan apa kata para orang tua dan calon peserta didik tentang
          pengalaman mereka menggunakan aplikasi PPDB kami. Kami berkomitmen
          memberikan proses pendaftaran yang mudah, cepat, dan transparan demi
          mendukung masa depan pendidikan yang lebih baik.
        </p>
      </div>

      {/* Marquee 1 */}
      <Marquee direction='left' speed={40} pauseOnHover>
        <div className='flex space-x-4'>
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className='min-w-[280px] sm:min-w-[320px] max-w-sm h-auto flex flex-col sm:flex-row border border-gray-300 rounded-lg bg-white shadow-md mx-4 p-4'
            >
              <div className='flex flex-col items-center text-center sm:w-40 sm:mr-4 mb-4 sm:mb-0'>
                <Image
                  src='https://i.pinimg.com/736x/d0/cb/d1/d0cbd1380c72ddf3750c896433b2dea1.jpg'
                  width={40}
                  height={40}
                  alt='user'
                  className='h-10 w-10 bg-black rounded-full object-cover'
                />
                <p
                  className={`text-sm font-semibold mt-2 ${poppins.className}`}
                >
                  Abu Fulan
                </p>
                <p className={`text-xs text-gray-500 ${poppins.className}`}>
                  Wali Santri
                </p>
              </div>
              <div className='flex items-center justify-center text-center'>
                <p className='text-base italic'>{`"Pendaftarannya mudah dan bisa dari rumah. Sangat membantu!"`}</p>
              </div>
            </div>
          ))}
        </div>
      </Marquee>

      {/* Marquee 2 */}
      <Marquee direction='right' speed={40} pauseOnHover>
        <div className='flex space-x-4'>
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className='min-w-[280px] sm:min-w-[320px] max-w-sm h-auto flex flex-col sm:flex-row border border-gray-300 rounded-lg bg-white shadow-md mx-4 p-4'
            >
              <div className='flex flex-col items-center text-center sm:w-40 sm:mr-4 mb-4 sm:mb-0'>
                <Image
                  src='https://i.pinimg.com/736x/d0/cb/d1/d0cbd1380c72ddf3750c896433b2dea1.jpg'
                  width={40}
                  height={40}
                  alt='user'
                  className='h-10 w-10 bg-black rounded-full object-cover'
                />
                <p
                  className={`text-sm font-semibold mt-2 ${poppins.className}`}
                >
                  Abu Fulan
                </p>
                <p className={`text-xs text-gray-500 ${poppins.className}`}>
                  Wali Santri
                </p>
              </div>
              <div className='flex items-center justify-center text-center'>
                <p className='text-base italic'>{`'Pendaftarannya mudah dan bisa dari rumah. Sangat membantu!'`}</p>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  )
}
