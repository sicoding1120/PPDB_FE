/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { PureComponent } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const testScores = [
  { name: 'Matematika', value: 85 },
  { name: 'Bahasa Inggris', value: 72 },
  { name: 'Logika Dasar', value: 66 },
  { name: 'Diniyah', value: 90 }
]

const COLORS = ['#00bcd4', '#3b82f6', '#22c55e', '#facc15'] 

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  index
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill='white'
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline='central'
      fontSize={14}
      fontWeight='bold'
    >
      {testScores[index].value}
    </text>
  )
}

export default class TestScorePie extends PureComponent {
  render () {
    return (
      <ResponsiveContainer width='100%' height='100%'>
        <PieChart>
          <Pie
            data={testScores}
            cx='50%'
            cy='50%'
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={90}
            fill='#8884d8'
            dataKey='value'
          >
            {testScores.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    )
  }
}
