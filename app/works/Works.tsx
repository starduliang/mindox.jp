import useNState from '@/components/hooks/useNState'
import GridLadder from '@/components/module/GridLadder'
import Image from 'next/image'

interface DataType {
  items: {
    imgSrc: string
    title: string
    description: string
  }[]
}

const data: DataType = {
  items: [{ imgSrc: '/works_0.png', title: 'サンドボックス365株式会社', description: '' }]
}

const Works = () => {
  const { state } = useNState<DataType>(data)

  return (
    <div className="mt-10">
      <GridLadder>
        {state.items.map((card, index) => (
          <div key={index}>
            <Image className="rounded" src={card.imgSrc} alt={card.title} width={500} height={300} />
            <h2 className="mt-6 text-xl font-bold">{card.title}</h2>
            <p className="mt-2 text-lg">{card.description}</p>
          </div>
        ))}
      </GridLadder>
    </div>
  )
}
export default Works
