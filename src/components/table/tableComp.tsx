/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React from 'react'
import { Table } from '../ui/table'
import { tableConfig } from '@/lib/tableConfig'

interface TemplateTableProps {
  data: any
  isLoading: boolean
  variant: 'student-identity' | 'confirm-doc' | "verify-payment"
}

 const TemplateTable = ({
  data,
  isLoading,
  variant
}: TemplateTableProps) => {
  if (data?.length === 0) return <div>No data available</div>
  if (isLoading) return <div>Loading...</div>

  const config = tableConfig[variant]
  if (!config) return null // atau fallback jika variant tidak sesuai

  return (
    <Table className='h-3/4 overflow-y-auto'>
      {config.header}
      {config.body(data)}
    </Table>
  )
}
export default React.memo(TemplateTable);