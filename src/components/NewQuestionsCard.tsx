/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { FaTrashAlt } from 'react-icons/fa'
import { Input } from './ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './ui/select'

const NewQuestionsCard = ({
  newQs,
  i,
  deleteQuestion,
  handleQuestionChange,
  handleOptionChange,
  handleKeyAnswerChange,
  handleWeightQuestion
}: any) => {
  return (
    <Card key={i} className='space-y-4 p-4 border-slate-300'>
      <CardContent className='space-y-2'>
        <div className='flex justify-between items-center'>
          <h2 className='text-lg font-semibold'>Question</h2>
          <div className='flex'>
            <Button variant='ghost' onClick={() => deleteQuestion(i)}>
              <FaTrashAlt className='w-4 h-4' />
            </Button>
          </div>
        </div>
        <Input
          placeholder='Enter question text'
          defaultValue={newQs?.text}
          onChange={(e: any) => handleQuestionChange(i, 'text', e)}
        />
        <div className='grid grid-cols-2 gap-2'>
          {newQs[i]?.options?.map((opt: any, j: any) => (
            <Input
              key={j}
              placeholder={`Option ${opt.label}`}
              //   defaultValue={` ${opt?.value}`}
              onChange={(e: any) => handleOptionChange(e, i, j)}
            />
          ))}
        </div>
        <div className='space-y-1 flex gap-4 items-center'>
          <div className='flex flex-col gap-2'>
            <label className='text-sm font-medium'>Correct Answer:</label>
            <Select
              onValueChange={(e: any) =>
                handleKeyAnswerChange(i, 'correctValue', e)
              }
            >
              <SelectTrigger className='w-[180px] border-slate-300'>
                <SelectValue placeholder='Select answer' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={'A'}>A</SelectItem>
                <SelectItem value={'B'}>B</SelectItem>
                <SelectItem value={'C'}>C</SelectItem>
                <SelectItem value={'D'}>D</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='flex flex-col gap-2 mb-1'>
            <label className='text-sm font-medium'>Weight</label>
            <Input type='number' placeholder='enter weight question'  onChange={(e:any) => handleWeightQuestion(i, "weight", e)}/>
          </div>
        </div>
        {/* {errorMessages[i] && (
            <div className='text-red-500 text-sm mt-2'>
              {errorMessages[i]}
            </div>
          )} */}
      </CardContent>
    </Card>
  )
}

export default NewQuestionsCard
