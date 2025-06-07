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
import { CiSearch } from 'react-icons/ci'
import { FaBan, FaCheck, FaTrash } from 'react-icons/fa'
import { IoEyeSharp } from 'react-icons/io5'

import {
  Pagination,
  PaginationContent,
  // PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import useUsers from '@/hooks/use-users'
import { Badge } from '@/components/ui/badge'
import HandlerUser from '@/lib/handler/user'

const TableUser = ({ data, isLoading }: any) => {
  const { handleBanned, handleActive, handleDelete } = HandlerUser();


  return data.length == 0 ? (
    <div>No data available</div>
  ) : (
    <Table className='h-3/4 overflow-y-auto'>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[30px]'>No</TableHead>
          <TableHead className='w-[200px]'>username</TableHead>
          <TableHead className='w-[50px]'>email</TableHead>
          <TableHead className='w-[200px]'>phone</TableHead>
          <TableHead className='w-[200px]'>Role</TableHead>
          <TableHead className='w-[200px]'>Status</TableHead>
          <TableHead className='w-[200px]'>student Count</TableHead>
          <TableHead className='w-[200px]'>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data &&
          data.map((u: any, i: number) => {
            return (
              <TableRow key={i}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{u?.username}</TableCell>
                <TableCell>{u?.email}</TableCell>
                <TableCell>{u?.phone}</TableCell>
                <TableCell>{u?.role}</TableCell>
                <TableCell>
                  <Badge
                    variant={u?.status == 'ACTIVE' ? 'approved' : 'rejected'}
                  >
                    {u?.status}
                  </Badge>
                </TableCell>
                <TableCell>{u?.Student?.length}</TableCell>
                <TableCell className='flex gap-4 items-center'>
                  <Button
                    variant='default'
                    className='border border-transparent bg-green-500 hover:bg-transparent hover:border-green-500 hover:text-green-500'
                  >
                    <IoEyeSharp />
                  </Button>
                  <Button
                    variant='default'
                    className={`border border-transparent ${
                      u?.status === 'ACTIVE'
                        ? 'bg-red-500 text-white hover:bg-transparent hover:border-red-500 hover:text-red-500'
                        : 'bg-green-500 text-white hover:bg-transparent hover:border-green-500 hover:text-green-500'
                    }`}                    onClick={
                      u?.status == 'ACTIVE'
                        ? () => handleBanned(u?.ID)
                        : () => handleActive(u?.ID)
                    }
                  >
                    {/* <FaBan /> */}
                    {u?.status == 'ACTIVE' ? <FaBan /> : <FaCheck />}
                  </Button>

                  <Button
                    variant='default'
                    className='border border-transparent bg-red-500 hover:bg-transparent hover:border-red-500 hover:text-red-500'
                    onClick={() => handleDelete(u?.ID)}
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

  const { useGetAllUsers } = useUsers()
  const { data = [], isLoading } = useGetAllUsers()

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    setPage(1) 
  }

  const filteredData = data.filter(
    (s: any) =>
      s?.username?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
      s?.email?.toLowerCase().includes(searchTerm?.toLowerCase())
  )

  const totalPages = Math.ceil(filteredData.length / pageSize)
  const paginatedData = filteredData.slice(
    (page - 1) * pageSize,
    page * pageSize
  )
  return (
    <div className='w-full h-full rounded-xl flex flex-col gap-4 px-2 dark:text-[#ABB2BF]'>
      <div className='flex justify-between items-center w-full h-full py-2 gap-4 '>
        <div className='flex items-center gap-2 w-2/3'>
          <h3 className='text-2xl font-bold capitalize w-1/4'>Manage User</h3>
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
            <Select onValueChange={e => setPageSize(parseInt(e))}>
              <SelectTrigger className='w-[80px] '>
                <SelectValue placeholder='10' />
              </SelectTrigger>
              <SelectContent className='outline-none border-1 border-slate-300'>
                <SelectGroup>
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
          {/* <DownloadExcelButton dataRandom={data} dataName={'parents'} /> */}
        </div>
      </div>
      <div className='w-full h-[82vh] bg-white dark:bg-[#282C34] dark:text-[#ABB2BF]  rounded-xl p-4 flex flex-col  justify-between'>
        <TableUser data={paginatedData} isLoading={isLoading} />
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
