/* eslint-disable @typescript-eslint/no-explicit-any */
import TableBody from '@/components/table/tableBody'
import TableHeaderComp from '@/components/table/tableHeader'
import React from 'react'
// import TableHeaderComp from './tableHeader'
// import TableBodyComp from './tableBody'

export const tableConfig = {
  'student-identity': {
    header: <TableHeaderComp variant='student-identity' />,
    body: (data: any) => (
      <TableBody variant='student-identity' data={data} />
    )
  },
  'confirm-doc': {
    header: <TableHeaderComp variant='confirm-doc' />,
    body: (data: any) => <TableBody variant='confirm-doc' data={data} />
  },
  'verify-payment': {
    header: <TableHeaderComp variant='verify-payment' />,
    body: (data: any) => <TableBody variant='verify-payment' data={data} />
  }
}
