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
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import useTest from '@/hooks/use-test'
import Swal from 'sweetalert2'
import DialogComponents from '@/components/dialogComponents'
import { Search } from 'lucide-react'

const TablePPDB = ({ data }: any) => {
  const router = useRouter()

  const { useTestApi } = useTest()
  const { useUpdateTest, useDeleteTest } = useTestApi()
  const { deleteTestFn } = useDeleteTest()
  const { update } = useUpdateTest()

  const handleDelete = async (id: string) => {
    console.log(id)
    const result = await Swal.fire({
      title: 'are you sure ?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })

    if (result.isConfirmed == true) {
      deleteTestFn(id)
    }
  }
  const handleUpdate = async (id: string) => {
    const result = await Swal.fire({
      title: 'update test',
      input: 'text',
      inputLabel: 'Enter new title',
      inputPlaceholder: 'New title',
      showCancelButton: true,
      confirmButtonText: 'Update',
      preConfirm: value => {
        if (!value) {
          Swal.showValidationMessage('Title is required')
        }
        return value
      }
    })

    if (result.isConfirmed == true && result.value) {
      console.log(result.value)
      await update({
        id: id,
        data: {
          title: result.value
        }
      })
    }
  }

  return data?.length == 0 ? (
    <div>No data available</div>
  ) : (
    <Table className='h-3/4 overflow-y-auto '>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[50px]'>No</TableHead>
          <TableHead className='w-[200px]'>ID</TableHead>
          <TableHead className='w-[200px]'>Test Name</TableHead>
          <TableHead className='w-[200px]'>Category Name</TableHead>
          <TableHead className='w-[200px]'>Student test count</TableHead>
          <TableHead className='w-[200px]'>question Count</TableHead>
          <TableHead className='w-[300px]'>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data &&
          data.map((t: any, i: number) => {
            return (
              <TableRow key={i}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{t?.ID}</TableCell>
                <TableCell>{t?.title}</TableCell>
                <TableCell>{t?.category?.name}</TableCell>
                <TableCell>{t?.studentTests?.length}</TableCell>
                <TableCell>{t?.questions?.length}</TableCell>

                <TableCell className='flex gap-4 items-center'>
                  <Button
                    variant='default'
                    onClick={() =>
                      router.push(`/dashboard/admin/test/manage/test/${t?.ID}`)
                    }
                    className='border border-transparent bg-green-500 hover:bg-transparent hover:border-green-500 hover:text-green-500'
                  >
                    <FaEye />
                  </Button>
                  <Button
                    variant='default'
                    onClick={async () => await handleUpdate(t?.ID)}
                    className='border border-transparent bg-blue-500 hover:bg-transparent hover:border-blue-500 hover:text-blue-500'
                  >
                    <FaEdit />
                  </Button>

                  <Button
                    variant='default'
                    className='border border-transparent bg-red-500 hover:bg-transparent hover:border-red-500 hover:text-red-500'
                    onClick={() => handleDelete(t?.ID)}
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

const ShowTest = () => {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [searchTerm, setSearchTerm] = useState('')

  // const router = useRouter()

  const { useTestApi } = useTest()
  const { useGetAllTest } = useTestApi()
  const { data, isLoading } = useGetAllTest()

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    setPage(1)
  }

  const filteredData = data?.filter((s: any) =>
    s?.title?.toLowerCase().includes(searchTerm?.toLowerCase())
  )

  const totalPages = Math.ceil(filteredData?.length / pageSize)
  const paginatedData = filteredData?.slice(
    (page - 1) * pageSize,
    page * pageSize
  )
  return (
    <div className='w-full h-full rounded-xl flex flex-col gap-4 px-2 dark:text-[#ABB2BF]'>
      <div className='flex justify-between items-center w-full h-full py-2 gap-4 '>
        <div className='flex items-center gap-2 w-2/3'>
          <h3 className='text-2xl font-bold capitalize w-1/4'> Test</h3>
          <div className='w-1/2 h-8 rounded-sm bg-black/5 px-2 gap-2 flex items-center ml-4 border border-transparent dark:border-slate-50/10'>
            <Search size={22} className='' />
            <input
              type='text'
              placeholder='Search by name or NISN'
              className='focus:outline-none w-full'
              title='search'
              value={searchTerm}
              onChange={handleSearch}
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
          {/* <DownloadExcelButton dataRandom={data} dataName={'Questions'} /> */}
          {/* <Button
            className='flex justify-center items-center gap-2 capitalize bg-green-500 text-white px-6 py-2 w-1/3'
            onClick={() =>
              router.push('/dashboard/admin/test/manage/test/create')
            }
          >
            <FaPlusCircle />
            Test
          </Button> */}
          <DialogComponents variant='createTest' />
        </div>
      </div>
      <div className='w-full h-[82vh] bg-white dark:bg-[#282C34] dark:text-[#ABB2BF] rounded-xl p-4 flex flex-col  justify-between'>
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

export default ShowTest
