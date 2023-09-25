import useNState from '@/components/hooks/useNState'
import React from 'react'

type DataType = {
  title: string
  subtitle: string
  items: {
    title: string
    subTitle: string
    description: string
  }[]
}

const data: DataType = {
  title: 'Purpose',
  subtitle: '目的',
  items: [
    {
      title: 'Mission',
      subTitle: 'ミッション',
      description:
        '私たちの使命は、テクノロジーを駆使して、クライアントの問題を素早く解決し、高品質な製品を提供し、ビジネスの成功に貢献することです。'
    },
    {
      title: 'Vision',
      subTitle: 'ビジョン',
      description:
        'ビジョンとして、テクノロジーの力を最大限に発揮し、未来をリードし、業界を変革するパートナーとして、お客様と共に歩んでいくことを目指しています。'
    },
    {
      title: 'Value',
      subTitle: 'バリュー',
      description:
        '私たちの使命は、テクノロジーを駆使して、クライアントの問題を素早く解決し、高品質な製品を提供し、ビジネスの成功に貢献することです。'
    }
  ]
}

const Purpose = () => {
  const { state } = useNState<DataType>(data)

  return (
    <div className={'grid md:grid-cols-3 gap-14 md:gap-4 '}>
      {state.items.map((group, index) => (
        <div key={index} className="relative text-center p-6 rounded shadow --border">
          <div className="text-5xl absolute -top-8 right-4">{String(index + 1).padStart(2, '0')}</div>
          <h2 className="text-4xl font-bold">{group.title}</h2>
          <h3 className="text-lg mt-4">{group.subTitle}</h3>
          <div className="mt-6">{group.description}</div>
        </div>
      ))}
    </div>
  )
}

export default Purpose
