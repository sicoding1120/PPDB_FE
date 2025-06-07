/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { TableBody, TableCell, TableRow } from '../../ui/table'
import HandlerDocument from '@/lib/handler/doc'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'


const DocumentTableBody = ({data}:any) => {
  const { mutate } = HandlerDocument()
return (
  <TableBody>
    {data &&
      data.map((doc: any, i: number) => {
        let valiantBadge: any
        if (doc.status == 'PENDING') valiantBadge = 'pending'
        if (doc.status == 'APPROVED') valiantBadge = 'approved'
        if (doc.status == 'REJECTED') valiantBadge = 'rejected'
        return (
          <TableRow key={i}>
            
            <TableCell>{i + 1}</TableCell>
            <TableCell>
              {doc?.student == null ? '' : doc?.student?.fullName}
            </TableCell>
            <TableCell>
              {doc?.student == null ? '' : doc?.student?.from_school}
            </TableCell>
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
                disabled={doc.status === 'APPROVED'}
                onClick={() =>
                  mutate.changeStatus({
                    id: doc.ID,
                    data: {
                      status: 'APPROVED'
                    }
                  } as any)
                }
                className='border border-transparent bg-green-500 hover:bg-transparent hover:border-green-500 hover:text-green-500'
              >
                <FaCheckCircle />
              </Button>
              <Button
                disabled={doc.status === 'REJECTED'}
                variant='default'
                onClick={() =>
                  mutate.changeStatus({
                    id: doc.ID,
                    data: {
                      status: 'REJECTED'
                    }
                  } as any)
                }
                className='border border-transparent bg-red-500 hover:bg-transparent hover:border-red-500 hover:text-red-500'
              >
                <FaTimesCircle />
              </Button>
            </TableCell>
          </TableRow>
        )
      })}
  </TableBody>
)

}

export default DocumentTableBody