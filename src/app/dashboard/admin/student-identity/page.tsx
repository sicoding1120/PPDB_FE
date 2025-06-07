/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useState, useMemo, ChangeEvent } from 'react'
import { Search } from 'lucide-react'

import usePPDB from '@/hooks/use-fromPPDB'
import TemplateTable from '@/components/table/tableComp'
import SelectCustom from '@/components/select-custom'
import PaginationCustom from '@/components/pagination-custom'
import PdfReport from '@/components/DownloadExcelBtn'

interface Student {
  fullName?: string
  NISN?: string
  [key: string]: any
}

const StudentIdentity = () => {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [searchTerm, setSearchTerm] = useState('')

  const { useGetStudents } = usePPDB()
  const { data = [], isLoading } = useGetStudents()

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    setPage(1)
  }

  const handlePageSizeChange = (value: string) => {
    setPageSize(parseInt(value))
    setPage(1)
  }

  const filteredData = useMemo(() => {
    const term = searchTerm.toLowerCase()
    return data.filter((student: Student) => {
      const fullName = student.fullName?.toLowerCase() || ''
      const nisn = student.NISN?.toLowerCase() || ''
      return fullName.includes(term) || nisn.includes(term)
    })
  }, [data, searchTerm])

  const paginatedData = useMemo(() => {
    const start = (page - 1) * pageSize
    const end = start + pageSize
    return filteredData.slice(start, end)
  }, [filteredData, page, pageSize])

  const totalPages = Math.ceil(filteredData.length / pageSize)

  return (
    <div className='w-full h-full rounded-xl flex flex-col gap-4 px-2 dark:text-[#ABB2BF]  '>
      {/* Header */}
      <header className='flex justify-between items-center py-2 gap-4'>
        <div className='flex items-center gap-2 w-2/3'>
          <h3 className='text-2xl font-bold capitalize w-1/4'>New Student</h3>
          <div className='w-1/2 h-8 rounded-sm bg-black/5 px-2 gap-2 flex items-center ml-4 border border-transparent dark:border-slate-50/10'>
            <Search size={22}  className=''/>
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
        <div className='w-1/3 flex items-center gap-4 justify-end'>
          <div className='flex gap-2 items-center'>
            <span>Showing</span>
            <SelectCustom onChange={handlePageSizeChange} />
          </div>
          <PdfReport
            headers={[
              'Full Name',
              'NISN',
              'Age',
              'School',
              'NISN',
              'NIK',
              'Status'
            ]}
            data={data}
          />
        </div>
      </header>

      {/* Table Section */}
      <main className='w-full h-[82vh] bg-white dark:bg-[#282C34] dark:text-[#ABB2BF]  rounded-xl p-4 flex flex-col justify-between'>
        <TemplateTable
          data={paginatedData}
          isLoading={isLoading}
          variant='student-identity'
        />
        <PaginationCustom
          handlerPrev={() => page > 1 && setPage(page - 1)}
          handlerNext={() => page < totalPages && setPage(page + 1)}
          handlerLink={(i: number) => setPage(i + 1)}
          page={page}
          totalPages={totalPages}
        />
      </main>
    </div>
  )
}

export default StudentIdentity
