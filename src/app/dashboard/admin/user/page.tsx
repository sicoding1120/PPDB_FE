/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { siswaData } from '@/data/siswa'
import { CiSearch } from 'react-icons/ci'


const UserPage = () => {
  return (
<div className='w-full h-full rounded-xl flex flex-col gap-4 px-2'>
  <div className='flex justify-between items-center w-full h-full py-2 gap-4 '>
    <div className='flex items-center gap-2 w-2/3'>
      <h3 className='text-2xl font-bold capitalize w-1/5'>Siswa Baru</h3>
      <div className='w-1/2 h-8 rounded-sm bg-black/5 px-2 gap-2 flex items-center ml-4'>
        <CiSearch size={22} />
        <input
          type='text'
          placeholder='search'
          className='focus:outline-none '
          title='search'
        />
      </div>
    </div>
    <div className='w-1/3 items-center flex gap-4 justify-end'>
      <div className='flex gap-2 items-center'>
        <span>Showing</span>
        <Select>
          <SelectTrigger className='w-[80px] '>
            <SelectValue placeholder='10' />
          </SelectTrigger>
          <SelectContent className='outline-none border-1 border-slate-300'>
            <SelectGroup>
              <SelectLabel>Max fill</SelectLabel>
              <SelectItem value='5'>5</SelectItem>
              <SelectItem value='10'>10</SelectItem>
              <SelectItem value='20'>20</SelectItem>
              <SelectItem value='30'>30</SelectItem>
              <SelectItem value='40'>40</SelectItem>
              <SelectItem value='50'>50</SelectItem>
              <SelectItem value='100'>100</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Button>Download excel</Button>
    </div>
  </div>
  <div className='w-full h-[82vh] bg-white rounded-xl p-4 overflow-y-auto'>
    <TablePPDB />
  </div>
</div>
    )
}

const TablePPDB = () => {
  const [selectedIds, setSelectedIds] = useState<number[]>([])

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedIds(siswaData.map(s => s.id)) // semua id masuk
    } else {
      setSelectedIds([]) // kosongkan
    }
  }

  const handleCheckboxChange = (id: number) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }
  const isAllSelected = selectedIds.length === siswaData.length

  console.log(selectedIds)

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[30px]'>
            <input
              type='checkbox'
              title='check'
              onChange={handleSelectAll}
              checked={isAllSelected}
            />
          </TableHead>
          <TableHead className='w-[30px]'>No</TableHead>
          <TableHead className='w-[200px]'>Name</TableHead>
          <TableHead className='w-[50px]'>Age</TableHead>
          <TableHead className='w-[200px]'>School</TableHead>
          <TableHead className='w-[200px]'>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {siswaData.map((_: any, i: number) => (
          <TableRow key={i}>
            <TableCell>
              <input
                type='checkbox'
                title='check'
                checked={selectedIds.includes(_.id as never)}
                onChange={() => handleCheckboxChange(_.id)}
              />
            </TableCell>
            <TableCell>{_.id}</TableCell>
            <TableCell>{_.nama}</TableCell>
            <TableCell>{_.usia}</TableCell>
            <TableCell>{_.asalSekolah}</TableCell>
            <TableCell className='flex gap-4 items-center'>
              <Button
                variant={'default'}
                className='border border-transparent bg-green-500 hover:bg-transparent hover:border-green-500 hover:text-green-500'
              >
                Approve
              </Button>
              <Button
                variant={'default'}
                className='border border-transparent bg-blue-400 hover:bg-transparent hover:border-blue-400 hover:text-blue-400'
              >
                Edit
              </Button>
              <Button
                variant={'default'}
                className='border border-transparent bg-red-500 hover:bg-transparent hover:border-red-500 hover:text-red-500'
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}


export default UserPage