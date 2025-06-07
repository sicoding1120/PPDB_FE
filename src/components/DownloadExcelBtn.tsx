/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React from 'react'
import jsPDF from 'jspdf'

interface PdfReportProps {
  headers: string[]
  data: Record<string, any>[]
  fileName?: string
}

const PdfReport: React.FC<PdfReportProps> = ({
  headers,
  data,
  fileName = 'laporan.pdf'
}) => {
  const generatePDF = () => {
    const doc = new jsPDF()

    // Judul
    doc.setFontSize(18)
    doc.text('Laporan Data Masuk', 14, 22)

    // Atur posisi awal tabel
    let y = 30
    const marginLeft = 14
    const rowHeight = 10
    const colWidth = 180 / headers.length // lebarkan kolom sesuai jumlah header

    // Header tabel
    doc.setFontSize(12)
    doc.setFillColor(220, 220, 220)
    doc.rect(marginLeft, y - 8, 180, rowHeight, 'F')
    headers.forEach((header, i) => {
      doc.text(String(header), marginLeft + i * colWidth + 2, y)
    })

    // Baris data
    y += rowHeight
    data.forEach(row => {
      headers.forEach((header, i) => {
        const text = row[header] !== undefined ? String(row[header]) : '-'
        doc.text(text, marginLeft + i * colWidth + 2, y)
      })
      y += rowHeight
      // Jika mau handle halaman baru, bisa ditambah logika di sini
    })

    // Save file
    doc.save(fileName)
  }

  return (
    <button
      onClick={generatePDF}
      className='px-4 py-2 bg-blue-500 dark:bg-blue-400 dark:text-white  text-white rounded-xl hover:bg-blue-500 transition'
    >
      Download PDF
    </button>
  )
}

export default PdfReport
