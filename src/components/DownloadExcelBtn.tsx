/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import * as XLSX from 'xlsx'
import { saveAs } from 'file-saver'
import { Button } from './ui/button'

const DownloadExcelButton = ({dataRandom, dataName}:any) => {
  const handleDownload = () => {
    // Contoh data, bisa diganti dengan data dari API
    const data = dataRandom

    // Buat worksheet dari data
    const worksheet = XLSX.utils.json_to_sheet(data)

    // Buat workbook dan tambahkan worksheet ke dalamnya
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')

    // Konversi ke format Excel
    const excelBuffer = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array'
    })

    // Buat blob dan download
    const blob = new Blob([excelBuffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
    })

    saveAs(blob, `${dataName}.xlsx`)
  }

  return (
    <Button
      onClick={handleDownload}
      className='px-4 py-2 cursor-pointer  text-white rounded-md'
    >
      Download Excel
    </Button>
  )
}

export default DownloadExcelButton
