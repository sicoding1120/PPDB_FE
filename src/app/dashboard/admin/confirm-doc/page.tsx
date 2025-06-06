/* eslint-disable @typescript-eslint/no-unused-vars */
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
// import { siswaData } from '@/data/siswa'
import usePPDB from '@/hooks/use-fromPPDB'

import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaCheckCircle, FaTimesCircle, FaTrash } from 'react-icons/fa'
import { IoEyeSharp } from 'react-icons/io5'
import { useRouter } from 'next/navigation'
import DownloadExcelButton from '@/components/DownloadExcelBtn'
import {
  Pagination,
  PaginationContent,
  // PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { siswaData } from '@/data/siswa'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

 const TablePPDB = ({ data, isLoading }: {data:any, isLoading:boolean}) => {
  const router = useRouter()
  const { useChangeStatusDoc } = usePPDB();
  const mutate = useChangeStatusDoc();

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
          <TableHead className='w-[100px]'>Full Name</TableHead>
          <TableHead className='w-[50px]'>School</TableHead>
          <TableHead className='w-[200px]'>Father KTP</TableHead>
          <TableHead className='w-[200px]'>Mother KTP</TableHead>
          <TableHead className='w-[200px]'>Family Card</TableHead>
          <TableHead className='w-[200px]'>Akte </TableHead>
          <TableHead className='w-[200px]'>Status</TableHead>
          <TableHead className='w-[200px]'>Actions </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data &&
            data.map((doc: any, i: number) => {
              let valiantBadge: any;
              if (doc.status == 'PENDING') valiantBadge = 'pending';
              if (doc.status == 'APPROVED') valiantBadge = 'approved';
              if (doc.status == 'REJECTED') valiantBadge = 'rejected';

            return (
              <TableRow key={i}>
                <TableCell>
                  <input
                    type='checkbox'
                    title='Select Row'
                    // checked={selectedIds.includes(doc.id.toString())}
                    // onChange={() => handleCheckboxChange(doc.id.toString())}
                  />
                </TableCell>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{doc?.student == null ? "" :doc?.student?.fullName }</TableCell>
                <TableCell>{doc?.student == null ? '' : doc?.student?.from_school }</TableCell>
                <TableCell className='ellipsis'>
                  <Link href={doc.fatherKTP_url} className='text-blue-500'>
                    {doc.fatherKTP_url}
                  </Link>
                </TableCell>
                <TableCell className='ellipsis'>
                  <Link href={doc.motherKTP_url} className='text-blue-500'>
                    {doc.fatherKTP_url}
                  </Link>
                </TableCell>
                <TableCell className='ellipsis'>
                  <Link href={doc.familyCard_url} className='text-blue-500'>
                    {doc.familyCard_url}
                  </Link>
                </TableCell>
                <TableCell className='ellipsis'>
                  <Link href={`${doc.Akte_url}`} className='text-blue-500'>
                    {doc.Akte_url}
                  </Link>
                </TableCell>
                <TableCell className='ellipsis text-xs'>
                  <Badge variant={valiantBadge}>{doc.status}</Badge>
                </TableCell>
                <TableCell className='flex gap-4 items-center'>
                  <Button
                    variant='default'
                    disabled={doc.status === "APPROVED"}
                    onClick={() => mutate.changeStatus({
                      id: doc.ID,
                      data: {
                        status: "APPROVED"
                      }
                    } as any)}
                    className='border border-transparent bg-green-500 hover:bg-transparent hover:border-green-500 hover:text-green-500'
                  >
                    <FaCheckCircle />
                  </Button>
                  <Button
                    disabled={doc.status === "REJECTED"}
                    variant='default'
                    onClick={() => mutate.changeStatus({
                      id: doc.ID,
                      data: {
                        status: "REJECTED"
                      }
                    } as any)}
                    className='border border-transparent bg-red-500 hover:bg-transparent hover:border-red-500 hover:text-red-500'
                  >
                    <FaTimesCircle />
                  </Button>
                </TableCell>
              </TableRow>
            )
          })}
      </TableBody>
    </Table>
  )
}

const StudentDocument = () => {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [searchTerm, setSearchTerm] = useState('')

  const [filter, setFilter] = useState([])
  const { useGetDocument } = usePPDB()
  const { data = [], isLoading } = useGetDocument()

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    setPage(1) // reset ke page 1 saat search
  }

  const filteredData = data.filter(
    (s: any) =>
      s.student.fullName?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
      s.student.NISN?.toLowerCase().includes(searchTerm?.toLowerCase())
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
          <h3 className='text-2xl font-bold capitalize w-1/5'>New Student</h3>
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
          <DownloadExcelButton dataRandom={data} dataName={'student'} />
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

export default StudentDocument
