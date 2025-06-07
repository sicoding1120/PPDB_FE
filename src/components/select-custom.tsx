/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select'

const SelectCustom = ({ onChange }: {onChange: (e:any)=> void}) => {
  return (
    <Select onValueChange={onChange}>
  <SelectTrigger className='w-[80px] '>
    <SelectValue placeholder='10' />
  </SelectTrigger>
  <SelectContent className='outline-none border-1 border-slate-300'>
    <SelectGroup>
      <SelectLabel>Max fill</SelectLabel>
      <SelectItem value='5'>5</SelectItem>
      <SelectItem value='10'>10</SelectItem>
      <SelectItem value='20'>20</SelectItem>
      <SelectItem value='30'>30</SelectItem>
      <SelectItem value='40'>40</SelectItem>
      <SelectItem value='50'>50</SelectItem>
      <SelectItem value='100'>100</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>

  )
}

export default SelectCustom