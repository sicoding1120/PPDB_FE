'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, ChangeEvent } from 'react'
import usePPDB from '@/hooks/use-fromPPDB'
import  TemplateTable  from '@/components/table/tableComp';
import SelectCustom from '@/components/select-custom'
import PaginationCustom from '@/components/pagination-custom'
import { Search } from 'lucide-react'
import PdfReport from '@/components/DownloadExcelBtn'

const StudentDocument = () => {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [searchTerm, setSearchTerm] = useState('')

  const { useGetDocument } = usePPDB()
  const { data = [], isLoading } = useGetDocument()

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    setPage(1)
  }

  const handlePageSizeChange = (value: string) => {
    setPageSize(Number(value))
    setPage(1)
  }

  const filteredData = data.filter((item: any) => {
    const fullName = item?.student?.fullName?.toLowerCase() || ''
    const nisn = item?.student?.NISN?.toLowerCase() || ''
    return (
      fullName.includes(searchTerm.toLowerCase()) ||
      nisn.includes(searchTerm.toLowerCase())
    )
  })

  const totalPages = Math.ceil(filteredData.length / pageSize)

  const handlePrev = () => {
    if (page > 1) setPage(page - 1)
  }

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1)
  }

  const handleLinkClick = (index: number) => {
    setPage(index + 1)
  }

  return (
    <div className='w-full h-full rounded-xl flex flex-col gap-4 px-2  dark:text-[#ABB2BF] '>
      {/* Header */}
      <div className='flex justify-between items-center w-full py-2 gap-4'>
        <div className='flex items-center gap-2 w-2/3'>
          <h3 className='text-2xl font-bold capitalize w-1/4'>Confirm Doc</h3>
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

        <div className='w-1/3 flex gap-4 justify-end items-center'>
          <div className='flex gap-2 items-center'>
            <span>Showing</span>
            <SelectCustom onChange={handlePageSizeChange} />
          </div>
          <PdfReport
            headers={[
              'Full Name',
              'School',
              'Father KTP',
              'Mother KTP',
              'Family Card',
              'Akte',
              'Status'
            ]}
            data={[]}
          />
        </div>
      </div>

      {/* Table Content */}
      <div className='w-full h-[82vh] bg-white dark:bg-[#282C34] dark:text-[#ABB2BF]  rounded-xl p-4 flex flex-col justify-between'>
        <TemplateTable
          data={filteredData.slice((page - 1) * pageSize, page * pageSize)}
          isLoading={isLoading}
          variant='confirm-doc'
        />
        <PaginationCustom
          handlerPrev={handlePrev}
          handlerNext={handleNext}
          handlerLink={handleLinkClick}
          page={page}
          totalPages={totalPages}
        />
      </div>
    </div>
  )
}

export default StudentDocument
