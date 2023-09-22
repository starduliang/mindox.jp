import Image from 'next/image'

type DataType = {
  title: string
  subTitle: string
}

const data: DataType = {
  title: 'Advancing\n\nThrough\n\nEmerging Tech',
  subTitle: '進化するテクノロジーで革命を促す'
}

const Hero = () => (
  <section>
    <div className="--absolute-x-center w-[83.2%] top-[155px]">
      <ul className="text-[3.125vw]">
        {data.title
          .split('\n\n')
          .slice(0, 3)
          .map((item, i) => (
            <li key={i} className="font-semibold">
              {item}
            </li>
          ))}
        <li className="text-[1.1vw] py-4">{data.subTitle}</li>
      </ul>
    </div>
    <div className="flex justify-end">
      <figure className="w-[63vw]">
        <Image src="/20230901_0.jpeg" alt={'banner image'} width={500} height={300} />
      </figure>
    </div>
  </section>
)

export default Hero
