/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import DashedChart from '@/components/dashed-chart'
import CircleChart from '@/components/circle-chart'
import Counter from '@/components/counter'

import React from 'react'
import ClockComp from '@/components/clock'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import useDashboard from '@/hooks/use-dashboard'
import { IoEyeSharp } from 'react-icons/io5'


const DashboardPage = () => {
  const dataPenerimaanSiswa = [
    { name: 'Lolos', value: 50, fill: '#22C55E' },
    { name: 'Tidak lolos', value: 20, fill: '#EF4444' },
    { name: 'keluar', value: 20, fill: '#FCAA09' }
  ]
  

  const date = new Date()

  const formattedDate = new Intl.DateTimeFormat('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date)

  const { useOverview} = useDashboard()
  const { data} = useOverview();


 

  return (
    <section className='flex flex-col gap-8 h-full'>
      <div className='w-full h-64 bg-dashboard  rounded-2xl bg-center bg-no-repeat bg-cover p-4' data-aos="fade-in">
        <div className='w-full h-full flex flex-col justify-between items-start'>
          <div className='flex flex-col gap-2'>
            <h3 className='font-bold text-2xl capitalize' data-aos="fade-up">My PPDB Overview</h3>
            <p className='text-md capitalize' data-aos="fade-up" data-aos-delay="100">
              result of PPDB TA 25/26 SMK MadinatulQuran
            </p>
          </div>
          <div className='grid grid-cols-4 gap-4 w-full mt-2'>
            <div className='w-full h-28 rounded-xl bg-white/90 flex flex-col justify-center p-4' data-aos="fade-up" data-aos-delay="200">
              <Counter end={data?.studentCount} className={'font-bold text-5xl'} />
              <p className='capitalize text-lg'>PPDB participants</p>
            </div>
            <div className='w-full h-28 rounded-xl bg-white/90 flex flex-col justify-center p-4'data-aos="fade-up" data-aos-delay="300">
              <Counter end={data?.studentSuccess} className={'font-bold text-5xl'} />
              <p className='capitalize text-lg'>accepted</p>
            </div>
            <div className='w-full h-28 rounded-xl bg-white/90 flex flex-col justify-center p-4' data-aos="fade-up" data-aos-delay="400">
              <Counter end={data?.studentFailed} className={'font-bold text-5xl'} />
              <p className='capitalize text-lg'>rejected</p>
            </div>
            <div className='w-full h-28 rounded-xl bg-white/90 flex flex-col justify-center p-4' data-aos="fade-up" data-aos-delay="500">
              <Counter end={data?.studentOut || 0} className={'font-bold text-5xl'} />
              <p className='capitalize text-lg'>resign</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-[40vh] flex gap-4'>
        <div className='w-2/3 h-full flex flex-col gap-4  bg-white rounded-xl p-4' data-aos="fade-in">
          <h3 className='text-2xl font-bold' data-aos="fade-right">Persentase kelulusan</h3>
          <div className='w-full h-full  rounded-xl flex items-center  gap-4'>
            <div className='w-3/4 h-full rounded-xl'>
              <CircleChart data={dataPenerimaanSiswa} />
            </div>
            <div className='w-1/3 h-full rounded-xl flex flex-col gap-4 p-4 justify-center' >
              <div className='flex items-center gap-2' data-aos="fade-left">
                <div className='w-4 h-4 rounded-full bg-green-300'></div>
                <p className='text-sm font-semibold capitalize'>
                  siswa di terima
                </p>
              </div>
              <div className='flex items-center gap-2'data-aos="fade-left" data-aos-delay="100">
                <div className='w-4 h-4 rounded-full bg-red-500'></div>
                <p className='text-sm font-semibold capitalize'>
                  siswa di tolak
                </p>
              </div>
              <div className='flex items-center gap-2' data-aos="fade-left" data-aos-delay="200">
                <div className='w-4 h-4 rounded-full bg-yellow-500'></div>
                <p className='text-sm font-semibold capitalize'>siswa Keluar</p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-1/2 h-full bg-white rounded-xl p-4 flex flex-col gap-4' data-aos="fade-in">
          <h3 className='text-2xl font-bold capitalize' data-aos="fade-right">pendaftaran peserta</h3>
          <DashedChart data={data?.history} />
        </div>
      </div>
      <div className='w-full h-64  flex gap-4 items-center justify-between' >
        <div className='w-2/3 rounded-xl h-full bg-white p-2 'data-aos="fade-right">
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.222248625549!2d107.00567627524073!3d-6.49351999349858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69bdb8f6c50289%3A0xb7a33d4d5721ad5f!2sSMK%20MADINATULQURAN!5e0!3m2!1sid!2sid!4v1747193143724!5m2!1sid!2sid'
            width='600'
            height='450'
            title={'map mq'}
            className='w-full h-full rounded-xl'
          ></iframe>
        </div>
        <div className='w-1/3 rounded-xl h-full bg-white flex justify-center items-center flex-col gap-4 'data-aos="fade-left">
          <ClockComp />
          <p className='text-xl'>{formattedDate}</p>
        </div>
      </div>
      <div className='w-full h-full bg-white rounded-xl p-6 flex flex-col gap-6'data-aos="fade-up">
        <h3 className='text-2xl font-bold capitalize'>Manage student count from school</h3>
        <TableJSPS  data={data?.JSPS}/>
      </div>
      <div className='w-full h-full bg-white rounded-xl p-6 flex flex-col gap-6'data-aos="fade-up">
        <h3 className='text-2xl font-bold capitalize'>Manage student count from Major</h3>
        <TableJSPM data={data?.JSPM}/>
      </div>
      <div className='w-full h-full bg-white rounded-xl p-6 flex flex-col gap-6'data-aos="fade-up">
        <h3 className='text-2xl font-bold capitalize'>Manage student count from Orphan Status</h3>
        <TableJSPOS data={data?.JSPS}/>
      </div>
    </section>
  )
}

 const TableJSPS = ({ data}:any) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[30px]'>No</TableHead>
          <TableHead className='w-[200px]'>School Name</TableHead>
          <TableHead className='w-[100px]'>Student Count</TableHead>
          <TableHead className='w-[100px]'>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data && data.map((d: any, i: number) => (
           <TableRow key={i}>
            <TableCell>{i + 1}</TableCell>
            <TableCell>{d?.schoolName}</TableCell>
            <TableCell>{d?.studentCount}</TableCell>
           <TableCell className='flex gap-4 items-center'>
             <Button
               variant={'default'}
               className='border border-transparent bg-green-500 hover:bg-transparent hover:border-green-500 hover:text-green-500'
             >
                <IoEyeSharp />
             </Button>
           </TableCell>
         </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
 const TableJSPM = ({ data}:any) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[30px]'>No</TableHead>
          <TableHead className='w-[200px]'>Major</TableHead>
          <TableHead className='w-[100px]'>Student Count</TableHead>
          <TableHead className='w-[100px]'>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
      {data && data.map((d: any, i: number) => (
           <TableRow key={i}>
            <TableCell>{i + 1}</TableCell>
            <TableCell>{d?.major}</TableCell>
            <TableCell>{d?.studentCount}</TableCell>
           <TableCell className='flex gap-4 items-center'>
             <Button
               variant={'default'}
               className='border border-transparent bg-green-500 hover:bg-transparent hover:border-green-500 hover:text-green-500'
             >
                <IoEyeSharp />
             </Button>
           </TableCell>
         </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
const TableJSPOS = ({ data}:any) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[30px]'>No</TableHead>
          <TableHead className='w-[200px]'>OrphanStatus</TableHead>
          <TableHead className='w-[100px]'>Student Count</TableHead>
          <TableHead className='w-[100px]'>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
      {data && data.map((d: any, i: number) => (
           <TableRow key={i}>
            <TableCell>{i + 1}</TableCell>
            <TableCell>{d?.orphanStatus}</TableCell>
            <TableCell>{d?.studentCount}</TableCell>
           <TableCell className='flex gap-4 items-center'>
             <Button
               variant={'default'}
               className='border border-transparent bg-green-500 hover:bg-transparent hover:border-green-500 hover:text-green-500'
             >
                <IoEyeSharp />
             </Button>
           </TableCell>
         </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}


export default DashboardPage
