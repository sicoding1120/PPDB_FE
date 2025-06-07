import React from 'react'
import { TableHead, TableHeader, TableRow } from '../ui/table'
import { tableHeaderData } from '@/data/table'

interface HeaderItem {
  label: string
  className: string
}

interface Props {
  variant: 'student-identity' | 'confirm-doc' | 'verify-payment'
}

const headersMap: Record<Props['variant'], HeaderItem[]> = tableHeaderData

const TableHeaderComp = ({ variant }: Props) => {
  const headers = headersMap[variant] || []

  return (
    <TableHeader>
      <TableRow>
        {headers.map(({ label, className }) => (
          <TableHead key={label} className={className}>
            {label}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  )
}

export default React.memo(TableHeaderComp)
