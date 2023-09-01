import Image from 'next/image'

const items: string[] = ['Advancing', 'Through', 'Emerging Tech', '進化するテクノロジーで革命を促す']

export default function Home() {
  return (
    <main>
      <section>
        <div className="--absolute-x-center w-[83.2%] top-[155px]">
          <ul className="text-[3.125vw]">
            {items.slice(0, 3).map((item, i) => (
              <li key={i} className="font-semibold">
                {item}
              </li>
            ))}
            <li className="text-[1.1vw] py-4">{items.slice(-1)}</li>
          </ul>
        </div>
        <div className="flex justify-end">
          <figure className="w-[63vw]">
            <Image src="/20230901_0.jpeg" alt={''} layout="responsive" width={500} height={300} />
          </figure>
        </div>
      </section>
    </main>
  )
}
