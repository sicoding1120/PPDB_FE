'use client'
import React from 'react'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})
export const Login = () => {
    return (
        <>
            <div className="w-full h-full flex">
                <div className="w-[50%] h-screen flex justify-center items-center p-4">
                    <div className="w-full h-full bg-login rounded-lg flex justify-center items-center">
                        <Image src={'/assets/login.png'} width={300} height={300} alt="phone" className="mt-14" />
                        <div className="absolute">
                            <Image src={'/assets/Subtract1.png'} width={100} height={100} alt="subtrak" className='mb-[510px] mr-[500px]' />
                        </div>
                        <div className="absolute">
                            <Image src={'/assets/Subtract2.png'} width={100} height={100} alt="subtrak" className='mt-[540px] ml-[460px]' />
                        </div>
                    </div>
                </div>
                <div className="w-[70%] h-screen p-32">
                    <div className="w-full h-full flex flex-col justify-center bg-white space-y-10">
                        <div className="flex justify-center items-center">
                            <p className={`text-3xl font-semibold ${poppins.className} text-color1`}>Welcome Back Admin!</p>
                        </div>
                        <div className="space-y-2">
                            <p className={`text-2xl font-bold ${poppins.className} text-color1 `}>Login</p>
                            <p className={`${poppins.className} text-gray-400`}>Silahkan Login Dengan Akun Anda!</p>
                        </div>
                        <div className="w-full space-y-3">
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" id="email" placeholder="Email" />
                        </div>
                        <div className="w-full space-y-3">
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" placeholder="Password" />
                            <div className="">
                                <HoverCard>
                                    <HoverCardTrigger asChild>
                                        <Button variant="link" className={`${poppins.className} text-xs text-gray-500 font-light`}>Lupa Password ?</Button>
                                    </HoverCardTrigger>
                                    <HoverCardContent className="w-80">
                                        <div className="flex justify-between space-x-4">
                                            <Avatar>
                                                <AvatarImage src="https://github.com/vercel.png" />
                                                <AvatarFallback>VC</AvatarFallback>
                                            </Avatar>
                                            <div className="space-y-1">
                                                <h4 className="text-sm font-semibold">@nextjs</h4>
                                                <p className="text-sm">
                                                    The React Framework – created and maintained by @vercel.
                                                </p>
                                            </div>
                                        </div>
                                    </HoverCardContent>
                                </HoverCard>
                            </div>

                            <div className="">
                                <Button className={`${poppins.className} bg-login text-white hover:bg-color2 w-full`}>Login</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login