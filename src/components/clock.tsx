import { useEffect, useState } from 'react'

function ClockComp () {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000) // update setiap detik

    return () => clearInterval(timer) // bersihkan interval saat unmount
  }, [])

  const formattedTime = time.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })

  return <div className='text-6xl font-mono'>{formattedTime}</div>
}

export default ClockComp
