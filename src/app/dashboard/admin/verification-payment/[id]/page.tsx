'use client'
import usePaymentAPI from '@/hooks/use-payment'
import React, { use } from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa'
// import numeral from 'numeral'
// import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import numeral from 'numeral'
interface DetailPaymentProps {
  params: Promise<{ id: string }>
}

const DetailPaymentPage = ({ params }: DetailPaymentProps) => {
  const router = useRouter()
  const { id } = use(params)
  const { useGetDetailTransaction } = usePaymentAPI()
  const { data = {}, isLoading } = useGetDetailTransaction(id)

  console.log(data, isLoading)
  return (
    <section className='w-full h-full py-6 px-12'>
      <div className='w-full h-full bg-white px-4 py-12 rounded-3xl'>
        <div
          className='w-full h-1/2 rounded-xl flex justify-center items-center flex-col gap-4'
          id='header'
        >
          <CheckerIcon status={data?.paymentStatus} />
          <h3 className=' capitalize text-2xl mt-2'>payment Success</h3>
          <h3 className='font-bold capitalize text-4xl'>
            IDR {numeral(data?.amountPaid).format('0,0')}
          </h3>
        </div>
        <div className='w-full h-1/2 flex justify-center items-center flex-col mt-8 px-24'>
          <div className='w-full bg-black/5 rounded-2xl  py-6 flex justify-center items-center'>
            <p className='text-xl capitalize font-semibold'>Payment Detail</p>
          </div>
          <div className='w-full h-full mt-2 flex flex-col gap-6 px-6 py-4'>
            <div className='w-full flex justify-between items-center capitalize'>
              <span className='font-semibold text-black/50 text-xl'>
                Ref Number
              </span>
              <span className='uppercase text-xl font-semibold'>
                {data?.reference}
              </span>
            </div>
            <div className='w-full flex justify-between items-center capitalize'>
              <span className='font-semibold text-black/50 text-xl'>
                Payment Time
              </span>
              <span className='uppercase text-xl font-semibold'>
                {data?.registrationDate}
              </span>
            </div>
            <div className='w-full flex justify-between items-center capitalize'>
              <span className='font-semibold text-black/50 text-xl'>
                Payment Method
              </span>
              <span className='uppercase text-xl font-semibold'>
                {data?.paymentMethod}
              </span>
            </div>
            <div className='w-full flex justify-between items-center capitalize mb-2'>
              <span className='font-semibold text-black/50 text-xl'>
                Sender Name
              </span>
              <span className='uppercase text-xl font-semibold'>
                {data?.senderName}
              </span>
            </div>
            <hr className='text-slate-200' />
            <div className='w-full flex justify-between items-center capitalize mt-2'>
              <span className='font-semibold text-black/50 text-xl'>
                Amount Paid
              </span>
              <span className='uppercase text-xl font-semibold'>
                IDR {numeral(data?.amountPaid).format('0,0')}
              </span>
            </div>
            <div className='w-full flex justify-between items-center capitalize'>
              <span className='font-semibold text-black/50 text-xl'>
                Admin Fee
              </span>
              <span className='uppercase text-xl font-semibold'>
                IDR {numeral(data?.adminFee).format('0,0')}
              </span>
            </div>
            <div className='w-full flex justify-between items-center capitalize'>
              <span className='font-semibold text-black/50 text-xl'>
                Payment Status
              </span>
             <StatusPaymentBadge status={data?.paymentStatus} />
            </div>
          </div>
        </div>
        <div className='w-full h-12 px-24 mt-12'>
          <Button
            className='bg-green-500 border border-green-500 hover:cursor-pointer px-4 hover:bg-green-500 w-full h-full text-xl font-semibold'
            onClick={() => router.back()}
          >
            Back
          </Button>
        </div>
      </div>
    </section>
  )
}

const CheckerIcon = ({ status }: { status: string }) => {
  if (status == 'SUCCESS') {
    return (
      <div className='w-36 h-36 rounded-full bg-green-500/15 p-6'>
        <div className='w-full h-full rounded-full bg-green-500 flex justify-center items-center text-white'>
          <FaCheck size={50} />
        </div>
      </div>
    )
  }

  if (status == 'FAILED') {
    return (
      <div className='w-36 h-36 rounded-full bg-red-500/15 p-6'>
        <div className='w-full h-full rounded-full bg-red-500 flex justify-center items-center text-white'>
          <FaTimes size={50} />
        </div>
      </div>
    )
  }
}

const StatusPaymentBadge = ({ status }: {status:string}) => {
  if (status === 'SUCCESS') {
    return (
      <div className=' capitalize px-8 rounded-full py-2 text-xl flex justify-center items-center bg-green-500/15 font-semibold text-green-500'>
        {status}
      </div>
    )
  }
  if (status === 'FAILED') {
    return (
      <div className=' capitalize px-8 rounded-full py-2 text-xl flex justify-center items-center bg-red-500/15 font-semibold text-red-500'>
        {status}
      </div>
    )
  }
}

export default DetailPaymentPage
