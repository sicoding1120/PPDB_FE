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

export function AppSidebar () {
  return (
    <Sidebar className='border-slate-300 b px-2'>
      <SidebarHeader>
        <SidebarGroup>
          <SidebarGroupLabel className='text-xl'>My PPDB</SidebarGroupLabel>
        </SidebarGroup>
      </SidebarHeader>
      <OverviewSection />
      <ManagePPDBSection />
      <VerificationPaymentSection />
      <SelectionPPDB />
      <PublishPPDB />
      <SidebarFooter />
    </Sidebar>
  )
}

export const OverviewSection = () => {
  return (
    <SidebarMenu className='mt-2'>
      <SidebarMenuItem>
        <SidebarMenuButton className='capitalize text-md hover:bg-green-500/10 hover:text-green-500/90 transition-colors'>
          <FiHome />

          <Link href={'/dashboard/admin/'}>Overview</Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
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
                <span>Manage New PPDB</span>
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
                <Link href={'/dashboard/admin/form-ppdb'}>Form PPDB</Link>
              </SidebarMenuSubItem>
              <SidebarMenuSubItem className='cursor-pointer text-sm mt-2 hover:bg-green-500/10 hover:text-green-500/90 transition-colors py-1 px-2'>
                <Link href={'/dashboard/admin/validation-doc'}>
                  Validation Doc
                </Link>
              </SidebarMenuSubItem>
              <SidebarMenuSubItem className='cursor-pointer text-sm mt-2 hover:bg-green-500/10 hover:text-green-500/90 transition-colors py-1 px-2'>
                <Link href={'/dashboard/admin/confirm-doc'}>Confirm Doc</Link>
              </SidebarMenuSubItem>
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
      <SidebarMenuItem>
        <SidebarMenuButton className='capitalize text-md hover:bg-green-500/10 hover:text-green-500/90 transition-colors'>
          <RiVerifiedBadgeLine />
          <Link href={'/dashboard/admin/verification-payment'}>
            verification payment
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
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
                <span>Selection PPDB</span>
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
                <Link href={'/dashboard/admin/selection-ppdb/online'}>
                  Online
                </Link>
              </SidebarMenuSubItem>
              <SidebarMenuSubItem className='cursor-pointer text-sm mt-2 hover:bg-green-500/10 hover:text-green-500/90 transition-colors py-1 px-2'>
                <Link href={'/dashboard/admin/selection-ppdb/offline'}>
                  Offline
                </Link>
              </SidebarMenuSubItem>
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
      <SidebarMenuItem>
        <SidebarMenuButton className='capitalize text-md hover:bg-green-500/10 hover:text-green-500/90 transition-colors'>
        <MdPublishedWithChanges />
          <Link href={'/dashboard/admin/publish-result'}>
            Publish result PPDB
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
