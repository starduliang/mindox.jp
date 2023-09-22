import React from 'react'

type DataType = {
  title: string
  subtitle: string
  items: {
    name: string
    value: string
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
      value:
        'コンピュータのソフトウェアの企画、研究、開発、設計、製造、販売、保守、リース並びにそれらに関するコンサルティング業務\n\nインターネット等の通信ネットワーク、電子技術を利用した各種情報提供サービス及び情報収集サービス\n\n前（各）号に附帯関連する一切の事業'
    }
  ]
}

const Profile = () => {
  return (
    <div>
      <h1 className="text-center text-7xl font-bold">{data.title}</h1>
      <h2 className="mt-4 text-center text-lg">{data.subtitle}</h2>
      <table className="table-auto bg-transparent mt-20">
        <tbody>
          {data.items.map((item, index) => (
            <tr key={index} className="border-b border-[color-border-lighter] border-b-1">
              <th className="py-10 border-b border-gray-400 font-normal text-left">
                <div className="w-24 md:w-48 text-base ">{item.name}</div>
              </th>
              <td className="py-10">
                <div className="text-base">
                  {item.value.split('\n\n').map((value, index) => (
                    <p key={index}>{value}</p>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Profile
