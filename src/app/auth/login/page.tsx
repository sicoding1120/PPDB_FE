
'use client'
import { useFormik, Form, FormikProvider} from "formik";
import React from 'react'
import Image from 'next/image'
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

import * as yup from "yup";
import useAuthModule, { LoginPayload } from "@/hooks/use-auth";

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .nullable()
    .default("")
    .email("Gunakan format email")
    .required("Wajib isi"),
  password: yup
    .string()
    .nullable()
    .default("")
    .required("Wajib isi")
    .min(8, "Minimal 8 karakater"),
});

const LoginPage = () => {
    const { useLoginAdmin } = useAuthModule()
    const { mutate } = useLoginAdmin()
    const formik = useFormik<LoginPayload>({
        initialValues: LoginSchema.getDefault(),
        validationSchema: LoginSchema,
        enableReinitialize: true,
        onSubmit: (payload) => {
            console.log(payload,'isi payload')
            mutate(payload);
        },
    });
    

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
                    <div className="w-full h-full flex flex-col justify-center bg-white dark:bg-[#282C34] dark:text-[#ABB2BF] px-4 rounded-xl space-y-10">
                        <div className="flex justify-center items-center">
                            <p className={`text-3xl font-semibold  text-color1`}>Welcome Back Admin!</p>
                        </div>
                        <div className="space-y-2">
                            <p className={`text-2xl font-bold  text-color1 `}>Login</p>
                            <p className={` text-gray-400`}>Silahkan Login Dengan Akun Anda!</p>
                        </div>
                        <FormikProvider value={formik}>
                            <Form onSubmit={formik.handleSubmit} className="space-y-5">
                                <div className="w-full space-y-3">
                                    <Label htmlFor="email" >Email</Label>
                                    <Input type="email" id="email" placeholder="Email" onChange={(e) => {
                                        formik.setFieldValue('email', e.target.value)
                                    }}/>
                                </div>
                                <div className="w-full space-y-3">
                                    <Label htmlFor="password">Password</Label>
                                    <Input type="password" id="password" placeholder="Password" onChange={(e) => {
                                        formik.setFieldValue('password', e.target.value)
                                    }}/>
                                    <div className="">
                                        <HoverCard>
                                            <HoverCardTrigger asChild>
                                                <Button variant="link" className={` text-xs text-gray-500 font-light`}>Lupa Password ?</Button>
                                            </HoverCardTrigger>
                                            <HoverCardContent className="w-80">
                                                <div className="flex justify-between space-x-4">
                                                    <Avatar>
                                                        <AvatarImage src="https://i.pinimg.com/736x/94/75/64/9475646481868f0dffd9bfd73ad2fabe.jpg" />
                                                        <AvatarFallback>VC</AvatarFallback>
                                                    </Avatar>
                                                    <div className="space-y-1">
                                                        <h4 className="text-sm font-semibold">Lupa Passoword ?</h4>
                                                        <p className={`text-sm `}>
                                                            Segera Hubungi <span className={`font-semibold `}>Project Manager</span> Untuk Mendapatkan Password.
                                                        </p>
                                                    </div>
                                                </div>
                                            </HoverCardContent>
                                        </HoverCard>
                                    </div>

                                    <div className="">
                                        <Button type="submit" className={` bg-login text-white hover:bg-color2 w-full`}>Login</Button>
                                    </div>
                                </div>
                            </Form>
                        </FormikProvider>
                    </div>
                </div>
            </div>
        </>
    )
}


export default LoginPage