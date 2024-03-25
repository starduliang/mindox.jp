import Image from 'next/image'
import Container from '@/components/layouts/Container'
import Link from 'next/link'

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
    '当社は、React.jsとNext.jsの開発に特化し、独自の創造力と革新性を活かして、迅速かつ優れた品質でプロジェクトを立ち上げます。クライアントのニーズに柔軟に対応し、常に最新の技術トレンドにアンテナを張っています。',
  items: [
    {
      title: 'フロントエンド開発が強みです',
      description:
        '当社は、React.jsを活用した革新的なフロントエンド開発に専念しています。我々は、React.jsを中心に据えた高品質なWebアプリケーションの構築に注力し、これが私たちの強みです。 当社の開発チームは、React.jsのエキスパートであり、幅広い業界での経験を持っています。最新の技術を駆使し、お客様のニーズに応じた最適なソリューションを提供いたします。',
      imgSrc: '/home_0.jpeg'
    },
    {
      title: 'コスト削減率増加',
      description:
        '当社の開発プロセスは、迅速なプロトタイピングから本番環境への展開までを効率的に行います。お客様との密接なコミュニケーションを大切にし、常に品質向上に取り組んでいます。',
      imgSrc: '/home_1.jpg'
    },
    {
      title: 'プロジェクト実績多数',
      description:
        '当社のReact.js開発実績には、さまざまな分野のプロジェクトが含まれています。これらのプロジェクトは、革新的で使いやすいアプリケーションとして市場で高い評価を受けています。',
      imgSrc: '/home_2.jpg'
    }
  ]
}

const Strength = () => (
  <>
    <Container className="grid md:grid-cols-2 relative">
      <div>
        <div className="text-7xl font-bold">{data.title}</div>
        <div className="mt-8">{data.subtitle}</div>
        <div>
          <Link href="/service" className="block py-6 mt-6 --link">
            View More ▶︎
          </Link>
        </div>
      </div>
      <div className="bg-opacity-0 pl-8">{data.description}</div>
      <Image className="absolute -right-4 " src="/strength_0.png" alt={data.title} width={700} height={300} />
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
              <div className="mt-8 leading-relaxed">{item.description}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  </>
)

export default Strength
