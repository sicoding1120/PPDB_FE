/* eslint-disable @typescript-eslint/no-explicit-any */
// Counter.js
import { useEffect, useState } from 'react'

export default function Counter({ end, className }:any) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let current = 0
    const duration = 2000// 1 detik
    const step = Math.max(Math.floor(duration / end), 10)
    const timer = setInterval(() => {
      current += 1
      setCount(current)
      if (current >= end) clearInterval(timer)
    }, step)
    return () => clearInterval(timer)
  }, [end])

  return <h2 className={className}>{end == 0 ? end : count}</h2>
}


