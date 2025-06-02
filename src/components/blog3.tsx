import React from 'react'
import Image from 'next/image'

export default function Blog3() {
    return (
        <section>
            <div className="w-full h-[70vh] flex items-center justify-center p-12 mb-52 relative">
                <div className="w-full h-full bg-white">
                    <div className="flex flex-col space-y-4">
                        <p className="text-6xl font-medium">Our Team</p>
                        <p className="w-[45%] font-medium"><span className='font-semibold'>Kelompok 1</span> bertugas mengembangkan tampilan dan fitur utama PPDB.
                            Kami fokus pada desain yang responsif dan pengalaman pengguna yang optimal.</p>
                    </div>
                    <div className="flex space-x-8 mt-10 justify-center">
                        <div className="flex flex-col justify-center items-center space-y-3">
                            <div className="w-60 h-60 bg-hero3 rounded-full mt-28"></div>
                            <div className="flex flex-col justify-center items-center">
                                <p className='font-semibold'>Daffa Hafizh Firdaus</p>
                                <p className='text-sm font-medium text-gray-700'>Fullstack Developer</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-3">
                            <div className="w-60 h-60 bg-gray-600 rounded-full"></div>
                            <div className="flex flex-col justify-center items-center">
                                <p className='font-semibold'>Arga Dida Pratama</p>
                                <p className='text-sm font-medium text-gray-700'>Frontend Developer</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-3">
                            <div className="w-60 h-60 bg-gray-600 rounded-full mt-28"></div>
                            <div className="flex flex-col justify-center items-center">
                                <p className='font-semibold'>Karunia Ibrahim Abdullah</p>
                                <p className='text-sm font-medium text-gray-700'>Mobile Developer</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-3">
                            <div className="w-60 h-60 bg-gray-600 rounded-full"></div>
                            <div className="flex flex-col justify-center items-center">
                                <p className='font-semibold'>Muhammad Raffa Kurniawan</p>
                                <p className='text-sm font-medium text-gray-700'>Mobile Developer</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-3">
                            <div className="w-60 h-60 bg-gray-600 rounded-full mt-28"></div>
                            <div className="flex flex-col justify-center items-center">
                                <p className='font-semibold'>Fayyadh Aqila Authar</p>
                                <p className='text-sm font-medium text-gray-700'>UI/UX Design</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gradasi dari kanan ke kiri */}
                <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-black/20 to-transparent z-10 pointer-events-none" />
                <div className="absolute w-50 h-50 bg-white shadow-2xl flex flex-col justify-center items-center ml-[1375px] mb-[250px] space-y-1">
                    <p className="text-4xl font-bold">Team</p>
                    <p className="text-4xl font-bold">01</p>
                    <p className="text-sm font-semibold">We Are..?</p>
                </div>
            </div>
        </section>
    )
}
