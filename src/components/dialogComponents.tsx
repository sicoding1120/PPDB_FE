/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from './ui/select'
import useTest from '@/hooks/use-test'

interface DialogProps {
  variant: 'createTest'
}

const DialogComponents = ({ variant }: DialogProps) => {
  const { useCategoryTest, useTestApi } = useTest()
  const { useCreateTest } = useTestApi()
  const { createTestFn } = useCreateTest()
  const { useGetAllCategoryTest, } = useCategoryTest()
  const { data: categories } = useGetAllCategoryTest()
  const [categoryId, setCategoryId] = useState('')
  const [testTitle, setTestTitle] = useState('')


  // function
  const handleCreateTest =async () => {
    createTestFn({
      title: testTitle,
      categoryID: categoryId
    })
  }


  if (variant === 'createTest') {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant='default'
            className='px-12 bg-green-500  hover:bg-green-500/80 '
          >
            Create Test
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px] w-full'>
          <DialogHeader>
            <DialogTitle>Create Test</DialogTitle>
            <DialogDescription>
              create a new test by filling out the information below.
            </DialogDescription>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='name' className='text-right'>
                title
              </Label>
              <Input
                id='name'
                placeholder='enter title'
                className='col-span-3'
                onChange={(e: any) => setTestTitle(e.target.value)}
              />
            </div>
            <div className='w-full grid grid-cols-4 items-center gap-4'>
              <Label className='text-right'>Category</Label>
              <Select
                onValueChange={value => setCategoryId(value)}
                value={categoryId}
              >
                <SelectTrigger className=' w-[170px]'>
                  <SelectValue placeholder='select' />
                </SelectTrigger>
                <SelectContent className='outline-none border-1 border-slate-300 '>
                  <SelectGroup>
                    <SelectLabel>Categories</SelectLabel>
                    {categories &&
                      categories?.map((d: any, i: any) => (
                        <SelectItem value={d.ID} key={i}>
                          {d.name}
                        </SelectItem>
                      ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleCreateTest}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }
}

export default DialogComponents
