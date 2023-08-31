const items: string[] = ['Advancing', 'Through', 'Emerging Tech', '進化するテクノロジーで革命を促す']

export default function Home() {
  return (
    <main>
      <section className="absolute w-[83.2%] left-1/2 transform -translate-x-1/2 top-[155px] z-10 font-san">
        <ul className="text-[3.125vw]">
          {items.slice(0, 3).map((item, i) => (
            <li key={i} className="font-semibold">
              {item}
            </li>
          ))}
          <li className="text-[1.1vw] py-4">{items.slice(-1)}</li>
        </ul>
      </section>
    </main>
  )
}
