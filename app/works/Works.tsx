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
  items: [
    { imgSrc: '/20230901_0.jpeg', title: 'Title 1', description: 'Description 1' },
    { imgSrc: '/20230901_0.jpeg', title: 'Title 2', description: 'Description 2' },
    { imgSrc: '/20230901_0.jpeg', title: 'Title 3', description: 'Description 3' },
    { imgSrc: '/20230901_0.jpeg', title: 'Title 4', description: 'Description 4' },
    { imgSrc: '/20230901_0.jpeg', title: 'Title 5', description: 'Description 5' },
    { imgSrc: '/20230901_0.jpeg', title: 'Title 6', description: 'Description 6' },
    { imgSrc: '/20230901_0.jpeg', title: 'Title 7', description: 'Description 7' }
  ]
}

const Works = () => {
  const { state } = useNState<DataType>(data)

  return (
    <div className="mt-10">
      <GridLadder>
        {state.items.map((card, index) => (
          <div key={index}>
            <Image className="rounded" src={card.imgSrc} alt={card.title} width={500} height={300} />
            <h2 className="mt-4 text-xl">{card.title}</h2>
            <p className="mt-2 text-lg">{card.description}</p>
          </div>
        ))}
      </GridLadder>
    </div>
  )
}
export default Works
