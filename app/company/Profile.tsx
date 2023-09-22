import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'

type DataType = {
  title: string
  subtitle: string
  items: {
    name: string
    value: string | string[]
  }[]
}

const data: DataType = {
  title: 'Company Profile',
  subtitle: '会社概要',
  items: [
    { name: '社名', value: 'Mindox株式会社' },
    { name: '所在地', value: '東京都渋谷区道玄坂1丁目10番8号渋谷道玄坂東急ビル2F−C' },
    { name: '代表取締役', value: '杜梁' },
    { name: '連絡先', value: 'TEL：070-1321-1199' },
    { name: '资本金', value: '300万円' },
    {
      name: '事業内容',
      value: [
        'コンピュータのソフトウェアの企画、研究、開発、設計、製造、販売、保守、リース並びにそれらに関するコンサルティング業務',
        'インターネット等の通信ネットワーク、電子技術を利用した各種情報提供サービス及び情報収集サービス',
        '前（各）号に附帯関連する一切の事業'
      ]
    }
  ]
}

const Profile = () => {
  const createData = (name: string, value: string | string[]) => {
    return { name, value }
  }

  return (
    <div>
      <h1 className="text-center text-7xl font-bold">{data.title}</h1>
      <h2 className="mt-4 text-center text-lg">{data.subtitle}</h2>
      <TableContainer className="bg-transparent mt-20">
        <Table aria-label="Company Profile">
          <TableBody>
            {data.items.map((row) => {
              const rowData = createData(row.name, row.value)
              return (
                <TableRow key={rowData.name}>
                  <TableCell component="th" className="border-b border-gray-400 border-b-1">
                    <div className="py-4 w-24 md:w-48 text-base">{rowData.name}</div>
                  </TableCell>
                  <TableCell>
                    <div className="py-4 text-base">
                      {Array.isArray(rowData.value) ? (
                        <div className="flex flex-col gap-3">
                          {rowData.value.map((item, index) => (
                            <p key={index}>{item}</p>
                          ))}
                        </div>
                      ) : (
                        rowData.value
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Profile
