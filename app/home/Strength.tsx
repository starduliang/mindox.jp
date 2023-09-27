import Image from 'next/image'
import Container from '@/components/layouts/Container'

type DataType = {
  title: string
  subtitle: string
  description: string
  items: {
    title: string
    description: string
    imgSrc: string
  }[]
}

const data: DataType = {
  title: 'Strength',
  subtitle: 'Mindoxの強み',
  description:
    '当社は高度な情報技術と深い業務知識を活用してお客様へ最大限に貢献します。お客様のプライバシーを重視、情報セキュリティをビジネス原点として会社理念に浸透します。当社の業務はコンピュータのソフトウェアの企画、研究、開発、設計、製造、販売、保守、リース並びにそれらに関するコンサルティング業務、またはインターネット等の通信ネットワーク、電子技術を利用した各種情報提供サービス及び情報収集サービスを請け負います。各サービスについてお気軽にお問い合わせください。',
  items: [
    {
      title: '安心率UP⤴',
      description:
        '初めてのお客様も安心！専門用語を使わずにお客様の大切な時間をお預かり、最速で高品質なサービスを提供いたします。初めてのお客様に向けてFaQもご用意しております。',
      imgSrc: '/20230901_0.jpeg'
    },
    {
      title: 'コスト削減率大増加⤴',
      description:
        '品質を担保してコスト削減！開発実績を誇るMindoxの品質・プロセスを仕組化し、トレーニングをしております。優秀なエンジニアが在籍しております。',
      imgSrc: '/20230901_0.jpeg'
    },
    {
      title: 'プロジェクト実績数⤴',
      description:
        'プロジェクト実績数⤴ 数々のプロジェクトを支援した実績。現在の開発プロジェクトに問題がありお困りのお客様、これからビジネスを立ち上げようと考えているお客様、どんなことでもお問合せください。',
      imgSrc: '/20230901_0.jpeg'
    }
  ]
}

const Strength = () => (
  <>
    <Container className="grid md:grid-cols-2">
      <div>
        <div className="text-7xl font-bold">{data.title}</div>
        <div className="mt-8">{data.subtitle}</div>
      </div>
      <div>{data.description}</div>
    </Container>
    <section>
      <ul className="space-y-48 mt-32">
        {data.items.map((item, index) => (
          <li key={index} className="group relative rounded">
            <Image
              className="group-[:nth-child(odd)]:ml-auto group-[:nth-child(even)]:mr-auto group-[:nth-child(odd)]:md:ml-[--md-1-margin-1-interval] group-[:nth-child(odd)]:md:w-[--md-1-margin-2-interval] group-[:nth-child(even)]:md:w-[--md-1-margin-2-interval] w-[90vw]"
              src={item.imgSrc}
              alt={item.title}
              width={500}
              height={300}
            />
            <div className="--container md:ml-0 md:mr-0 group-[:nth-child(odd)]:md:left-[--md-margin] group-[:nth-child(even)]:md:right-[--md-margin] relative px-14 py-20 bg-[color-bg] md:absolute md:-top-10 md:w-1/2 md:h-[400px]">
              <div className="absolute -top-16 right-10 text-8xl">{String(index + 1).padStart(2, '0')}</div>
              <div className="text-2xl">{item.title}</div>
              <div className="mt-8">{item.description}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  </>
)

export default Strength
