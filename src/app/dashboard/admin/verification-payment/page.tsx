/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useState, useMemo, ChangeEvent } from 'react'

// import DownloadExcelButton from '@/components/DownloadExcelBtn'
import usePaymentAPI from '@/hooks/use-payment'
import TemplateTable  from '@/components/table/tableComp'
import SelectCustom from '@/components/select-custom'
import PaginationCustom from '@/components/pagination-custom'
import { Search } from 'lucide-react'

interface Student {
  fullName?: string
  NISN?: string
}

interface Transaction {
  student: Student
  [key: string]: any
}

const StudentPayment = () => {
  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)
  const [searchTerm, setSearchTerm] = useState<string>('')

  const { useGetTransactions } = usePaymentAPI()
  const { data = [], isLoading } = useGetTransactions()

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    setPage(1)
  }

  // Memoize filtered data to optimize re-render
  const filteredData = useMemo(() => {
    const term = searchTerm.toLowerCase()
    return data.filter((transaction: Transaction) => {
      const { fullName = '', NISN = '' } = transaction.student || {}
      return (
        fullName.toLowerCase().includes(term) ||
        NISN.toLowerCase().includes(term)
      )
    })
  }, [data, searchTerm])

  const totalPages = Math.ceil(filteredData.length / pageSize)

  // Paginate filtered data for current page
  const paginatedData = useMemo(() => {
    const start = (page - 1) * pageSize
    const end = start + pageSize
    return filteredData.slice(start, end)
  }, [filteredData, page, pageSize])

  const handlePageSizeChange = (value: string) => {
    setPageSize(parseInt(value))
    setPage(1)
  }

  return (
    <div className='w-full h-full rounded-xl flex flex-col gap-4 px-2 dark:text-[#ABB2BF]'>
      <header className='flex justify-between items-center py-2 gap-4'>
        <div className='flex items-center gap-2 w-2/3'>
          <h3 className='text-2xl font-bold capitalize w-1/5'>
            Verify Payment
          </h3>
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
          {/* <DownloadExcelButton dataRandom={filteredData} dataName='student' /> */}
        </div>
      </header>

      <main className='w-full h-[82vh] bg-white dark:bg-[#282C34] dark:text-[#ABB2BF] rounded-xl p-4 flex flex-col justify-between'>
        <TemplateTable
          data={paginatedData}
          isLoading={isLoading}
          variant='verify-payment'
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

export default StudentPayment
