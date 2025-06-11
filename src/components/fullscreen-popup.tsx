// components/FullscreenPopup.js
import { useEffect, useState } from 'react'

export default function FullscreenPopup () {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      // Anggap tablet dan HP memiliki width <= 1024px
      if (width <= 1024) {
        setShowPopup(true)
      } else {
        setShowPopup(false)
      }
    }

    checkScreenSize()

    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  if (!showPopup) return null

  return (
    <div className='fixed inset-0 bg-black flex items-center justify-center z-50 p-4'>
      <div className='text-center text-white max-w-md'>
        <h2 className='text-2xl font-bold mb-4'>Mode Layar Tidak Didukung</h2>
        <p className='text-lg'>
          Aplikasi ini hanya dapat digunakan dalam mode fullscreen di perangkat
          seperti laptop atau PC.
        </p>
      </div>
    </div>
  )
}
