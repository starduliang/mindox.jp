import Image from 'next/image'

type DataType = {
  title: string
  subTitle: string
}

const data: DataType = {
  title: 'Advancing\n\nThrough\n\nEmerging TECH',
  subTitle: '進化するテクノロジーで革命を促す'
}

const Hero = () => (
  <section className="flex justify-end mb-56 md:mb-0">
    <ul className="absolute --left-1 md:--md-left-1 top-24 md:top-36 z-10">
      {data.title.split('\n\n').map((item, i) => (
        <li key={i} className="text-[12vw] md:text-[4vw] font-bold leading-tight">
          {item}
        </li>
      ))}
      <li className="text-[4vw] md:text-[1.5vw] py-4">{data.subTitle}</li>
    </ul>
    <div className="relative">
      <Image src="/20230901_0.jpeg" alt={'banner image'} className="w-[75vw] md:w-[63.7vw]" width={847} height={476} />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>
    </div>
  </section>
)

export default Hero
