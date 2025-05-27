/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useState } from 'react'
import { Card, CardContent } from './ui/card'
import { Input } from './ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './ui/select'
import useTest from '@/hooks/use-test'
import { Button } from './ui/button'
import { FaTrashAlt } from 'react-icons/fa'
import Swal from 'sweetalert2'

const ExistedQuestionsCard = ({ q, i }: any) => {
  // Local state for edits
  const [text, setText] = useState(q.text)
  const [weight, setWeight] = useState(q.weight)
  const [options, setOptions] = useState(q.options)
  const [correctLabel, setCorrectLabel] = useState(q.correct?.label || '')

  const { useQuestionsTest } = useTest()
  const { useDeleteQuestion, useUpdateQuestion } = useQuestionsTest()
  const {updateQuestionFn} = useUpdateQuestion()
  const { deleteQuestionMutate } = useDeleteQuestion(q?.ID)

  const deleteQuestion = async () => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })

    if (result.isConfirmed === true) {
      deleteQuestionMutate(q?.ID)
    }
  }

  // Handle option change
  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options]
    newOptions[index] = { ...newOptions[index], value }
    setOptions(newOptions)
  }

  // Save update to backend
  const saveQuestion = async () => {
    try {
      const payload = {
        text,
        weight,
        options,
        correctLabel
      }

      console.log(payload);
      updateQuestionFn({id: q.ID, dto: payload})
      // // Ganti URL sesuai API update-mu
      // await axios.put(`/api/questions/${q.ID}`, payload)
      // Swal.fire('Success', 'Question updated successfully!', 'success')
    } catch (error: any) {
      Swal.fire(
        'Error',
        error.response?.data?.message || 'Failed to update',
        'error'
      )
    }
  }

  return (
    <Card key={i} className='space-y-4 p-4 border-slate-300'>
      <CardContent className='space-y-2'>
        <div className='flex justify-between items-center'>
          <h2 className='text-lg font-semibold'>Question</h2>
          <div className='flex gap-2'>
            <Button
              variant='outline'
              className='border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500'
              onClick={saveQuestion}
            >
              Save
            </Button>
            <Button
              variant='ghost'
              onClick={() => deleteQuestion()}
              className='hover:bg-red-500/15 text-red-500 hover:text-red-500 cursor-pointer'
            >
              <FaTrashAlt className='w-4 h-4' />
            </Button>
          </div>
        </div>

        <Input
          placeholder='Enter question text'
          value={text}
          onChange={e => setText(e.target.value)}
        />

        <div className='grid grid-cols-2 gap-2'>
          {options.map((opt: any, j: number) => (
            <Input
              key={j}
              placeholder={`Option ${opt.label}`}
              value={opt.value}
              onChange={e => handleOptionChange(j, e.target.value)}
            />
          ))}
        </div>

        <div className='space-y-1 flex gap-4'>
          <div className='flex flex-col gap-2'>
            <label className='text-sm font-medium'>Correct Answer:</label>
            <Select
              value={correctLabel}
              onValueChange={(val: any) => setCorrectLabel(val)}
            >
              <SelectTrigger className='w-[180px] border-slate-300'>
                <SelectValue placeholder='Select answer' />
              </SelectTrigger>
              <SelectContent>
                {options.map((opt: any) => (
                  <SelectItem key={opt.label} value={opt.label}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className='flex flex-col gap-2 mb-1'>
            <label className='text-sm font-medium'>Weight</label>
            <Input
              type='number'
              value={weight}
              placeholder='enter weight question'
              onChange={e => setWeight(Number(e.target.value))}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ExistedQuestionsCard
