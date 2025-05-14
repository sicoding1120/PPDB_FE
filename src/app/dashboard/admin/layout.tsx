"use client"
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import { CiSearch } from 'react-icons/ci'

import { FiMail } from 'react-icons/fi'
import { Avatar } from '@/components/ui/avatar'
import AOSInit from '@/lib/aos'



export default function DashboardLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
     <AOSInit/>
      <AppSidebar/>
      <main className='w-full bg-slate-100'>
        <div className='w-full px-2 h-12 border-b border-slate-300  py-2  bg-white flex gap-2 items-center justify-between'>
          <div className='flex items-center gap-2 w-2/3'>
            <SidebarTrigger />
            <p className='text-xl font-semibold'>Dashboard</p>
            <div className='w-full h-8 rounded-sm bg-black/5 px-2 gap-2 flex items-center ml-4'>
              <CiSearch size={22} />
              <input
                type='text'
                placeholder='search'
                className='focus:outline-none w-full'
                title='search'
              />
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <FiMail size={20}  className='cursor-pointer'/>
            <Avatar className='flex items-center bg-black/5 justify-center'>
              <p>US</p>
            </Avatar>
          </div>
        </div>
        <section className='px-4 py-4'>{children}</section>
      </main>
    </SidebarProvider>
  )
}
