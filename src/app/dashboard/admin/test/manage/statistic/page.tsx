'use client'
import ScoreBar from '@/components/ScoreBar'
import TestScorePie from '@/components/TestScoreBar'
import React from 'react'

const StatisticPage = () => {
  return (
    <section className='w-full h-full p-1 flex flex-col gap-6 mb-2'>
      <HeaderSection />
      <StatisticSection />
      <TestCategorySection />
      <QuestionByCategorySection />
      <TableStudentRank />
      <DifficultQuestionTable />
    </section>
  )
}

const HeaderSection = () => {
  return (
    <div className='w-full h-[30vh] bg-white rounded-xl bg-statistic-test bg-cover bg-top bg-no-repeat p-6'>
      <div className='w-full h-full grid grid-cols-3 gap-6  items-end'>
        <div className='w-full h-1/2 bg-white rounded-xl p-4 flex flex-col gap-1'>
          <span className='text-5xl font-bold '>30</span>
          <h2 className='text-md font-medium mb-4'>Student passed</h2>
        </div>
        <div className='w-full h-1/2 bg-white rounded-xl p-4 flex flex-col gap-1'>
          <span className='text-5xl font-bold '>30</span>
          <h2 className='text-md font-medium mb-4'>Student Failed</h2>
        </div>

        <div className='w-full h-1/2 bg-white rounded-xl p-4 flex flex-col gap-1'>
          <span className='text-5xl font-bold '>98</span>
          <h2 className='text-md font-medium mb-4'>Score Range</h2>
        </div>
      </div>
    </div>
  )
}

const StatisticSection = () => {
  return (
    <div className='w-full h-[40vh] grid grid-cols-2 gap-6'>
      <div className='w-full h-full rounded-xl bg-white p-4 flex flex-col gap-2'>
        <h3 className='text-xl capitalize font-medium'>average test score</h3>
        <div className='flex gap-2 w-full h-full'>
          <div className='w-2/3'>
            <TestScorePie />
          </div>
          <div className=' w-1/3 flex flex-col gap-2 justify-center items-start '>
            <div className='flex fap-2 items-center gap-2'>
              <div className='w-4 h-4 bg-[#00bcd4] rounded-full'></div>
              <span>Matematika</span>
            </div>
            <div className='flex fap-2 items-center gap-2'>
              <div className='w-4 h-4 bg-[#3b82f6] rounded-full'></div>
              <span>Bahasa Inggris</span>
            </div>
            <div className='flex fap-2 items-center gap-2'>
              <div className='w-4 h-4 bg-[#22c55e] rounded-full'></div>
              <span>Logika Dasar</span>
            </div>
            <div className='flex fap-2 items-center gap-2'>
              <div className='w-4 h-4 bg-[#facc15] rounded-full'></div>
              <span>Diniyah</span>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-full rounded-xl bg-white flex justify-center items-center'>
        <ScoreBar />
      </div>
    </div>
  )
}

const TableStudentRank = () => {
  return <div className='w-full h-[60vh] bg-white rounded-xl'></div>
}

const TestCategorySection = () => {
  return (
    <div className='w-full h-full flex flex-col gap-6 '>
      <h3 className='text-2xl font-semibold pl-2'>Question By Test</h3>
      <div className='w-full grid grid-cols-4 gap-6'>
        <div className='w-full h-[70px] bg-white rounded-xl cursor-pointer'></div>
        <div className='w-full h-[70px] bg-white rounded-xl cursor-pointer'></div>
        <div className='w-full h-[70px] bg-white rounded-xl cursor-pointer'></div>
        <div className='w-full h-[70px] bg-white rounded-xl cursor-pointer'></div>
      </div>
    </div>
  )
}

const QuestionByCategorySection = () => {
  return (
    <div className='w-full h-full grid grid-cols-2 gap-6'>
      <div className='w-full h-full flex flex-col gap-6 '>
        <div className='w-full h-[40vh] bg-white rounded-xl '></div>
        <div className='w-full h-[40vh] bg-white rounded-xl '></div>
        <div className='w-full h-[40vh] bg-white rounded-xl '></div>
        <div className='w-full h-[40vh] bg-white rounded-xl '></div>
        <div className='w-full h-[40vh] bg-white rounded-xl '></div>
        <div className='w-full h-[40vh] bg-white rounded-xl '></div>
        <div className='w-full h-[40vh] bg-white rounded-xl '></div>
        <div className='w-full h-[40vh] bg-white rounded-xl '></div>
        <div className='w-full h-[40vh] bg-white rounded-xl '></div>
        <div className='w-full h-[40vh] bg-white rounded-xl '></div>
      </div>
      <div className='sticky top-6 self-start h-fit'>
        <div className='h-[40vh] bg-white rounded-xl' />
      </div>
    </div>
  )
}

const DifficultQuestionTable = () => {
  return <div className='w-full h-[50vh] rounded-xl bg-white'></div>
}

export default StatisticPage
