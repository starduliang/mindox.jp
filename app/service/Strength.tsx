import React from 'react'

import ContainerBoarded from '@/components/module/ContainerBoarded'
import useNState from '@/components/hooks/useNState'

interface DataType {
  title: string
  subtitle: string
  items: {
    title: string
    subtitle: string
    description: string
  }[]
}

const data: DataType = {
  title: 'Strength',
  subtitle: 'Mindox株式会社が選ばれる理由',
  items: [
    {
      title: 'フロントエンドが強みです',
      subtitle: 'フロントエンドを強みに',
      description:
        '当社は、React.jsを活用した革新的なフロントエンド開発に専念しています。我々は、React.jsを中心に据えた高品質なWebアプリケーションの構築に注力し、これが私たちの強みです。'
    },
    {
      title: 'コスト削減率増加',
      subtitle: '品質を担保してコスト削減！',
      description:
        '開発プロセスは、迅速なプロトタイピングから本番環境への展開までを効率的に行います。お客様との密接なコミュニケーションを大切にし、常に品質向上に取り組んでいます。'
    },
    {
      title: 'プロジェクト実績多数',
      subtitle: '数々のプロジェクトを支援した実績',
      description:
        '現在の開発プロジェクトに問題がありお困りのお客様、これからビジネスを立ち上げようと考えているお客様、どんなことでもお問合せください。'
    }
  ]
}

const Strength = () => {
  const { state } = useNState<DataType>(data)

  return (
    <div>
      <div className="text-center">
        <div className="text-7xl font-bold">{state.title}</div>
        <div className="text-lg mt-4">{state.subtitle}</div>
      </div>
      <ContainerBoarded className="grid grid-cols-1 md:grid-cols-3 mt-20">
        {state.items.map((item, index) => (
          <div key={index} className="2 px-6 py-8 text-center">
            <h2 className="text-2xl font-bold">{item.title}</h2>
            <h3 className="text-xl mt-[80px]">{item.subtitle}</h3>
            <p className="text-sm mt-6 leading-loose">{item.description}</p>
          </div>
        ))}
      </ContainerBoarded>
    </div>
  )
}
export default Strength
