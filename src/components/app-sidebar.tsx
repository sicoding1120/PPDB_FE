'use client'
import {
  Sidebar,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem
} from '@/components/ui/sidebar'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@radix-ui/react-collapsible'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { FiHome } from 'react-icons/fi'
import { FiBookOpen } from 'react-icons/fi'
import { RiVerifiedBadgeLine } from 'react-icons/ri'
import { PiHandSwipeRight } from 'react-icons/pi'
import { MdPublishedWithChanges } from 'react-icons/md'
import Image from 'next/image'

export function AppSidebar () {
  return (
    <Sidebar className='border-slate-300 b px-2'>
      <SidebarHeader>
        <SidebarGroup className='mb-4'>
          <div className='flex items-center'>
            <Image
              src={'/logo_smk_mq.png'}
              alt=''
              width={300}
              height={300}
              className='w-12 h-12'
            />
            <SidebarGroupLabel className='text-2xl font-bold'>
              My PPDB
            </SidebarGroupLabel>
          </div>
        </SidebarGroup>
      </SidebarHeader>
      <OverviewSection />
      <ManagePPDBSection />
      <VerificationPaymentSection />
      <SelectionPPDB />
      <PublishPPDB />
      <User />
      <SidebarFooter />
    </Sidebar>
  )
}

export const OverviewSection = () => {
  return (
    <SidebarMenu className='mt-2'>
      <Link href={'/dashboard/admin/'}>
        <SidebarMenuButton className='capitalize text-md hover:bg-green-500/10 hover:text-green-500/90 transition-colors'>
          <FiHome />
          <span>Overview</span>
          {/* <Link href={'/dashboard/admin/'}>Overview</Link> */}
        </SidebarMenuButton>
      </Link>
    </SidebarMenu>
  )
}

export const ManagePPDBSection = () => {
  return (
    <SidebarMenu className='mt-2'>
      <Collapsible defaultOpen className='group/collapsible'>
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton
              className='flex items-center justify-between w-full text-md hover:bg-green-500/10 hover:text-green-500/90 transition-colors'
              data-collapsible-trigger
            >
              <div className='flex gap-2 items-center'>
                <FiBookOpen />
                <span>Form PPDB</span>
              </div>

              <ChevronRight
                className='h-4 w-4 transition-transform duration-200'
                data-collapsible-icon
              />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              <Link href={'/dashboard/admin/student-identity'}>
                <SidebarMenuSubItem className='cursor-pointer text-sm mt-2 hover:bg-green-500/10 hover:text-green-500/90 transition-colors py-1 px-2'>
                  Student Identity
                </SidebarMenuSubItem>
              </Link>
              <Link href={'/dashboard/admin/parent-identity'}>
                <SidebarMenuSubItem className='cursor-pointer text-sm mt-2 hover:bg-green-500/10 hover:text-green-500/90 transition-colors py-1 px-2'>
                  Parent Identity
                </SidebarMenuSubItem>
              </Link>
              <Link href={'/dashboard/admin/confirm-doc'}>
                <SidebarMenuSubItem className='cursor-pointer text-sm mt-2 hover:bg-green-500/10 hover:text-green-500/90 transition-colors py-1 px-2'>
                  Confirm Doc
                </SidebarMenuSubItem>
              </Link>
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    </SidebarMenu>
  )
}

export const VerificationPaymentSection = () => {
  return (
    <SidebarMenu className='mt-2'>
      <Link href={'/dashboard/admin/verification-payment'}>
        <SidebarMenuButton className='capitalize text-md hover:bg-green-500/10 hover:text-green-500/90 transition-colors'>
          <RiVerifiedBadgeLine />
          <span>verification payment</span>
        </SidebarMenuButton>
      </Link>
    </SidebarMenu>
  )
}

export const SelectionPPDB = () => {
  return (
    <SidebarMenu className='mt-2'>
      <Collapsible defaultOpen className='group/collapsible'>
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton
              className='flex items-center justify-between w-full text-md hover:bg-green-500/10 hover:text-green-500/90 transition-colors'
              data-collapsible-trigger
            >
              <div className='flex gap-2 items-center'>
                <PiHandSwipeRight />
                <span>Date Test</span>
              </div>

              <ChevronRight
                className='h-4 w-4 transition-transform duration-200'
                data-collapsible-icon
              />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              <Link href={'/dashboard/admin/date-test/online'}>
                <SidebarMenuSubItem className='cursor-pointer text-sm mt-2 hover:bg-green-500/10 hover:text-green-500/90 transition-colors py-1 px-2'>
                  Online
                </SidebarMenuSubItem>
              </Link>
              <Link href={'/dashboard/admin/date-test/offline'}>
                <SidebarMenuSubItem className='cursor-pointer text-sm mt-2 hover:bg-green-500/10 hover:text-green-500/90 transition-colors py-1 px-2'>
                  Offline
                </SidebarMenuSubItem>
              </Link>
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    </SidebarMenu>
  )
}

export const PublishPPDB = () => {
  return (
    <SidebarMenu className='mt-2'>
      <Collapsible defaultOpen className='group/collapsible'>
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton
              className='flex items-center justify-between w-full text-md hover:bg-green-500/10 hover:text-green-500/90 transition-colors'
              data-collapsible-trigger
            >
              <div className='flex gap-2 items-center'>
                <PiHandSwipeRight />
                <span>Test</span>
              </div>

              <ChevronRight
                className='h-4 w-4 transition-transform duration-200'
                data-collapsible-icon
              />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              <SidebarMenuSubItem className='cursor-pointer text-sm mt-2 hover:bg-green-500/10 hover:text-green-500/90 transition-colors py-1 px-2'>
                <Link href={'/dashboard/admin/test/show'}>show</Link>
              </SidebarMenuSubItem>
              <Link href={'/dashboard/admin/test/publish'}>
                <SidebarMenuSubItem className='cursor-pointer text-sm mt-2 hover:bg-green-500/10 hover:text-green-500/90 transition-colors py-1 px-2'>
                  publish
                </SidebarMenuSubItem>
              </Link>
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    </SidebarMenu>
  )
}
export const User = () => {
  return (
    <SidebarMenu className='mt-2'>
      <Link href={'/dashboard/admin/user'}>
        <SidebarMenuButton className='capitalize text-md hover:bg-green-500/10 hover:text-green-500/90 transition-colors'>
          <MdPublishedWithChanges />
          <span>user</span>
        </SidebarMenuButton>
      </Link>
    </SidebarMenu>
  )
}
