import Image from 'next/image'

import useNState from '@/components/hooks/useNState'
import GridLadder from '@/components/module/GridLadder'
import ImageHoverMask from '@/components/module/ImageHoverMask'

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
      imgSrc: '/services_0.png',
      title: 'ソフトウェアの設計開発',
      description: '情報システムに関わる製品、サービスの提供します。'
    },
    {
      imgSrc: '/services_1.jpg',
      title: 'IT人材派遣、紹介',
      description:
        'これまで多くの企業は自社システムの強化やユニークな商品の開発に欠かせない、優秀なIT人材を積極的に派遣、紹介します。'
    }
  ]
}

const Services = () => {
  const { state } = useNState<DataType>(data)

  return (
    <div className="mt-10">
      <div className="grid md:grid-cols-2 items-center mb-16">
        <div className="">
          <div className="text-7xl font-semibold">{state.title} </div>
          <div className="mt-4">{state.subtitle}</div>
        </div>
        <div>{state.description}</div>
      </div>
      <GridLadder>
        {state.items.map((item, index) => (
          <div key={index}>
            <ImageHoverMask>
              <Image className="rounded" src={item.imgSrc} alt={item.title} width={500} height={300} />
            </ImageHoverMask>
            <h2 className="mt-4 font-semibold">{item.title}</h2>
            <p className="mt-6 text-sm">{item.description}</p>
          </div>
        ))}
      </GridLadder>
    </div>
  )
}
export default Services
