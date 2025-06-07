/* eslint-disable @typescript-eslint/no-explicit-any */
// table/body/tableBody.tsx
import dynamic from 'next/dynamic'
import { FC, Suspense } from 'react'

// Type opsi varian
type TableVariant = 'student-identity' | 'confirm-doc' | 'verify-payment'

// Props dari TemplateTable
interface Props {
  variant: TableVariant
  data:any
}

// Dynamic import untuk masing-masing varian
const StudentBody = dynamic(() => import('./body/student'), { ssr: false })
const DocumentBody = dynamic(() => import('./body/document'), { ssr: false })
const PaymentBody = dynamic(() => import('./body/payment'), { ssr: false })

// Loader utama
const TableBody: FC<Props> = ({ variant, data }) => {
  return (
    <Suspense
      fallback={
        <tr>
          <td colSpan={100}>Loading...</td>
        </tr>
      }
    >
      {variant === 'student-identity' && <StudentBody data={data} />}
      {variant === 'confirm-doc' && <DocumentBody data={data} />}
      {variant === 'verify-payment' && <PaymentBody data={data} />}
    </Suspense>
  )
}

export default TableBody
