/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
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
// import { siswaData } from '@/data/siswa'
import { CiSearch } from 'react-icons/ci'
import { FaTrash } from 'react-icons/fa'
import { IoEyeSharp } from 'react-icons/io5'
import { useRouter } from 'next/navigation'

import usePPDB from '@/hooks/use-fromPPDB'
import {
  Pagination,
  PaginationContent,
  // PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import DownloadExcelButton from '@/components/DownloadExcelBtn'

export const TablePPDB = ({ data, isLoading }: any) => {
  const router = useRouter()
  const { useDeleteStudent } = usePPDB()
  const mutate = useDeleteStudent()

  // const [selectedIds, setSelectedIds] = useState<string[]>([])

  // const handleSelectAll = () => {
  //   if (selectedIds.length === data.length) {
  //     setSelectedIds([])
  //   } else {
  //     setSelectedIds(data.map((student: any) => student?.id?.toString()))
  //   }
  // }

  // const handleCheckboxChange = (id: string) => {
  //   setSelectedIds(prev =>
  //     prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
  //   )
  // }

  // const isAllSelected = selectedIds.length === data.length

  return data.length == 0 ? (
    <div>No data available</div>
  ) : (
    <Table className='h-3/4 overflow-y-auto'>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[30px]'>
            <input
              type='checkbox'
              title='Select All'
              // onChange={handleSelectAll}
              // checked={isAllSelected}
            />
          </TableHead>
          <TableHead className='w-[30px]'>No</TableHead>
          <TableHead className='w-[200px]'>Student Name</TableHead>
          <TableHead className='w-[50px]'>Father name</TableHead>
          <TableHead className='w-[200px]'>Father Job</TableHead>
          <TableHead className='w-[200px]'>Mother Name</TableHead>
          <TableHead className='w-[200px]'>Mother Job</TableHead>
          <TableHead className='w-[200px]'>School</TableHead>
          <TableHead className='w-[200px]'>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data &&
          data.map((student: any, i: number) => {
            return (
              <TableRow key={i}>
                <TableCell>
                  <input
                    type='checkbox'
                    title='Select Row'
                    // checked={selectedIds.includes(student.id.toString())}
                    // onChange={() => handleCheckboxChange(student.id.toString())}
                  />
                </TableCell>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{student.fullName}</TableCell>
                <TableCell>{student.father.name}</TableCell>
                <TableCell>{student.father.job}</TableCell>
                <TableCell>{student.mother.name}</TableCell>
                <TableCell>{student.mother.job}</TableCell>
                <TableCell>{student.from_school}</TableCell>
                <TableCell className='flex gap-4 items-center'>
                  <Button
                    variant='default'
                    className='border border-transparent bg-green-500 hover:bg-transparent hover:border-green-500 hover:text-green-500'
                    onClick={() =>
                      router.push(
                        `/dashboard/admin/parent-identity/${student.ID}`
                      )
                    }
                  >
                    <IoEyeSharp />
                  </Button>

                  <Button
                    variant='default'
                    className='border border-transparent bg-red-500 hover:bg-transparent hover:border-red-500 hover:text-red-500'
                    onClick={() => mutate.deleteStudent(student.ID)}
                  >
                    <FaTrash />
                  </Button>
                </TableCell>
              </TableRow>
            )
          })}
      </TableBody>
    </Table>
  )
}

const parentIdentity = () => {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [searchTerm, setSearchTerm] = useState('')

  const [filter, setFilter] = useState([])

  const { useParents } = usePPDB()
  const { data = [], isLoading } = useParents()

  console.log(data)
  console.log(isLoading)
  console.log(pageSize);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    setPage(1) // reset ke page 1 saat search
  }

  const filteredData = data.filter(
    (s: any) =>
      s.father.name?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
      s.father.job?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
      s.mother.job?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
      s.mother.name?.toLowerCase().includes(searchTerm?.toLowerCase())
  )

  const totalPages = Math.ceil(filteredData.length / pageSize)
  const paginatedData = filteredData.slice(
    (page - 1) * pageSize,
    page * pageSize
  )
  return (
    <div className='w-full h-full rounded-xl flex flex-col gap-4 px-2'>
      <div className='flex justify-between items-center w-full h-full py-2 gap-4 '>
        <div className='flex items-center gap-2 w-2/3'>
          <h3 className='text-2xl font-bold capitalize w-1/4'>
            student parents
          </h3>
          <div className='w-1/2 h-8 rounded-sm bg-black/5 px-2 gap-2 flex items-center ml-4'>
            <CiSearch size={22} />
            <input
              type='text'
              placeholder='search'
              className='focus:outline-none '
              title='search'
              onChange={e => handleSearch(e)}
            />
          </div>
        </div>
        <div className='w-1/3 items-center flex gap-4 justify-end'>
          <div className='flex gap-2 items-center'>
            <span>Showing</span>
            <Select onValueChange={(e) => setPageSize(parseInt(e))}>
              <SelectTrigger className='w-[80px] ' >
                <SelectValue placeholder='10' />
              </SelectTrigger>
              <SelectContent className='outline-none border-1 border-slate-300' >
                <SelectGroup >
                  <SelectLabel>Max fill</SelectLabel>
                  <SelectItem value='1'>1</SelectItem>
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
          <DownloadExcelButton dataRandom={data} dataName={'parents'} />
        </div>
      </div>
      <div className='w-full h-[82vh] bg-white rounded-xl p-4 flex flex-col  justify-between'>
        <TablePPDB data={paginatedData} isLoading={isLoading} />
        <div className='w-full'>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href='#'
                  onClick={() => page > 1 && setPage(page - 1)}
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    href='#'
                    isActive={page === i + 1}
                    onClick={() => setPage(i + 1)}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  href='#'
                  onClick={() => page < totalPages && setPage(page + 1)}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  )
}

export default parentIdentity
