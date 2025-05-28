/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { PureComponent } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from 'recharts'

const data = [
    { name: '50', score: 50, studentCount: 18 },
    { name: '60', score: 60, studentCount: 35 },
    { name: '70', score: 70, studentCount: 22 },
    { name: '80', score: 80, studentCount: 28 },
    { name: '90', score: 90, studentCount: 25 },
    { name: '100', score: 100, studentCount: 30 },
]

const getColor = (score:any) => {
    if (score >= 100) return '#00FFFF'   // Brilliant
    if (score >= 90) return '#00B0FF'    // Great
    if (score >= 80) return '#00C853'    // Good
    if (score >= 70) return '#FFD600'    // Inaccuracy
    if (score >= 60) return '#FF6D00'    // Mistake
    return '#D50000'                     // Blunder
  }
export default class ScoreBar extends PureComponent {
  render () {
    return (
      <ResponsiveContainer width='100%' height={320} >
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          barSize={40}
        >
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray='3 3' />
          <Bar dataKey='studentCount' name='Number of Students' fill='#22c55e'>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColor(entry.score)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    )
  }
}
