/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import useTest from '@/hooks/use-test'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectGroup
} from '@/components/ui/select'
import React, { use, useEffect, useState } from 'react'
import { FaEdit, FaPlusCircle, FaTrashAlt } from 'react-icons/fa'
import ExistedQuestionsCard from '@/components/ExistedQuestionsCard'
import NewQuestionsCard from '@/components/NewQuestionsCard'

const emptyQuestion = (testID: any = '') => ({
  text: '',
  testID,
  weight: 10,
  options: [
    { label: 'A', value: '' },
    { label: 'B', value: '' },
    { label: 'C', value: '' },
    { label: 'D', value: '' }
  ],
  correctValue: ''
})

const DetailTestPage = ({ params }: { params: Promise<{ id: string }> }) => {
  // state
  const [questions, setQuestions] = useState([])
  const [newQs, setNewQS] = useState<any>([])

  const { id } = use(params)

  const { useTestApi, useQuestionsTest } = useTest()
  const { useCreateBulkQuestion } = useQuestionsTest()
  const mutate = useCreateBulkQuestion()
  const { useGetDetailTest } = useTestApi()
  const { data, isLoading } = useGetDetailTest(id)

  // first reload
  useEffect(() => {
    if (data?.questions?.length > 0) {
      setQuestions(data?.questions)
    } else {
      setQuestions([])
    }
  }, [data])

  const handleQuestionChange = (i: any, field: any, value: any) => {
    const updated = [...newQs]
    updated[i][field] = value
    setNewQS(updated)
  }

  const addQuestions = () => {
    setNewQS([...newQs, emptyQuestion(id)] as any)
  }
  const changeOptionNewQs = (i: any, e: any, j: any) => {
    const updated = [...newQs]
    updated[i].options[j].value = e
    setNewQS(updated)
  }
  const changeAnswerNewQs = (i: any, f: any, e: any) => {
    const update = [...newQs]
    update[i][f] = e
    setNewQS(update)
  }

  const changeWeightNewQs = (i: any,f:any, e: any) => {
    const update = [...newQs]
    update[i][f] = Number(e)
    setNewQS(update)
  }

  const deleteQuestion = (id: number | string | any) => {
    const update = [...newQs]
    update.splice(id, 1)
    setNewQS(update)
  }
  const saveQuestions = () => {
    if (newQs.length > 0) {
      mutate.createBulkQuestions(newQs)
    } 
  }
 
  return (
    <section className='w-full h-full flex flex-col gap-4 pb-6'>
      <div className='bg-white w-full h-full border-l-4 border-green-500 shadow-md rounded-md p-6 flex flex-col gap-4 '>
        <div className='flex items-center mb-4'>
          <svg
            className='w-6 h-6 text-green-500 mr-2'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z'
            />
          </svg>
          <h2 className='text-xl font-semibold text-gray-800'>Detail Tes</h2>
        </div>

        <div className='space-y-3 flex gap-4  justify-between text-gray-700 px-8'>
          <div className='flex flex-col gap-1 text-2xl font-semibold'>
            <span className=' text-sm'>Title Test:</span> {data?.title}
          </div>
          <div className='flex flex-col gap-1 text-2xl font-semibold'>
            <span className=' text-sm'>Category Test:</span>{' '}
            {data?.category?.name}
          </div>
          <div className='flex flex-col gap-1 text-2xl font-semibold'>
            <span className=' text-sm'>Questions count:</span>{' '}
            {data?.questions?.length}
          </div>
          <div className='flex flex-col gap-1 text-2xl font-semibold'>
            <span className=' text-sm'>Student Count:</span>{' '}
            {data?.studentTests?.length}
          </div>
          <div className='flex flex-col gap-1 text-2xl font-semibold'>
            <span className=' text-sm'>Max Score:</span> 100
          </div>
        </div>
      </div>
      <div className='w-full h-full gap-4 flex flex-col mb-12'>
        {questions &&
          questions.map((q: any, i: any) => (
            <ExistedQuestionsCard q={q} i={i} key={i} />
          ))}
        {newQs &&
          newQs.map((q: any, i: any) => (
            <NewQuestionsCard
              key={i}
              i={i}
              newQs={newQs}
              deleteQuestion={(i: any) => deleteQuestion(i)}
              handleQuestionChange={(i: any, f: any, e: any) =>
                handleQuestionChange(i, f, e.target?.value)
              }
              handleOptionChange={(e: any, i: any, j: any) =>
                changeOptionNewQs(i, e.target.value, j)
              }
              handleKeyAnswerChange={(i: any, f: any, e: any) =>
                changeAnswerNewQs(i, f, e)
              }
              handleWeightQuestion={(i: any, f: any, e: any) => changeWeightNewQs(i,f,e.target.value) }
            />
          ))}
        <Card
          onClick={addQuestions}
          className='cursor-pointer hover:bg-green-100 transition-colors duration-200 border border-green-500 text-green-700 flex justify-center items-center py-6'
        >
          <CardContent className='flex items-center justify-center gap-2 text-green-600'>
            <FaPlusCircle className='w-5 h-5' />
            <span className='text-lg font-medium'>Add Question</span>
          </CardContent>
        </Card>
        <Button
          onClick={saveQuestions}
          variant={'outline'}
          className='hover:bg-blue-500  hover:text-white text-lg w-full h-12 border-blue-500 bg-white text-blue-500'
        >
          Save Questions
        </Button>
      </div>
    </section>
  )
}

export default DetailTestPage
