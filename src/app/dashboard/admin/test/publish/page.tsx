'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
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

import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaGlobe } from 'react-icons/fa'
import { IoEyeSharp } from 'react-icons/io5'
// import DownloadExcelButton from '@/components/DownloadExcelBtn'
import {
  Pagination,
  PaginationContent,
  // PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import useTest from '@/hooks/use-test'
import { Badge } from '@/components/ui/badge'
import HandlerResult from '@/lib/handler/result'
import { useRouter } from 'next/navigation'

const TablePPDB = ({ data }: any) => {
  const router =useRouter()
  const { handlePublish } = HandlerResult()
  return data.length == 0 ? (
    <div>No data available</div>
  ) : (
    <Table className='h-3/4 overflow-y-auto'>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[30px]'>No</TableHead>
          <TableHead className='w-[200px]'>student Name</TableHead>
          <TableHead className='w-[200px]'>title</TableHead>
          <TableHead className='w-[50px]'>message</TableHead>
          <TableHead className='w-[200px]'>score Avg</TableHead>
          <TableHead className='w-[200px]'>Status</TableHead>
          <TableHead className='w-[200px]'>Published</TableHead>
          <TableHead className='w-[200px]'>publish date</TableHead>
          <TableHead className='w-[200px]'>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data &&
          data.map((r: any, i: number) => {
            return (
              <TableRow key={i}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{r.student.fullName}</TableCell>
                <TableCell>{r.title}</TableCell>
                <TableCell className='ellipsis-link'>{r.message}</TableCell>
                <TableCell>{r.scoreAvg}</TableCell>
                <TableCell>
                  <Badge
                    variant={r.status == 'PASSED' ? 'approved' : 'destructive'}
                  >
                    {r.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={r.isPublished == true ? 'approved' : 'destructive'}
                  >
                    {`${r.isPublished}`}
                  </Badge>
                </TableCell>
                <TableCell>{r.publishAt || '-'}</TableCell>
                <TableCell className='flex gap-4 items-center'>
                  <Button
                    onClick={() => handlePublish(r?.ID)}
                    disabled={r.isPublished}
                    variant='default'
                    className='border border-transparent bg-green-500 hover:bg-transparent hover:border-green-500 hover:text-green-500'
                  >
                    <FaGlobe />
                  </Button>
                  <Button
                    onClick={() => router.push(`/dashboard/admin/test/publish/${r?.ID}`)}  
                    variant='default'
                    className='border border-transparent bg-blue-500 hover:bg-transparent hover:border-blue-500 hover:text-blue-500'
                  >
                    <IoEyeSharp />
                  </Button>
                </TableCell>
              </TableRow>
            )
          })}
      </TableBody>
    </Table>
  )
}

const StudentIdentity = () => {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [searchTerm, setSearchTerm] = useState('')

  const { useResultApi } = useTest()
  const { useGetAllResult } = useResultApi()
  const { data = [], isLoading } = useGetAllResult()
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    setPage(1)
  }

  const filteredData = data?.filter(
    (s: any) =>
      s.message?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
      s.title?.toLowerCase().includes(searchTerm?.toLowerCase())
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
          <h3 className='text-2xl font-bold capitalize w-1/5'>Publish Test</h3>
          <div className='w-1/2 h-8 rounded-sm bg-black/5 px-2 gap-2 flex items-center ml-4'>
            <CiSearch size={22} />
            <input
              type='text'
              placeholder='search'
              className='focus:outline-none '
              title='search'
              onChange={(e: any) => handleSearch(e)}
            />
          </div>
        </div>
        <div className='w-1/3 items-center flex gap-4 justify-end'>
          <div className='flex gap-2 items-center'>
            <span>Showing</span>
            <Select onValueChange={(e: any) => setPageSize(parseInt(e))}>
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
          {/* <Button>Download excel</Button> */}
          {/* <DownloadExcelButton dataRandom={data} dataName={'student'} /> */}
        </div>
      </div>
      <div className='w-full h-[82vh] bg-white dark:bg-[#282C34] dark:text-[#ABB2BF]  rounded-xl p-4 flex flex-col  justify-between'>
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

export default StudentIdentity
