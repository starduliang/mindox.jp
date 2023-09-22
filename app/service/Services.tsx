import GridLadder from '@/components/module/GridLadder'
import Image from 'next/image'

interface DataType {
  title: string
  subtitle: string
  description: string
  items: {
    imgSrc: string
    title: string
    description: string
  }[]
}

const data: DataType = {
  title: 'Services',
  subtitle: 'サービス',
  description: '先進技術を中心に幅広いサービスを展開しています。',
  items: [
    {
      imgSrc: '/20230901_0.jpeg',
      title: 'ソフトウェアの設計開発',
      description: '情報システムに関わる製品、サービスの提供します。'
    },
    {
      imgSrc: '/20230901_0.jpeg',
      title: 'IT人材派遣、紹介',
      description:
        'これまで多くの企業は自社システムの強化やユニークな商品の開発に欠かせない、優秀なIT人材を積極的に派遣、紹介します。'
    }
  ]
}

const Services = () => (
  <div className="mt-10">
    <div className="grid md:grid-cols-2 items-center mb-16">
      <div className="">
        <div className="text-7xl font-semibold">{data.title} </div>
        <div className="mt-4">{data.subtitle}</div>
      </div>
      <div>{data.description}</div>
    </div>
    <GridLadder>
      {data.items.map((item, index) => (
        <div key={index}>
          <Image className="rounded" src={item.imgSrc} alt={item.title} width={500} height={300} />
          <h2 className="mt-4 font-semibold">{item.title}</h2>
          <p className="mt-6 text-sm">{item.description}</p>
        </div>
      ))}
    </GridLadder>
  </div>
)

export default Services
