/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { use } from 'react'
import Image from 'next/image'
import usePPDB from '@/hooks/use-fromPPDB'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { FaDownload } from 'react-icons/fa'

// import { FiCamera } from 'react-icons/fi'
import { FaArrowLeft } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { studentFieldDummy } from '@/data/studentDummy'
import { parentFields } from '@/data/parentDummy'
import Link from 'next/link'

interface DetailStudentProps {
  params: Promise<{ id: string }>
}

const DetailStudent = ({ params }: DetailStudentProps) => {
  const router = useRouter()
  const { id } = use(params)
  const { useGetDetailStudent } = usePPDB()
  const { data: studentData, isLoading } = useGetDetailStudent(id)
  const studentFields = studentFieldDummy
  const ParentField = parentFields

  const formatLabel = (key: string) => {
    return key
      .replace(/_/g, ' ') // ganti _ dengan spasi
      .replace(/url/i, '') // hilangkan "url"
      .replace(/([a-z])([A-Z])/g, '$1 $2') // camelCase jadi spasi
      .trim()
      .replace(/\b\w/g, char => char.toUpperCase()) // kapitalisasi awal kata
  }
  const hiddenKeys = ['ID', 'createdAt', 'updatedAt', 'status']


  if (isLoading) {
    return <div className='text-center mt-10 text-gray-500'>Loading...</div>
  }

  if (!studentData) {
    return <div className='text-center mt-10 text-gray-500'>Data not found</div>
  }

  return (
    <div className='w-full  p-6 bg-white rounded-2xl shadow-md'>
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
            src={studentData.avatarUrl || ''}
            alt='Avatar'
            width={120}
            height={120}
            className='rounded-full object-cover border border-gray-300'
          />
        </div>
      </div>
      {/* Form Grid Student */}
      <form className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm'>
        {studentFields.map(({ label, key }) => (
          <div key={key}>
            <label className='block font-medium text-gray-700 mb-1'>
              {label}
            </label>
            <input
              title='input'
              type='text'
              value={studentData[key]}
              readOnly
              className='w-full border rounded-md p-2 border-slate-300 outline-none px-3 py-3 focus:border-green-500 focus:bg-green-500/5 cursor-pointer'
            />
          </div>
        ))}

        <div>
          <label className='block font-medium text-gray-700 mb-1'>Gender</label>
          <div className='flex gap-4 mt-2'>
            {['LK', 'PR'].map(gender => (
              <label key={gender} className='flex items-center gap-1'>
                <input
                  type='radio'
                  checked={studentData.gender === gender}
                  readOnly
                />
                {gender}
              </label>
            ))}
          </div>
        </div>

        {/* Address */}
        <div className='md:col-span-2'>
          <label className='block font-medium text-gray-700 mb-1'>
            Residential Address
          </label>
          <textarea
            className='w-full border rounded-md p-2 border-slate-300 outline-none px-3 py-3 focus:border-green-500 focus:bg-green-500/5 cursor-pointer'
            rows={2}
            readOnly
            title='textarea'
          >
            {studentData.address}
          </textarea>
        </div>
      </form>
      <div className='w-full h-12  mt-8 mb-8 flex items-center'>
        <hr className='w-1/2 text-green-500' />
        <p className='mx-2 w-64 text-xl text-center font-semibold capitalize text-green-500'>
          parent identity
        </p>
        <hr className='w-1/2 text-green-500' />
      </div>
      {/* Form Grid Parent */}
      <form className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm'>
        {['father', 'mother'].map(parentType =>
          ParentField.map(({ label, key }) => (
            <div key={`${parentType}-${key}`}>
              <label className='block font-medium text-gray-700 mb-1'>
                {`${
                  parentType.charAt(0).toUpperCase() + parentType.slice(1)
                } ${label}`}
              </label>
              <input
                title='input'
                type='text'
                value={studentData[parentType][key]}
                readOnly
                className='w-full border rounded-md p-2 border-slate-300 outline-none px-3 py-3 focus:border-green-500 focus:bg-green-500/5 cursor-pointer'
              />
            </div>
          ))
        )}
      </form>
      <div className='w-full h-12  mt-8 mb-8 flex items-center'>
        <hr className='w-1/2 text-green-500' />
        <p className='mx-2 w-64 text-xl text-center font-semibold capitalize text-green-500'>
          Document Student
        </p>
        <hr className='w-1/2 text-green-500' />
      </div>

      <div className='overflow-x-auto'>
<Table className='rounded-xl overflow-hidden border border-gray-200 shadow-sm text-sm'>
  <TableHeader className='bg-green-50 text-gray-700'>
    <TableRow className='divide-x divide-gray-200'>
      <TableHead className='w-16 text-center'>No</TableHead>
      <TableHead>Name File</TableHead>
      <TableHead>URL</TableHead>
      <TableHead className='text-center'>Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody className='divide-y divide-gray-100'>
    {Object.entries(studentData.document || {})
      .filter(([key]) => !hiddenKeys.includes(key))
      .map(([key, value]:any, index) => (
        <TableRow
          key={key}
          className='divide-x divide-gray-100 hover:bg-green-50/40 transition-colors'
        >
          <TableCell className='text-center text-gray-700 font-medium'>
            {index + 1}
          </TableCell>
          <TableCell className='text-gray-800 font-medium px-4'>
            {formatLabel(key)}
          </TableCell>
          <TableCell className='text-blue-600 underline break-all px-4 max-w-xs ellipsis-link'>
            <Link href={value || '#'} target='_blank' rel='noopener noreferrer'>
              {value}
            </Link>
          </TableCell>
          <TableCell className='text-center px-4'>
            <Link
              href={value || '#'}
              download
              className='inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-green-500 hover:bg-green-600 text-white rounded-md transition'
            >
              <FaDownload className='text-white' />
              Download
            </Link>
          </TableCell>
        </TableRow>
      ))}
  </TableBody>
</Table>

      </div>
    </div>
  )
}

export default DetailStudent
