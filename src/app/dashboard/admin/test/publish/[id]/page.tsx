/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import React, { use } from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import useTest from '@/hooks/use-test'
import { Button } from '@/components/ui/button'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useRouter } from 'next/navigation'

const DetailPublishPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const router = useRouter()
  const { id } = use(params)
  const { useResultApi } = useTest()
  const { useGetDetailResult } = useResultApi()
  const { data = {} } = useGetDetailResult(id)
  // Temporary dummy data

  return (
    <section className='w-full min-h-screen '>
      <div className='w-full mx-auto bg-white rounded-xl shadow p-6 space-y-6'>
        <div className='w-full h-6'>
          <Button onClick={() => router.back()} className='w-1/10 bg-green-500 capitalize hover:bg-green-500/80'>
            <IoMdArrowRoundBack />
            <span>Back</span>
          </Button>
        </div>
        {/* Header */}
        <div className='mb-4 text-center'>
          <h2 className='text-3xl font-bold text-gray-800'>
            Graduation Result Details
          </h2>
          <p className='text-md text-gray-500'>
            Complete information about the student selection results
          </p>
        </div>

        {/* Student Info */}
        <div className='grid grid-cols-2 gap-4 mt-8'>
          <div>
            <label className='text-sm font-semibold text-green-700'>Name</label>
            <Input
              readOnly
              value={data?.student?.fullName || ""}
              className='mt-1 py-6 '
            />
          </div>
          <div>
            <label className='text-sm font-semibold text-green-700'>NISN</label>
            <Input
              readOnly
              value={data?.student?.NISN}
              className='mt-1 py-6 '
            />
          </div>
          <div>
            <label className='text-sm font-semibold text-green-700'>
              Major
            </label>
            <Input
              readOnly
              value={data?.student?.major}
              className='mt-1 py-6 '
            />
          </div>
          <div>
            <label className='text-sm font-semibold text-green-700'>
              Previous School
            </label>
            <Input
              readOnly
              value={data?.student?.from_school}
              className='mt-1 py-6 '
            />
          </div>
          <div>
            <label className='text-sm font-semibold text-green-700'>Age</label>
            <Input readOnly value={data?.student?.age} className='mt-1 py-6 ' />
          </div>
          <div>
            <label className='text-sm font-semibold text-green-700'>
              Test Type
            </label>
            <Input
              readOnly
              value={data?.student?.testType}
              className='mt-1 py-6 '
            />
          </div>
        </div>

        {/* Announcement */}
        <div className=''>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label className='text-sm font-semibold text-green-700'>
                Title
              </label>
              <Input value={data?.title} readOnly className='py-6' />
            </div>
            <div>
              <label className='text-sm font-semibold text-green-700'>
                Status
              </label>
              <div className='mt-1'>
                <Badge
                  variant='outline'
                  className={
                    data?.status === 'PASSED'
                      ? 'bg-green-100 text-green-700 border-green-400'
                      : 'bg-red-100 text-red-700 border-red-400'
                  }
                >
                  {data?.status}
                </Badge>
              </div>
            </div>
            <div>
              <label className='text-sm font-semibold text-green-700'>
                Average Score
              </label>
              <Input
                value={data?.scoreAvg?.toString()}
                readOnly
                className='py-6'
              />
            </div>
            <div>
              <label className='text-sm font-semibold text-green-700'>
                Grade
              </label>
              <Input value={data?.grade ?? '-'} readOnly className='py-6' />
            </div>
            <div className='col-span-2'>
              <label className='text-sm font-semibold text-green-700'>
                Message
              </label>
              <Input value={data?.message} readOnly className='py-6' />
            </div>
            <div className='col-span-2'>
              <label className='text-sm font-semibold text-green-700'>
                Publish Date
              </label>
              <Input
                value={new Date(data?.publishAt).toLocaleString()}
                readOnly
                className='py-6'
              />
            </div>
          </div>
        </div>

        <div className='flex justify-between items-center my-10'>
          <hr className='border-green-500 w-1/3' />
          <p className='text-green-500 text-xl capitalize font-semibold'>
            All Test Results
          </p>
          <hr className='border-green-500 w-1/3' />
        </div>

        {/* Test Results */}
        <div className='overflow-x-auto rounded-lg border border-green-300 shadow-sm bg-white'>
          <Table className='min-w-full'>
            <TableHeader className='bg-green-50 text-green-900 font-semibold uppercase tracking-wide'>
              <TableRow>
                <TableHead className='px-4 py-3 border-b border-green-200'>
                  Test Title
                </TableHead>
                <TableHead className='px-4 py-3 border-b border-green-200 text-center'>
                  Score
                </TableHead>
                <TableHead className='px-4 py-3 border-b border-green-200 text-center'>
                  Start Time
                </TableHead>
                <TableHead className='px-4 py-3 border-b border-green-200 text-center'>
                  Finish Time
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.studentTests?.length > 0 &&
                data?.studentTests?.map((test: any, idx: any) => (
                  <TableRow
                    key={idx}
                    className='transition-colors hover:bg-green-100 cursor-default'
                  >
                    <TableCell className='px-4 py-3 border-b border-green-200 font-medium text-green-800'>
                      {test.test.title}
                    </TableCell>
                    <TableCell className='px-4 py-3 border-b border-green-200 text-center font-semibold text-green-700'>
                      {test.score ?? '-'}
                    </TableCell>
                    <TableCell className='px-4 py-3 border-b border-green-200 text-center text-green-600'>
                      {new Date(test.startedAt).toLocaleString()}
                    </TableCell>
                    <TableCell className='px-4 py-3 border-b border-green-200 text-center text-green-600'>
                      {test.finishedAt
                        ? new Date(test.finishedAt).toLocaleString()
                        : '-'}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}

export default DetailPublishPage
