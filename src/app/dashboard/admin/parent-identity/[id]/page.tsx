'use client'

import React, { use } from 'react'
import Image from 'next/image'
import usePPDB from '@/hooks/use-fromPPDB'
// import { FiCamera } from 'react-icons/fi'
import { FaArrowLeft } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

interface DetailStudentProps {
  params: Promise<{ id: string }>
}

const DetailParents = ({ params }: DetailStudentProps) => {
  const router = useRouter()
  const { id } = use(params)
  const { useGetDetailParent } = usePPDB()
  const { data, isLoading } = useGetDetailParent(id)

  if (isLoading) {
    return <div className='text-center mt-10 text-gray-500'>Loading...</div>
  }

  if (!data) {
    return <div className='text-center mt-10 text-gray-500'>Data not found</div>
  }

  return (
    <div className='max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-10'>
      <div className='w-full h-12'>
        <Button
          className='bg-green-500 border border-green-500 hover:cursor-pointer px-4 hover:bg-green-500'
          onClick={() => router.back()}
        >
          <FaArrowLeft />
          Back
        </Button>
      </div>
      {/* Avatar & Upload */}
      <div className='flex flex-col items-center mb-8'>
        <div className='relative'>
          <Image
            src={data.avatarUrl || ''}
            alt='Avatar'
            width={120}
            height={120}
            className='rounded-full object-cover border border-gray-300'
          />
        </div>
      </div>

      {/* Form Grid */}
      <form className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm'>
        {/* First Name */}
        <div>
          <label className='block font-medium text-gray-700 mb-1'>
            Father Name <span className='text-red-500'>*</span>
          </label>
          <input
            title='input'
            type='text'
            value={data.father.name}
            className='w-full border rounded-md p-2 border-slate-300 outline-none px-3 py-3 focus:border-green-500 focus:bg-green-500/5 cursor-pointer'
            readOnly
          />
        </div>
        {/* Last Name */}
        <div>
          <label className='block font-medium text-gray-700 mb-1'>
            Mother Name <span className='text-red-500'>*</span>
          </label>
          <input
            title='input'
            type='text'
            value={data.mother.name}
            className='w-full border rounded-md p-2 border-slate-300 outline-none px-3 py-3 focus:border-green-500 focus:bg-green-500/5 cursor-pointer'
            readOnly
          />
        </div>
        <div>
          <label className='block font-medium text-gray-700 mb-1'>
            Father Job
          </label>
          <input
            title='input'
            type='email'
            value={data.father.job}
            className='w-full border rounded-md p-2 border-slate-300 outline-none px-3 py-3 focus:border-green-500 focus:bg-green-500/5 cursor-pointer'
            readOnly
          />
        </div>
        {/* Phone */}
        <div>
          <label className='block font-medium text-gray-700 mb-1'>
            Mother Job<span className='text-red-500'>*</span>
          </label>
          <div className='flex items-center gap-2'>
            <input
              title='input'
              type='text'
              value={data.mother.job}
              className='w-full border rounded-md p-2 border-slate-300 outline-none px-3 py-3 focus:border-green-500 focus:bg-green-500/5 cursor-pointer'
              readOnly
            />
          </div>
        </div>
        {/* Gender */}
        <div>
          <label className='block font-medium text-gray-700 mb-1'>
            Father ID
          </label>
          <input
            title='input'
            type='text'
            value={data.father.ID}
            className='w-full border rounded-md p-2 border-slate-300 outline-none px-3 py-3 focus:border-green-500 focus:bg-green-500/5 cursor-pointer'
            readOnly
          />
        </div>
        {/* ID */}
        <div>
          <label className='block font-medium text-gray-700 mb-1'>
            Mother ID
          </label>
          <input
            title='input'
            type='text'
            value={data.mother.ID}
            className='w-full border rounded-md p-2 border-slate-300 outline-none px-3 py-3 focus:border-green-500 focus:bg-green-500/5 cursor-pointer'
            readOnly
          />
        </div>
        <div>
          <label className='block font-medium text-gray-700 mb-1'>
            Father Phone
          </label>
          <input
            title='input'
            type='text'
            value={data.father.phone}
            className='w-full border rounded-md p-2 border-slate-300 outline-none px-3 py-3 focus:border-green-500 focus:bg-green-500/5 cursor-pointer'
            readOnly
          />
        </div>
        <div>
          <label className='block font-medium text-gray-700 mb-1'>
            Mather Phone
          </label>
          <div className='flex items-center gap-2'>
            <input
              title='input'
              type='text'
              value={data.mother.phone}
              className='w-full border rounded-md p-2 border-slate-300 outline-none px-3 py-3 focus:border-green-500 focus:bg-green-500/5 cursor-pointer'
              readOnly
            />
          </div>
        </div>
        
        <div>
          <label className='block font-medium text-gray-700 mb-1'>
            Father Address
          </label>
          <div className='flex items-center gap-2'>
            <input
              title='input'
              type='text'
              value={data.father.address}
              className='w-full border rounded-md p-2 border-slate-300 outline-none px-3 py-3 focus:border-green-500 focus:bg-green-500/5 cursor-pointer'
              readOnly
            />
          </div>
        </div>

        <div>
          <label className='block font-medium text-gray-700 mb-1'>
            Mather Address
          </label>
          <div className='flex items-center gap-2'>
            <input
              title='input'
              type='text'
              value={data.mother.address}
              className='w-full border rounded-md p-2 border-slate-300 outline-none px-3 py-3 focus:border-green-500 focus:bg-green-500/5 cursor-pointer'
              readOnly
            />
          </div>
        </div>
        <div>
          <label className='block font-medium text-gray-700 mb-1'>
            Father Citizenship
          </label>
          <div className='flex items-center gap-2'>
            <input
              title='input'
              type='text'
              value={data.father.citizenship}
              className='w-full border rounded-md p-2 border-slate-300 outline-none px-3 py-3 focus:border-green-500 focus:bg-green-500/5 cursor-pointer'
              readOnly
            />
          </div>
        </div>
        <div>
          <label className='block font-medium text-gray-700 mb-1'>
            Mather Citizenship
          </label>
          <div className='flex items-center gap-2'>
            <input
              title='input'
              type='text'
              value={data.mother.citizenship}
              className='w-full border rounded-md p-2 border-slate-300 outline-none px-3 py-3 focus:border-green-500 focus:bg-green-500/5 cursor-pointer'
              readOnly
            />
          </div>
        </div>
      </form>

      {/* Save Button
      <div className='mt-6 text-right'>
        <button className='bg-blue-600 text-white px-6 py-2 rounded-md'>
          Save Changes
        </button>
      </div> */}
    </div>
  )
}

export default DetailParents
