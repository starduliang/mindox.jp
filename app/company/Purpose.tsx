import React from 'react'

const Purpose = () => {
  const groupData = [
    {
      title: 'Mission',
      subTitle: 'ミッション',
      description: (
        <p>
          私たちの使命は、テクノロジーを駆使して、クライアントの問題を素早く解決し、高品質な製品を提供し、ビジネスの成功に貢献することです。
        </p>
      )
    },
    {
      title: 'Vision',
      subTitle: 'ビジョン',
      description: (
        <p>
          ビジョンとして、テクノロジーの力を最大限に発揮し、未来をリードし、業界を変革するパートナーとして、お客様と共に歩んでいくことを目指しています。
        </p>
      )
    },
    {
      title: 'Value',
      subTitle: 'バリュー',
      description: (
        <p>
          私たちの使命は、テクノロジーを駆使して、クライアントの問題を素早く解決し、高品質な製品を提供し、ビジネスの成功に貢献することです。
        </p>
      )
    }
  ]

  return (
    <div className={'grid md:grid-cols-3 gap-14 md:gap-4 '}>
      {groupData.map((group, index) => (
        <div key={index} className="relative text-center p-6 rounded shadow border border-[color-border] border-1 ">
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
