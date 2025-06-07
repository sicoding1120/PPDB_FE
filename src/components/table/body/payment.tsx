/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { TableBody, TableCell, TableRow } from '../../ui/table'
import HandlerPayment from '@/lib/handler/payment'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { IoEyeSharp } from 'react-icons/io5'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'


const PaymentTableBody = ({ data }: any) => {
      const router = useRouter()
    
  const { mutate } = HandlerPayment()
return (
  <TableBody>
    {data &&
      data.map((pay: any, i: number) => {
        let valiantBadge: any
        if (pay.status == 'PENDING') valiantBadge = 'pending'
        if (pay.status == 'VERIFIED') valiantBadge = 'approved'
        if (pay.status == 'REJECTED') valiantBadge = 'rejected'

        return (
          <TableRow key={i}>
            <TableCell>
              <input
                type='checkbox'
                title='Select Row'
                // checked={selectedIds.includes(pay.id.toString())}
                // onChange={() => handleCheckboxChange(pay.id.toString())}
              />
            </TableCell>
            <TableCell>{i + 1}</TableCell>
            <TableCell>{pay.student.fullName}</TableCell>
            <TableCell>{pay.reference}</TableCell>
            <TableCell className='ellipsis'>{pay.amountPaid}</TableCell>
            <TableCell className='ellipsis'>{pay.paymentMethod}</TableCell>
            <TableCell className='ellipsis'>{pay.notes}</TableCell>
            <TableCell className='ellipsis'>{pay.senderName}</TableCell>
            <TableCell className='ellipsis text-xs'>
              <Badge variant={valiantBadge}>{pay.status}</Badge>
            </TableCell>
            <TableCell className='flex gap-4 items-center'>
              <Button
                variant='default'
                className='border border-transparent bg-green-500 hover:bg-transparent hover:border-green-500 hover:text-green-500'
                onClick={() =>
                  router.push(`/dashboard/admin/verification-payment/${pay.ID}`)
                }
              >
                <IoEyeSharp />
              </Button>
              <Button
                variant='default'
                disabled={pay.status === 'VERIFIED'}
                onClick={() =>
                  mutate.updateTransactionAPI({
                    id: pay.ID,
                    data: {
                      status: 'VERIFIED'
                    }
                  } as any)
                }
                className='border border-transparent bg-green-500 hover:bg-transparent hover:border-green-500 hover:text-green-500'
              >
                <FaCheckCircle />
              </Button>
              <Button
                disabled={pay.status === 'REJECTED'}
                variant='default'
                onClick={() =>
                  mutate.updateTransactionAPI({
                    id: pay.ID,
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

export default PaymentTableBody