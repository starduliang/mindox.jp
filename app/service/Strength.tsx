import React from 'react'

import ContainerBoarded from '@/components/module/ContainerBoarded'

interface dataType {
  title: string
  subtitle: string
  items: {
    title: string
    subtitle: string
    description: string
  }[]
}

const data: dataType = {
  title: 'Strength',
  subtitle: 'Mindox株式会社が選ばれる理由',
  items: [
    {
      title: '安心率UP⤴',
      subtitle: '初めてのお客様も安心！',
      description:
        '専門用語を使わずにお客様の大切な時間をお預かり、最速で高品質なサービスを提供いたします。初めてのお客様に向けてFaQもご用意しております。'
    },
    {
      title: 'コスト削減率大増加⤴',
      subtitle: '品質を担保してコスト削減！',
      description:
        '100種類を超える開発実績を誇るMindoxの品質・プロセスを仕組化し、トレーニングをしております。優秀なエンジニアが在籍しております。'
    },
    {
      title: 'プロジェクト実績数⤴',
      subtitle: '数々のプロジェクトを支援した実績',
      description:
        '現在の開発プロジェクトに問題がありお困りのお客様、これからビジネスを立ち上げようと考えているお客様、どんなことでもお問合せください。'
    }
  ]
}

const Strength = () => (
  <div>
    <div className="text-center">
      <div className="text-7xl font-bold">{data.title}</div>
      <div className="text-lg mt-4">{data.subtitle}</div>
    </div>
    <ContainerBoarded className="grid grid-cols-1 md:grid-cols-3 mt-20" color="[color-border-lighter]">
      {data.items.map((item, index) => (
        <div key={index} className="2 px-6 py-8 text-center">
          <h2 className="text-2xl font-bold">{item.title}</h2>
          <h3 className="text-xl mt-[80px]">{item.subtitle}</h3>
          <p className="text-sm mt-6 leading-loose">{item.description}</p>
        </div>
      ))}
    </ContainerBoarded>
  </div>
)

export default Strength
