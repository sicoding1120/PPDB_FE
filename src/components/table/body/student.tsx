/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { TableBody, TableCell, TableRow } from '../../ui/table'
import { Button } from '@/components/ui/button'
import StudentHandler from '@/lib/handler/student'
import { useRouter } from 'next/navigation'
import { IoEyeSharp } from 'react-icons/io5'
import { FaCheckCircle, FaTimesCircle, FaTrash } from 'react-icons/fa'


const StudentTableBody = ({ data }: any) => {
      const router = useRouter()
    
 const { HandlerUpdateStatusStudent, handleDeleteStudent } = StudentHandler()
return (
  <TableBody>
    {data &&
      data.map((student: any, i: number) => {
        return (
          <TableRow key={i}>
            <TableCell>{i + 1}</TableCell>
            <TableCell>{student.fullName}</TableCell>
            <TableCell>{student.age}</TableCell>
            <TableCell>{student.from_school}</TableCell>
            <TableCell>{student.NISN}</TableCell>
            <TableCell>{student.NIK}</TableCell>
            <TableCell>{student.status}</TableCell>
            <TableCell className='flex gap-4 items-center'>
              <Button
                variant='default'
                className='border border-transparent bg-blue-500 hover:bg-transparent hover:border-blue-500 hover:text-blue-500'
                onClick={() =>
                  router.push(`/dashboard/admin/student-identity/${student.ID}`)
                }
              >
                <IoEyeSharp />
              </Button>
              <Button
                disabled={student.status == 'PASSED'}
                variant='default'
                className='border border-transparent bg-green-500 hover:bg-transparent hover:border-green-500 hover:text-green-500'
                onClick={async () =>
                  HandlerUpdateStatusStudent(student?.ID, 'PASSED')
                }
              >
                <FaCheckCircle />
              </Button>

              <Button
                disabled={student.status == 'FAILED'}
                variant='default'
                onClick={async () =>
                  HandlerUpdateStatusStudent(student?.ID, 'PENDING')
                }
                className='border border-transparent bg-yellow-500 hover:bg-transparent hover:border-yellow-500 hover:text-yellow-500'
              >
                <FaTimesCircle />
              </Button>
              <Button
                variant='default'
                className='border border-transparent bg-red-500 hover:bg-transparent hover:border-red-500 hover:text-red-500'
                onClick={() => handleDeleteStudent.deleteStudent(student.ID)}
              >
                <FaTrash />
              </Button>
            </TableCell>
          </TableRow>
        )
      })}
  </TableBody>
)

}

export default StudentTableBody