/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectGroup,
  
} from '@/components/ui/select'
import { FaPlusCircle, FaTrashAlt } from 'react-icons/fa'
import useTest from '@/hooks/use-test'

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
  correctValue: 'A'
})

const mapAPIDataToQuestion = (data: any) => {
  return data.map((item: any) => ({
    text: item.text,
    testID: item.testID,
    weight: item.weight,
    options: item.options.map((opt: any) => ({
      label: opt.label,
      value: opt.value
    })),
    correctValue: item.correct.label
  }))
}

const CreateQuestionPage = () => {
  const [questions, setQuestions] = useState<any>([])
  const [selectedCategory, setSelectedCategory] = useState<any>('')
  const [selectedTestID, setSelectedTestID] = useState<any>('')
  const [tests, setTests] = useState<any>([])
  const [errorMessages, setErrorMessages] = useState<any>([])

  const { useCategoryTest } = useTest()
  const { useGetAllCategoryTest, useGetQuestionByCategory } =
    useCategoryTest()
  const { data: dtCategory } = useGetAllCategoryTest()
  const { data: existingQuestions, refetch } =
    useGetQuestionByCategory(selectedTestID,)
  
  console.log("question",existingQuestions);
  // const saveQuestions = useSaveQuestions()

  useEffect(() => {
    if (existingQuestions) {
      const formatted =
        existingQuestions.length > 0
          ? mapAPIDataToQuestion(existingQuestions)
          : [emptyQuestion(selectedTestID)]
      setQuestions(formatted)
    }
  }, [existingQuestions, selectedTestID])

  const handleCategoryChange = (catID: any) => {
    const selectedCat = dtCategory.find((d: any) => d.ID === catID)
    setSelectedCategory(catID)
    setTests(selectedCat?.Test || [])
    setSelectedTestID('')
    setQuestions([])
  }

  const handleTestChange = (testID: any) => {
    setSelectedTestID(testID)
    refetch();
  }

  const handleQuestionChange = (index: any, field: any, value: any) => {
    const updated = [...questions]
    updated[index]["text"] = value
    // setQuestions(updated)
  }

  const handleOptionChange = (qIdx: any, optIdx: any, value: any) => {
    const updated = [...questions]
    updated[qIdx].options[optIdx].value = value
    setQuestions(updated)
  }

  const addQuestion = () => {
    setQuestions([...questions, emptyQuestion(selectedTestID)])
  }

  const removeQuestion = (index: any) => {
    const updated = [...questions]
    updated.splice(index, 1)
    setQuestions(updated)
  }

  const validateQuestions = () => {
    const errors: any = []
    let isValid = true
    questions.forEach((q: any, idx: any) => {
      const questionErrors = []
      if (!q.text.trim()) questionErrors.push('Question text is required.')
      q.options.forEach((opt: any) => {
        if (!opt.value.trim())
          questionErrors.push(`Option ${opt.label} is required.`)
      })
      const correctLabels = q.options.map((o: any) => o.label)
      if (!correctLabels.includes(q.correctValue))
        questionErrors.push('Correct answer must be one of the options.')
      if (questionErrors.length > 0) isValid = false
      errors[idx] = questionErrors.join(' ')
    })
    setErrorMessages(errors)
    return isValid
  }

  // const handleSave = () => {
  //   if (!validateQuestions()) return
  //   saveQuestions.mutate({ category: selectedTestID, questions })
  // }

  return (
    <div className='p-4 space-y-4'>
      <div className='flex gap-4 items-end'>
        <div>
          <label className='block text-sm font-medium'>Category</label>
          <Select onValueChange={handleCategoryChange}>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Select Category' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {dtCategory?.map((cat: any) => (
                  <SelectItem key={cat.ID} value={cat.ID}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className='block text-sm font-medium'>Test</label>
          <Select value={selectedTestID} onValueChange={handleTestChange}>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Select Test' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {tests.map((test: any) => (
                  <SelectItem key={test.ID} value={test.ID}>
                    {test.title}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {selectedTestID && existingQuestions?.length > 0 && existingQuestions.map((q: any, i: any) => (
        <Card key={i} className='space-y-4 p-4 border-slate-300'>
          <CardContent className='space-y-2'>
            <div className='flex justify-between items-center'>
              <h2 className='text-lg font-semibold'>Question {i + 1}</h2>
              {questions.length > 1 && (
                <Button variant='ghost' onClick={() => removeQuestion(i)}>
                  <FaTrashAlt className='w-4 h-4' />
                </Button>
              )}
            </div>
            <Input
              placeholder='Enter question text'
              value={q.text}
              onChange={(e: any) =>
                handleQuestionChange(i, 'text', e.target.value)
              }
            />
            <div className='grid grid-cols-2 gap-2'>
              {q.options.map((opt: any, j: any) => (
                <Input
                  key={j}
                  placeholder={`Option ${opt.label}`}
                  value={opt.value}
                  onChange={(e: any) =>
                    handleOptionChange(i, j, e.target.value)
                  }
                />
              ))}
            </div>
            <div className='space-y-1'>
              <label className='text-sm font-medium'>Correct Answer:</label>
              <Select
                value={q.correctValue}
                onValueChange={(val: any) =>
                  handleQuestionChange(i, 'correctValue', val)
                }
              >
                <SelectTrigger className='w-[180px] border-slate-300'>
                  <SelectValue placeholder='Select answer' />
                </SelectTrigger>
                <SelectContent>
                  {q.options.map((opt: any) => (
                    <SelectItem key={opt.label} value={opt.label}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {errorMessages[i] && (
              <div className='text-red-500 text-sm mt-2'>
                {errorMessages[i]}
              </div>
            )}
          </CardContent>
        </Card>
      ))}

      <Card
        // onClick={addQuestion}
        className='cursor-pointer hover:bg-green-100 transition-colors duration-200 border border-green-500 text-green-700 flex justify-center items-center py-6'
      >
        <CardContent className='flex items-center justify-center gap-2 text-green-600'>
          <FaPlusCircle className='w-5 h-5' />
          <span className='text-lg font-medium'>Add Question</span>
        </CardContent>
      </Card>

      <div className='flex justify-end'>
        <Button
          // onClick={handleSave}
          className='bg-blue-600 text-white hover:bg-blue-700'
        >
          {existingQuestions && existingQuestions.length > 0
            ? 'Update Questions'
            : 'Save Questions'}
        </Button>
      </div>
    </div>
  )
}

export default CreateQuestionPage
