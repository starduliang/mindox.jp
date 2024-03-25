import Image from 'next/image'

type DataType = {
  title: string
  subTitle: string
}

const data: DataType = {
  title: 'Advancing\n\nWith\n\nNew TECH',
  subTitle: '進化するテクノロジーで革命を促す'
}

const Hero = () => (
  <section className="mb-56 md:mb-0">
    <ul className="absolute left-[--margin] md:left-[--md-margin] top-24 md:top-36 z-10">
      {data.title.split('\n\n').map((item, i) => (
        <li key={i} className="text-[12vw] md:text-[3.5vw] font-bold leading-tight">
          {item}
        </li>
      ))}
      <li className="text-[4vw] md:text-[1.2vw] py-4">{data.subTitle}</li>
    </ul>
    <div className="relative">
      <Image
        src="/20230901_0.jpeg"
        alt={'banner image'}
        className="md:w-[--md-1-margin-2-interval] md:ml-[--md-1-margin-1-interval] w-[75vw] ml-auto"
        width={847}
        height={476}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>
    </div>
  </section>
)

export default Hero
