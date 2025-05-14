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

export function AppSidebar () {
  return (
    <Sidebar>
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
        <SidebarMenuButton className='capitalize text-md'>
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
              className='flex items-center justify-between w-full text-md'
              data-collapsible-trigger
            >
              <span>Manage New PPDB</span>

              <ChevronRight
                className='h-4 w-4 transition-transform duration-200'
                data-collapsible-icon
              />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              <SidebarMenuSubItem className='cursor-pointer text-sm mt-2'>
                <Link href={'/dashboard/admin/form-ppdb'}>Form PPDB</Link>
              </SidebarMenuSubItem>
              <SidebarMenuSubItem className='cursor-pointer text-sm mt-2'>
                <Link href={'/dashboard/admin/validation-doc'}>Validation Doc</Link>
              </SidebarMenuSubItem>
              <SidebarMenuSubItem className='cursor-pointer text-sm mt-2'>
                <Link href={"/dashboard/admin/confirm-doc"}>Confirm Doc</Link>
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
        <SidebarMenuButton className='capitalize text-md'>
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
              className='flex items-center justify-between w-full text-md'
              data-collapsible-trigger
            >
              <span>Selection PPDB</span>

              <ChevronRight
                className='h-4 w-4 transition-transform duration-200'
                data-collapsible-icon
              />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              <SidebarMenuSubItem className='cursor-pointer text-sm mt-2'>
               <Link href={"/dashboard/admin/selection-ppdb/online"}>Online</Link>
              </SidebarMenuSubItem>
              <SidebarMenuSubItem className='cursor-pointer text-sm mt-2'>
                <Link href={'/dashboard/admin/selection-ppdb/offline'}>Offline</Link>
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
        <SidebarMenuButton className='capitalize text-md'>
          <Link href={'/dashboard/admin/publish-result'}>
            Publish result PPDB
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
