/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useEffect, useState } from 'react'
import { Badge } from './ui/badge'
import { Input } from './ui/input'
import { jwtDecode } from 'jwt-decode'
import useAuthModule from '@/hooks/use-auth'
import { Button } from './ui/button'

export default function ProfileSetting ({ token }: { token: string }) {
  const [userId, setUserId] = useState<string | null>(null)

  useEffect(() => {
    if (!token) return

    try {
      const decoded = jwtDecode<any>(token)
      setUserId(decoded?.ID)
    } catch (err) {
      console.error('Invalid token:', err)
    }
  }, [token])
  const { useProfileAdmin } = useAuthModule()
  const { data, isLoading } = useProfileAdmin(userId as string)

  if (isLoading) {
    return 'Loading....'
  }

  console.log(data)
  return (
    <div className='h-full bg-gray-100 dark:bg-[#1E2127] dark:text-[#ABB2BF] py-4 px-4'>
      <div className=' mx-auto bg-white dark:bg-[#282C34] dark:text-[#ABB2BF] rounded-xl shadow-lg overflow-hidden'>
        <div className='relative'>
          <div className='h-36 bg-cover bg-profile-admin bg-top' />
          <div className='absolute -bottom-10 left-6'>
            <div className='w-24 h-24 bg-white  rounded-full flex items-center justify-center shadow-md'>
              <div className='w-20 h-20 rounded-full bg-green-500 uppercase text-white flex justify-center items-center text-4xl '>
                {data?.username[0]}
              </div>
            </div>
          </div>
        </div>

        <div className='px-6 pt-14 pb-8'>
          <div className='flex justify-between items-center mb-6'>
            <div className='space-y-1'>
              <h2 className='text-xl font-semibold'>
                {data?.username} <span className='text-blue-500'>✔</span>
              </h2>
              <p className='text-sm text-gray-500'>
                {data?.email} · Jonggol - Indonesia
              </p>
              <div className='flex gap-2 text-xs text-gray-600 mt-2'>
                {/* <span className="bg-gray-100 px-2 py-0.5 rounded">Admin</span> */}
                <Badge className='bg-green-500 capitalize'>{data?.role}</Badge>
              </div>
            </div>
            <div className='flex gap-2'></div>
          </div>

          <div className='flex border-b border-green-200 mb-4 space-x-4'>
            {['Profile'].map(tab => (
              <button
                key={tab}
                className={`pb-2 text-sm font-medium border-b-2 border-green-500 ${
                  tab === 'Profile'
                    ? 'border-black text-black dark:text-[#ABB2BF]'
                    : 'border-transparent text-gray-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <form className='space-y-6'>
            <div>
              <label className='block text-sm font-medium text-gray-700 dark:text-[#ABB2BF]'>
                Email
              </label>
              <Input
                type='email'
                defaultValue={data?.email}
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 dark:text-[#ABB2BF]'>
                Username
              </label>
              <Input
                type='text'
                defaultValue={data?.username}
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm'
              />
            </div>

            <div className='flex justify-end gap-2'>
              <Button>save</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
