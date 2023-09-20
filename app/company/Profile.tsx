import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'

function createData(name: string, value: string) {
  return { name, value }
}

const rows = [
  createData('社名', 'Mindox株式会社'),
  createData('所在地', '東京都渋谷区道玄坂1丁目10番8号渋谷道玄坂東急ビル2F−C'),
  createData('代表取締役', '杜梁'),
  createData('連絡先', 'TEL：070-1321-1199'),
  createData('资本金', '300万円'),
  createData(
    '事業内容',
    'コンピュータのソフトウェアの企画、研究、開発、設計、製造、販売、保守、リース並びにそれらに関するコンサルティング業務\n\nインターネット等の通信ネットワーク、電子技術を利用した各種情報提供サービス及び情報収集サービス\n\n前（各）号に附帯関連する一切の事業'
  )
]

const Profile = ({ className }: { className?: string }) => {
  return (
    <section className={className ?? ''}>
      <h1 className="text-center text-7xl font-bold"> Company Profile</h1>
      <h2 className="mt-4 text-center text-lg">会社概要</h2>
      <TableContainer className="bg-transparent mt-20">
        <Table aria-label="Company Profile">
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th">
                  <div className="py-4 w-32 text-base">{row.name}</div>
                </TableCell>
                <TableCell>
                  <div className="py-4 text-base">
                    {row.value.split('\n').map((line, index) => (
                      <p className="py-1 " key={index}>
                        {line}
                      </p>
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  )
}

export default Profile
